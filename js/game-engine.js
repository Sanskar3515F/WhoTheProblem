/**
 * WHO'S THE PROBLEM? 😂 - Master Game Engine & Rules Coordinator
 * Orchestrates:
 * - Round cycle & Phase management (Lobby -> Prediction -> Voting -> Results Reveal -> Leaderboard -> GameOver)
 * - Question selection with Category & Spice Level filters
 * - Dynamic Game Modes: Normal, Guess Majority (+2 pts), Reverse Mode, Double Trouble, Random Chaos
 * - Skip Question & Report Question mechanisms
 * - Synchronized timers & authorative score/award calculations
 */

class GameEngine {
  constructor() {
    this.roomData = null;
    this.timerInterval = null;
    this.timeLeft = 0;
    this.currentMode = 'normal';
    this.usedQuestionIds = [];
    this.reportedQuestionsCount = {};
  }

  setRoomData(data) {
    this.roomData = data;
  }

  isHost() {
    if (!this.roomData || !this.roomData.config) return false;
    const currentUid = window.firebaseService.getUserId();
    return this.roomData.config.hostId === currentUid;
  }

  // ==========================================
  // HOST CONTROLS & PHASE TRANSITIONS
  // ==========================================

  /**
   * Start Game from Lobby
   */
  async startGame() {
    if (!this.isHost()) return;
    const players = Object.values(this.roomData.players || {});
    if (players.length < 3) {
      if (window.visualEffects) {
        window.visualEffects.showToast("Need at least 3 players to start! Invite friends or add a bot 🤖", "warning");
      }
      return;
    }

    this.usedQuestionIds = [];
    await this.startRound(1);
  }

  /**
   * Start a given Round
   */
  async startRound(roundNumber) {
    if (!this.isHost()) return;

    // Pick question based on categories, spice level, and custom questions
    const question = this.pickNextQuestion();

    // Determine mode for this round
    const mode = this.determineRoundMode(roundNumber);
    this.currentMode = mode;

    // Direct Majority Rules Voting Phase (No redundant prediction phase)
    const duration = this.roomData.config.votingTimeSec || 20;

    const stateUpdate = {
      phase: 'voting',
      currentRound: roundNumber,
      currentQuestion: question,
      mode: mode,
      timerEnd: Date.now() + (duration * 1000),
      revealStep: 0,
      scoresCalculated: false,
      votedPlayerIds: []
    };

    await window.firebaseService.updateRoomState(this.roomData.code, stateUpdate);
  }

  /**
   * Pick next question based on room categories & spice levels
   */
  pickNextQuestion() {
    const config = this.roomData.config || {};
    const categories = config.categories || [];
    const spiceLevel = config.spiceLevel || 'all';

    // Check if custom questions exist and randomly inject them
    if (config.customQuestions && config.customQuestions.length > 0 && Math.random() < 0.25) {
      const customQ = config.customQuestions[Math.floor(Math.random() * config.customQuestions.length)];
      return {
        id: 'custom_' + Date.now(),
        category: 'custom',
        categoryName: 'Custom Inside Joke',
        icon: '✍️',
        spiceLevel: 2,
        text: customQ,
        isCustom: true
      };
    }

    if (window.QuestionService) {
      const q = window.QuestionService.getRandomQuestion(this.usedQuestionIds, categories, spiceLevel);
      if (q) {
        this.usedQuestionIds.push(q.id);
        return q;
      }
    }

    // Fallback default
    return {
      id: 'default_col_1',
      category: 'college_chaos',
      categoryName: 'College Chaos',
      icon: '🎓',
      spiceLevel: 1,
      text: "Who comes to college only for attendance and immediately vanishes into thin air?"
    };
  }

  /**
   * Skip current question (Host action or auto-skip on report)
   */
  async skipQuestion(reason = "Skipped by host") {
    if (!this.isHost()) return;
    const newQuestion = this.pickNextQuestion();
    const duration = this.roomData.state.phase === 'prediction' ? 15 : (this.roomData.config.votingTimeSec || 20);

    const stateUpdate = {
      currentQuestion: newQuestion,
      timerEnd: Date.now() + (duration * 1000),
      votedPlayerIds: []
    };

    await window.firebaseService.updateRoomState(this.roomData.code, stateUpdate);
    if (window.visualEffects) {
      window.visualEffects.showToast(`Question skipped: ${reason} ⏭️`, "info");
    }
    if (window.soundEngine) {
      window.soundEngine.playClick();
    }
  }

  /**
   * Report inappropriate question
   */
  async reportCurrentQuestion(questionId, reportedByUid) {
    if (!questionId) return;
    if (window.QuestionService) {
      window.QuestionService.reportQuestion(questionId);
    }

    this.reportedQuestionsCount[questionId] = (this.reportedQuestionsCount[questionId] || 0) + 1;

    if (window.visualEffects) {
      window.visualEffects.showToast("Question reported and excluded from future games. 🚩", "warning");
    }

    // If host reported or if multiple players reported, skip immediately
    if (this.isHost() || this.reportedQuestionsCount[questionId] >= 2) {
      await this.skipQuestion("Reported as inappropriate");
    }
  }

  /**
   * Determine Round Mode variation for exciting game variety
   */
  determineRoundMode(roundNum) {
    if (roundNum === 3) return 'reverse'; // Reverse mode (least likely)
    if (roundNum === 4) return 'double_trouble'; // Pick 2 friends
    if (roundNum === 6) return 'random_chaos'; // Surprise double points
    return 'normal';
  }

  /**
   * Transition from Prediction to Voting
   */
  async advanceToVoting() {
    if (!this.isHost()) return;
    const duration = this.roomData.config.votingTimeSec || 20;
    const stateUpdate = {
      phase: 'voting',
      timerEnd: Date.now() + (duration * 1000),
      votedPlayerIds: []
    };
    await window.firebaseService.updateRoomState(this.roomData.code, stateUpdate);
  }

  /**
   * Calculate Results & Advance to Reveal (100% Anonymous & Secure)
   */
  async advanceToResults() {
    if (!this.isHost()) return;
    if (this.roomData.state.scoresCalculated) return;

    const roundNum = this.roomData.state.currentRound;
    const roundKey = `round_${roundNum}`;
    const roundMode = this.roomData.state.mode || 'normal';

    // Retrieve secret votes (from Host's confidential storage, DB, or room data)
    let roundVotes = (window.firebaseService.secretRoundVotes && window.firebaseService.secretRoundVotes[roundKey]) || {};
    if (Object.keys(roundVotes).length === 0 && this.roomData.votes && this.roomData.votes[roundKey]) {
      roundVotes = this.roomData.votes[roundKey];
    }

    const roundPredictions = (this.roomData.predictions && this.roomData.predictions[roundKey]) || {};
    const players = { ...this.roomData.players };

    // Tally votes secretly
    const voteCounts = {};
    Object.keys(players).forEach(id => { voteCounts[id] = 0; });

    Object.values(roundVotes).forEach(vote => {
      if (Array.isArray(vote.targetId)) {
        vote.targetId.forEach(tid => {
          if (voteCounts[tid] !== undefined) voteCounts[tid]++;
        });
      } else if (vote.targetId && voteCounts[vote.targetId] !== undefined) {
        voteCounts[vote.targetId]++;
      }
    });

    // Determine the most voted ("The Problem") or least voted in Reverse Mode
    let maxVotes = -1;
    let minVotes = 999999;
    let mostVotedPlayers = [];
    let leastVotedPlayers = [];

    Object.entries(voteCounts).forEach(([pid, count]) => {
      if (count > maxVotes && count > 0) {
        maxVotes = count;
        mostVotedPlayers = [pid];
      } else if (count === maxVotes && count > 0) {
        mostVotedPlayers.push(pid);
      }

      if (count < minVotes) {
        minVotes = count;
        leastVotedPlayers = [pid];
      } else if (count === minVotes) {
        leastVotedPlayers.push(pid);
      }
    });

    const isReverse = roundMode === 'reverse';
    const winningTargets = isReverse ? leastVotedPlayers : mostVotedPlayers;
    const pointIncrement = roundMode === 'random_chaos' ? 2 : 1;

    // Majority Rules: The name with the most votes wins directly in that round
    winningTargets.forEach(pid => {
      if (players[pid]) {
        players[pid].score = (players[pid].score || 0) + pointIncrement;
        players[pid].stats.timesProblem = (players[pid].stats.timesProblem || 0) + 1;
      }
    });

    // Track fastest & longest vote stats
    const voteTimes = Object.entries(roundVotes).map(([vid, v]) => ({ vid, time: v.timestamp || 0 }));
    if (voteTimes.length > 0) {
      voteTimes.sort((a, b) => a.time - b.time);
      const fastestId = voteTimes[0].vid;
      const slowestId = voteTimes[voteTimes.length - 1].vid;
      if (players[fastestId]) players[fastestId].stats.fastestVotes = (players[fastestId].stats.fastestVotes || 0) + 1;
      if (players[slowestId]) players[slowestId].stats.longestVotes = (players[slowestId].stats.longestVotes || 0) + 1;
    }

    // Update players in authoritative store
    await window.firebaseService.updatePlayers(this.roomData.code, players);

    // Pick random funny problem title
    const titles = window.PROBLEM_TITLES || [
      "PUBLIC ENEMY #1 🚨",
      "CHIEF CHAOS OFFICER 🌪️",
      "CERTIFIED WALKING RED FLAG 🚩",
      "DRAMA QUEEN SUPREME 👑",
      "OFFICIALLY UNHINGED 🤪"
    ];
    const assignedTitle = titles[Math.floor(Math.random() * titles.length)];

    // Update state to reveal results with vote tallies (CONFIDENTIAL: individual votes are never revealed)
    const resultDurationSec = 10; // 10 seconds automatic transition to next round (long enough to read winner's name)
    const stateUpdate = {
      phase: 'results',
      revealStep: 1,
      scoresCalculated: true,
      mostVotedId: winningTargets.length > 0 ? winningTargets[0] : null,
      tiedWinners: winningTargets.length > 1 ? winningTargets : null,
      voteTally: voteCounts,
      problemTitle: assignedTitle,
      timerEnd: Date.now() + (resultDurationSec * 1000)
    };

    await window.firebaseService.updateRoomState(this.roomData.code, stateUpdate);
  }

  /**
   * Advance to Next Round or Final Game Over
   */
  async nextRoundOrFinish() {
    if (!this.isHost()) return;
    const currentRound = this.roomData.state.currentRound;
    const totalRounds = this.roomData.config.totalRounds || 5;

    if (currentRound >= totalRounds) {
      // Game Over / Final Podium!
      const stateUpdate = {
        phase: 'gameover'
      };
      await window.firebaseService.updateRoomState(this.roomData.code, stateUpdate);
    } else {
      await this.startRound(currentRound + 1);
    }
  }

  /**
   * Reset game to Lobby (Play Again with the same group)
   */
  async playAgain() {
    if (!this.isHost()) return;
    const players = { ...this.roomData.players };
    Object.keys(players).forEach(pid => {
      players[pid].score = 0;
      players[pid].stats = {
        timesProblem: 0,
        correctPredictions: 0,
        fastestVotes: 0,
        longestVotes: 0
      };
    });

    await window.firebaseService.updatePlayers(this.roomData.code, players);

    const stateUpdate = {
      phase: 'lobby',
      currentRound: 0,
      currentQuestion: null,
      scoresCalculated: false,
      votedPlayerIds: [],
      voteTally: {}
    };

    await window.firebaseService.updateRoomState(this.roomData.code, stateUpdate);
    if (window.visualEffects) {
      window.visualEffects.showToast("Room reset to lobby! Ready for round 2? 🚀", "success");
    }
  }

  // ==========================================
  // CLIENT COUNTDOWN TIMERS
  // ==========================================
  startLocalTimer(timerEndTimestamp, onTick, onExpire) {
    this.stopLocalTimer();
    const update = () => {
      const now = Date.now();
      const remainingMs = timerEndTimestamp - now;
      const secondsLeft = Math.max(0, Math.ceil(remainingMs / 1000));
      this.timeLeft = secondsLeft;

      if (onTick) onTick(secondsLeft);

      if (secondsLeft <= 0) {
        this.stopLocalTimer();
        if (onExpire) onExpire();
      }
    };

    update();
    this.timerInterval = setInterval(update, 1000);
  }

  stopLocalTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}

// Global Singleton Instance
window.gameEngine = new GameEngine();
