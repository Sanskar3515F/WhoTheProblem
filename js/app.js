/**
 * WHO'S THE PROBLEM? 😂 - Master Application Controller
 * Wires UI, Audio, Multi-Transport Real-Time Sync, Bot Simulation, Screen Routing,
 * Question Wheel, Scorecard Generation, and Live Reactions.
 */

class AppController {
  constructor() {
    this.currentScreen = 'screen-home';
    this.selectedCreateAvatar = window.GAME_AVATARS[0];
    this.selectedJoinAvatar = window.GAME_AVATARS[1];
    this.selectedVoteTargetId = null;
    this.selectedDoubleTargets = [];
    this.selectedPredictionTargetId = null;
    this.hasSubmittedVote = false;
    this.hasSubmittedPrediction = false;
    this.lastObservedPhase = null;
    this.botSimTimeout = null;

    // Wheel state
    this.wheelSpinning = false;
    this.wheelAngle = 0;

    this.botNamesPool = [
      { name: "Maya", avatar: "☕" },
      { name: "Liam", avatar: "🧠" },
      { name: "Chloe", avatar: "💅" },
      { name: "Alex", avatar: "🥑" },
      { name: "Sam", avatar: "⏰" },
      { name: "Jordan", avatar: "🍿" },
      { name: "Zoe", avatar: "🦄" },
      { name: "Noah", avatar: "🍕" },
      { name: "Emma", avatar: "🎭" },
      { name: "Lucas", avatar: "🚀" },
      { name: "Aria", avatar: "👑" },
      { name: "Leo", avatar: "🔥" },
      { name: "Mia", avatar: "👻" },
      { name: "Ethan", avatar: "🤖" },
      { name: "Olivia", avatar: "🐱" }
    ];

    this.init();
  }

  init() {
    this.bindEvents();
    this.renderAvatarGrids();
    this.renderCategoryCheckboxes();
    this.renderCategoryShowcaseCarousel();
    this.checkUrlRoomParam();
    this.updateSoundButtonUI();
    this.initWheelCanvas();

    // Listen for network transport changes
    window.addEventListener('wtp_connection_change', (e) => {
      this.updateConnectionStatusBadge(e.detail);
    });

    // Global ambient click sound
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button, .pill-choice, .avatar-choice, .vote-card');
      if (btn && window.soundEngine) {
        window.soundEngine.playClick();
      }
    });

    // Check for auto-reconnect
    this.checkAutoReconnect();
  }

  // ==========================================
  // NAVIGATION & MODALS
  // ==========================================
  showScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach(el => {
      el.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  // ==========================================
  // EVENT BINDINGS
  // ==========================================
  bindEvents() {
    // Header navigation
    document.getElementById('nav-brand').addEventListener('click', () => {
      if (this.currentScreen !== 'screen-home') {
        if (confirm("Return to home? This will exit the current game screen.")) {
          this.resetToHome();
        }
      }
    });

    document.getElementById('btn-sound-toggle').addEventListener('click', () => {
      const isMuted = window.soundEngine.toggleMute();
      this.updateSoundButtonUI();
      window.visualEffects.showToast(isMuted ? "Sound muted 🔇" : "Sound unmuted 🔊", "info");
    });

    document.getElementById('btn-how-to-play-header').addEventListener('click', () => {
      this.openModal('modal-how-to-play');
    });

    document.getElementById('btn-dismiss-help').addEventListener('click', () => {
      this.closeModal('modal-how-to-play');
    });

    document.getElementById('btn-close-help-modal').addEventListener('click', () => {
      this.closeModal('modal-how-to-play');
    });

    // Connection status pill modal
    document.getElementById('header-status-badge').addEventListener('click', () => {
      this.openCloudSyncModal();
    });

    document.getElementById('btn-close-sync-modal').addEventListener('click', () => {
      this.closeModal('modal-cloud-sync');
    });

    document.getElementById('btn-save-custom-firebase').addEventListener('click', () => {
      this.handleSaveCustomFirebase();
    });

    // Question Wheel modal
    document.getElementById('btn-open-wheel').addEventListener('click', () => {
      this.openModal('modal-question-wheel');
    });

    document.getElementById('btn-spin-wheel-banner').addEventListener('click', () => {
      this.openModal('modal-question-wheel');
    });

    document.getElementById('btn-close-wheel-modal').addEventListener('click', () => {
      this.closeModal('modal-question-wheel');
    });

    document.getElementById('btn-spin-wheel').addEventListener('click', () => {
      this.spinWheel();
    });

    // Custom question modal
    document.getElementById('btn-close-custom-modal').addEventListener('click', () => {
      this.closeModal('modal-custom-question');
    });

    document.getElementById('btn-lobby-add-custom').addEventListener('click', () => {
      this.openModal('modal-custom-question');
    });

    document.getElementById('form-custom-question').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleCustomQuestionSubmit();
    });

    // Home buttons
    document.getElementById('btn-open-create-room').addEventListener('click', () => {
      this.openModal('modal-create-room');
    });

    document.getElementById('btn-open-join-room').addEventListener('click', () => {
      this.openModal('modal-join-room');
    });

    document.getElementById('btn-close-create-modal').addEventListener('click', () => {
      this.closeModal('modal-create-room');
    });

    document.getElementById('btn-close-join-modal').addEventListener('click', () => {
      this.closeModal('modal-join-room');
    });

    // Quick demo button
    document.getElementById('btn-quick-play').addEventListener('click', () => {
      this.launchQuickDemoRoom();
    });

    // Direct Quick Join button on Home
    document.getElementById('btn-home-quick-join').addEventListener('click', () => {
      const code = document.getElementById('home-quick-code').value.trim();
      if (!code) {
        window.visualEffects.showToast("Enter a 6-character room code!", "warning");
        return;
      }
      document.getElementById('join-room-code').value = code.toUpperCase();
      this.openModal('modal-join-room');
    });

    // Create Room Pills (Rounds, Timer, Spice Level)
    this.bindPillGroup('#create-rounds-pills');
    this.bindPillGroup('#create-time-pills');
    this.bindPillGroup('#create-spice-pills');

    // Create Room Form Submit
    document.getElementById('form-create-room').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleCreateRoomSubmit();
    });

    // Join Room Form Submit
    document.getElementById('form-join-room').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleJoinRoomSubmit();
    });

    // Lobby actions
    document.getElementById('btn-copy-code').addEventListener('click', () => {
      this.copyRoomCode();
    });

    document.getElementById('header-room-badge').addEventListener('click', () => {
      this.copyRoomCode();
    });

    document.getElementById('btn-copy-link').addEventListener('click', () => {
      this.copyInviteLink();
    });

    document.getElementById('btn-start-game').addEventListener('click', () => {
      window.gameEngine.startGame();
    });

    document.getElementById('btn-add-bot').addEventListener('click', () => {
      this.addSimulatedBot();
    });

    document.getElementById('btn-clear-bots').addEventListener('click', () => {
      this.clearSimulatedBots();
    });

    document.getElementById('btn-leave-room').addEventListener('click', () => {
      if (confirm("Are you sure you want to leave the room?")) {
        const roomCode = window.gameEngine.roomData?.code;
        const uid = window.firebaseService.getUserId();
        if (roomCode && uid) {
          window.firebaseService.removePlayer(roomCode, uid);
        }
        this.resetToHome();
      }
    });

    // Lobby Reaction buttons
    document.querySelectorAll('#lobby-reaction-bar .reaction-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const emoji = btn.dataset.emoji || '😂';
        const rect = btn.getBoundingClientRect();
        window.visualEffects.spawnEmojiReaction(emoji, rect.left + rect.width / 2, rect.top);

        const roomCode = window.gameEngine.roomData?.code;
        if (roomCode) {
          window.firebaseService.sendCloudMessage({
            type: 'LOBBY_REACTION',
            roomCode,
            emoji
          });
        }
      });
    });

    // Skip & Report Question buttons
    document.getElementById('btn-skip-question').addEventListener('click', () => {
      if (window.gameEngine.isHost()) {
        window.gameEngine.skipQuestion("Host skipped question");
      } else {
        window.visualEffects.showToast("Only the host can skip a question", "warning");
      }
    });

    document.getElementById('btn-report-question').addEventListener('click', () => {
      const q = window.gameEngine.roomData?.state?.currentQuestion;
      if (q && confirm(`Report this question as inappropriate?\n"${q.text}"`)) {
        window.gameEngine.reportCurrentQuestion(q.id, window.firebaseService.getUserId());
      }
    });

    // Prediction submit
    document.getElementById('btn-submit-prediction').addEventListener('click', () => {
      this.handleSubmitPrediction();
    });

    // Vote submit
    document.getElementById('btn-submit-vote').addEventListener('click', () => {
      this.handleSubmitVote();
    });

    // Results screen actions
    document.getElementById('btn-next-round').addEventListener('click', () => {
      window.gameEngine.nextRoundOrFinish();
    });

    document.getElementById('btn-view-leaderboard').addEventListener('click', () => {
      this.showScreen('screen-leaderboard');
    });

    document.getElementById('btn-back-to-game').addEventListener('click', () => {
      this.showScreen('screen-results');
    });

    // Game Over actions
    document.getElementById('btn-play-again').addEventListener('click', () => {
      window.gameEngine.playAgain();
    });

    document.getElementById('btn-share-results').addEventListener('click', () => {
      this.shareFinalResults();
    });

    document.getElementById('btn-return-home').addEventListener('click', () => {
      this.resetToHome();
    });
  }

  bindPillGroup(containerSelector) {
    document.querySelectorAll(`${containerSelector} .pill-choice`).forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll(`${containerSelector} .pill-choice`).forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
      });
    });
  }

  // ==========================================
  // INITIALIZERS & RENDERING
  // ==========================================
  updateSoundButtonUI() {
    const btn = document.getElementById('btn-sound-toggle');
    if (btn) {
      btn.textContent = window.soundEngine.isMuted() ? '🔇' : '🔊';
    }
  }

  updateConnectionStatusBadge(status) {
    const textEl = document.getElementById('header-status-text');
    if (textEl && status) {
      if (status.mode === 'firebase') {
        textEl.textContent = 'Firebase';
      } else if (status.mode === 'cloud_webrtc') {
        textEl.textContent = 'Cloud Relay';
      } else {
        textEl.textContent = 'Online';
      }
    }
  }

  renderAvatarGrids() {
    const createContainer = document.getElementById('create-avatar-grid');
    const joinContainer = document.getElementById('join-avatar-grid');
    createContainer.innerHTML = '';
    joinContainer.innerHTML = '';

    window.GAME_AVATARS.forEach((emoji, index) => {
      const cEl = document.createElement('div');
      cEl.className = `avatar-choice ${index === 0 ? 'selected' : ''}`;
      cEl.textContent = emoji;
      cEl.addEventListener('click', () => {
        createContainer.querySelectorAll('.avatar-choice').forEach(el => el.classList.remove('selected'));
        cEl.classList.add('selected');
        this.selectedCreateAvatar = emoji;
      });
      createContainer.appendChild(cEl);

      const jEl = document.createElement('div');
      jEl.className = `avatar-choice ${index === 1 ? 'selected' : ''}`;
      jEl.textContent = emoji;
      jEl.addEventListener('click', () => {
        joinContainer.querySelectorAll('.avatar-choice').forEach(el => el.classList.remove('selected'));
        jEl.classList.add('selected');
        this.selectedJoinAvatar = emoji;
      });
      joinContainer.appendChild(jEl);
    });
  }

  renderCategoryCheckboxes() {
    const container = document.getElementById('create-categories-list');
    container.innerHTML = '';
    const categories = window.QuestionService ? window.QuestionService.getCategories() : [];

    categories.forEach(cat => {
      const label = document.createElement('label');
      label.className = 'category-pill-check';
      label.innerHTML = `
        <input type="checkbox" name="categories" value="${cat.id}" checked>
        <span>${cat.icon}</span>
        <strong>${cat.name} (${cat.count})</strong>
      `;
      container.appendChild(label);
    });
  }

  renderCategoryShowcaseCarousel() {
    const container = document.getElementById('category-carousel-list');
    if (!container) return;
    container.innerHTML = '';

    const categories = window.QuestionService ? window.QuestionService.getCategories() : [];
    categories.forEach(cat => {
      // Find a sample question from this category
      const sampleQ = window.QuestionService.getByCategories([cat.id])[0] || { text: "Who is most likely to cause hilarious group chaos?" };

      const card = document.createElement('div');
      card.className = 'category-showcase-card';
      card.innerHTML = `
        <div class="category-showcase-icon">${cat.icon}</div>
        <div class="category-showcase-title">${cat.name}</div>
        <div class="category-showcase-desc">${cat.description || ''} • <strong>${cat.count} Questions</strong></div>
        <div class="category-sample-question">"${this.escapeHtml(sampleQ.text)}"</div>
      `;

      card.addEventListener('click', () => {
        this.openModal('modal-question-wheel');
      });

      container.appendChild(card);
    });
  }

  checkUrlRoomParam() {
    const params = new URLSearchParams(window.location.search);
    const room = params.get('room');
    if (room) {
      const input = document.getElementById('join-room-code');
      if (input) input.value = room.toUpperCase();
      this.openModal('modal-join-room');
    }
  }

  checkAutoReconnect() {
    const savedRoom = localStorage.getItem('wtp_active_room_code');
    if (savedRoom && !window.location.search.includes('room=')) {
      console.info(`Found ongoing match session in room ${savedRoom}`);
    }
  }

  // ==========================================
  // CLOUD SYNC & FIREBASE MODAL
  // ==========================================
  openCloudSyncModal() {
    const status = window.firebaseService.getConnectionStatus();
    document.getElementById('sync-modal-transport').textContent = status.text;
    document.getElementById('sync-modal-uid').textContent = status.uid;
    document.getElementById('sync-modal-room').textContent = window.gameEngine.roomData?.code || 'None';
    this.openModal('modal-cloud-sync');
  }

  handleSaveCustomFirebase() {
    const jsonStr = document.getElementById('custom-firebase-json').value.trim();
    if (!jsonStr) {
      window.visualEffects.showToast("Paste a valid JSON configuration", "warning");
      return;
    }
    try {
      const config = JSON.parse(jsonStr);
      if (!config.apiKey) throw new Error("Missing apiKey in configuration");
      window.firebaseService.setCustomFirebaseConfig(config);
      window.visualEffects.showToast("Firebase settings saved! Reloading...", "success");
    } catch (e) {
      window.visualEffects.showToast(`Invalid JSON: ${e.message}`, "error");
    }
  }

  // ==========================================
  // RANDOM QUESTION WHEEL
  // ==========================================
  initWheelCanvas() {
    const canvas = document.getElementById('wheel-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const categories = window.QuestionService ? window.QuestionService.getCategories() : [];
    if (categories.length === 0) return;

    this.drawWheel(ctx, categories, this.wheelAngle);
  }

  drawWheel(ctx, categories, angle) {
    const numSlices = categories.length;
    const arc = (2 * Math.PI) / numSlices;
    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#3b82f6', '#f43f5e', '#a855f7'];

    ctx.clearRect(0, 0, 320, 320);
    ctx.save();
    ctx.translate(160, 160);
    ctx.rotate(angle);

    for (let i = 0; i < numSlices; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 150, i * arc, (i + 1) * arc);
      ctx.fill();
      ctx.stroke();

      // Category Icon text
      ctx.save();
      ctx.rotate(i * arc + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(categories[i].icon + " " + categories[i].name.split(' ')[0], 135, 6);
      ctx.restore();
    }

    ctx.restore();

    // Center hub
    ctx.beginPath();
    ctx.arc(160, 160, 24, 0, 2 * Math.PI);
    ctx.fillStyle = '#0a071b';
    ctx.fill();
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("🔥", 160, 166);
  }

  spinWheel() {
    if (this.wheelSpinning) return;
    this.wheelSpinning = true;
    document.getElementById('btn-spin-wheel').disabled = true;
    document.getElementById('wheel-result-container').style.display = 'none';

    const canvas = document.getElementById('wheel-canvas');
    const ctx = canvas.getContext('2d');
    const categories = window.QuestionService ? window.QuestionService.getCategories() : [];

    let currentSpeed = 0.45 + Math.random() * 0.2;
    const deceleration = 0.985;

    const animateSpin = () => {
      this.wheelAngle += currentSpeed;
      currentSpeed *= deceleration;
      this.drawWheel(ctx, categories, this.wheelAngle);

      if (window.soundEngine && Math.random() < 0.25) {
        window.soundEngine.playTick(false);
      }

      if (currentSpeed > 0.005) {
        requestAnimationFrame(animateSpin);
      } else {
        this.wheelSpinning = false;
        document.getElementById('btn-spin-wheel').disabled = false;

        // Calculate landed category
        const totalArc = 2 * Math.PI;
        const normalizedAngle = (totalArc - (this.wheelAngle % totalArc)) % totalArc;
        const sliceArc = totalArc / categories.length;
        const landedIndex = Math.floor(normalizedAngle / sliceArc) % categories.length;
        const landedCat = categories[landedIndex];

        // Pick surprise question
        const surpriseQ = window.QuestionService.getRandomQuestion([], [landedCat.id]);

        document.getElementById('wheel-result-category').textContent = `${landedCat.icon} ${landedCat.name}`;
        document.getElementById('wheel-result-text').textContent = `"${surpriseQ.text}"`;
        document.getElementById('wheel-result-container').style.display = 'block';

        if (window.soundEngine) window.soundEngine.playVoteSubmit();
        if (window.visualEffects) window.visualEffects.fireConfetti(50);
      }
    };

    animateSpin();
  }

  // ==========================================
  // CUSTOM QUESTION SUBMISSION
  // ==========================================
  handleCustomQuestionSubmit() {
    const input = document.getElementById('custom-question-input');
    const text = input.value.trim();
    if (!text) return;

    if (window.QuestionService) {
      window.QuestionService.addCustomQuestion(text, 'custom', window.firebaseService.currentPlayerData?.name || 'Player');
    }

    if (window.gameEngine.roomData) {
      if (!window.gameEngine.roomData.config.customQuestions) {
        window.gameEngine.roomData.config.customQuestions = [];
      }
      window.gameEngine.roomData.config.customQuestions.push(text);
      window.firebaseService.updateRoomState(window.gameEngine.roomData.code, {
        customAdded: Date.now()
      });
    }

    input.value = '';
    this.closeModal('modal-custom-question');
    window.visualEffects.showToast("Custom inside joke added to question rotation! ✍️", "success");
  }

  // ==========================================
  // ROOM CREATION & JOINING
  // ==========================================
  async handleCreateRoomSubmit() {
    const hostName = document.getElementById('create-host-name').value.trim();
    if (!hostName) {
      window.visualEffects.showToast("Please enter a nickname", "warning");
      return;
    }

    const selectedRoundsEl = document.querySelector('#create-rounds-pills .pill-choice.selected');
    const rounds = parseInt(selectedRoundsEl?.dataset.value || '5', 10);

    const selectedTimerEl = document.querySelector('#create-time-pills .pill-choice.selected');
    const timerSec = parseInt(selectedTimerEl?.dataset.value || '20', 10);

    const selectedSpiceEl = document.querySelector('#create-spice-pills .pill-choice.selected');
    const spiceLevel = selectedSpiceEl?.dataset.value || 'all';

    const guessMajority = document.getElementById('create-majority-toggle').checked;

    const checkedCategories = Array.from(
      document.querySelectorAll('#create-categories-list input[type="checkbox"]:checked')
    ).map(cb => cb.value);

    if (checkedCategories.length === 0) {
      window.visualEffects.showToast("Select at least one category!", "warning");
      return;
    }

    const customText = document.getElementById('create-custom-questions').value.trim();
    const customQuestions = customText ? customText.split('\n').map(s => s.trim()).filter(Boolean) : [];

    const hostPlayer = {
      name: hostName,
      avatar: this.selectedCreateAvatar
    };

    const roomConfig = {
      maxPlayers: 15,
      rounds,
      timerSec,
      spiceLevel,
      guessMajority,
      categories: checkedCategories,
      customQuestions
    };

    try {
      const { roomCode } = await window.firebaseService.createRoom(hostPlayer, roomConfig);
      this.closeAllModals();
      this.connectToRoom(roomCode);
      window.visualEffects.showToast(`Room ${roomCode} created! 👑`, "success");
    } catch (err) {
      console.error(err);
      window.visualEffects.showToast(err.message || "Failed to create room", "error");
    }
  }

  async handleJoinRoomSubmit() {
    const roomCodeInput = document.getElementById('join-room-code');
    const playerNameInput = document.getElementById('join-player-name');

    const roomCode = roomCodeInput.value.trim().toUpperCase();
    const playerName = playerNameInput.value.trim();

    if (!roomCode || roomCode.length !== 6) {
      window.visualEffects.showToast("Please enter a valid 6-character room code", "warning");
      return;
    }

    if (!playerName) {
      window.visualEffects.showToast("Please enter a nickname", "warning");
      return;
    }

    const playerData = {
      name: playerName,
      avatar: this.selectedJoinAvatar
    };

    try {
      await window.firebaseService.joinRoom(roomCode, playerData);
      this.closeAllModals();
      this.connectToRoom(roomCode);
      window.visualEffects.showToast(`Joined room ${roomCode}! 🚀`, "success");
    } catch (err) {
      console.error(err);
      window.visualEffects.showToast(err.message || "Could not join room", "error");
    }
  }

  async launchQuickDemoRoom() {
    const hostPlayer = {
      name: "PartyHost",
      avatar: "👑"
    };

    const roomConfig = {
      maxPlayers: 15,
      rounds: 5,
      timerSec: 15,
      spiceLevel: 'all',
      guessMajority: true,
      categories: ['college_chaos', 'friend_group_roast', 'drama_king_queen', 'foodie_crimes']
    };

    try {
      const { roomCode } = await window.firebaseService.createRoom(hostPlayer, roomConfig);
      this.connectToRoom(roomCode);

      // Add 4 simulated bot friends
      for (let i = 0; i < 4; i++) {
        await this.addSimulatedBot();
      }

      window.visualEffects.showToast("Demo room ready with 4 friends! Click Start Game. ⚡", "success", 4000);
    } catch (e) {
      console.error(e);
      window.visualEffects.showToast("Demo room creation failed", "error");
    }
  }

  connectToRoom(roomCode) {
    window.firebaseService.subscribeToRoom(roomCode, (roomData) => {
      this.onRoomUpdated(roomData);
    });
  }

  // ==========================================
  // REAL-TIME ROOM STATE HANDLER
  // ==========================================
  onRoomUpdated(roomData) {
    if (!roomData) return;
    window.gameEngine.setRoomData(roomData);

    const isHost = window.gameEngine.isHost();
    const currentUid = window.firebaseService.getUserId();
    const playersList = Object.values(roomData.players || {});
    const state = roomData.state;

    // Header room badge
    const headerBadge = document.getElementById('header-room-badge');
    const headerCode = document.getElementById('header-room-code');
    if (headerBadge && headerCode) {
      headerBadge.style.display = 'inline-flex';
      headerCode.textContent = roomData.code;
    }

    // Phase Routing
    if (state.phase !== this.lastObservedPhase) {
      this.lastObservedPhase = state.phase;
      this.handlePhaseTransition(state.phase, roomData);
    }

    // Phase-specific updates
    switch (state.phase) {
      case 'lobby':
        this.updateLobbyUI(roomData, isHost, playersList);
        break;
      case 'prediction':
        this.updatePredictionUI(roomData, currentUid);
        break;
      case 'voting':
        this.updateVotingUI(roomData, currentUid, playersList);
        break;
      case 'results':
        this.updateResultsUI(roomData, isHost, playersList);
        break;
      case 'gameover':
        this.updateGameOverUI(roomData, playersList);
        break;
    }
  }

  handlePhaseTransition(newPhase, roomData) {
    this.selectedVoteTargetId = null;
    this.selectedDoubleTargets = [];
    this.selectedPredictionTargetId = null;
    this.hasSubmittedVote = false;
    this.hasSubmittedPrediction = false;

    const postVoteState = document.getElementById('post-vote-state');
    if (postVoteState) postVoteState.style.display = 'none';

    switch (newPhase) {
      case 'lobby':
        this.showScreen('screen-lobby');
        break;

      case 'prediction':
        this.showScreen('screen-prediction');
        if (window.soundEngine) window.soundEngine.playSelect();
        this.startTimerCountdown(roomData.state.timerEnd, () => {
          if (window.gameEngine.isHost()) {
            window.gameEngine.advanceToVoting();
          }
        });
        this.triggerBotsPrediction(roomData);
        break;

      case 'voting':
        this.showScreen('screen-voting');
        if (window.soundEngine) window.soundEngine.playSelect();
        this.startTimerCountdown(roomData.state.timerEnd, () => {
          if (window.gameEngine.isHost()) {
            window.gameEngine.advanceToResults();
          }
        });
        this.triggerBotsVoting(roomData);
        break;

      case 'results':
        this.showScreen('screen-results');
        if (window.soundEngine) window.soundEngine.playDrumroll();
        setTimeout(() => {
          if (window.soundEngine) window.soundEngine.playBrassHit();
          if (window.visualEffects) window.visualEffects.fireConfetti(70);
        }, 1200);

        // Automatic transition to next round or podium!
        const resultTimerEnd = roomData.state.timerEnd || (Date.now() + 7000);
        this.startTimerCountdown(resultTimerEnd, () => {
          if (window.gameEngine.isHost()) {
            window.gameEngine.nextRoundOrFinish();
          }
        });
        break;

      case 'gameover':
        this.showScreen('screen-gameover');
        if (window.soundEngine) window.soundEngine.playFanfare();
        if (window.visualEffects) window.visualEffects.fireConfetti(120);
        break;
    }
  }

  // ==========================================
  // PHASE: LOBBY
  // ==========================================
  updateLobbyUI(roomData, isHost, playersList) {
    document.getElementById('lobby-room-code').textContent = roomData.code;
    document.getElementById('lobby-current-players').textContent = playersList.length;
    document.getElementById('lobby-max-players').textContent = roomData.config.maxPlayers || 15;

    // Toggle Host vs Guest controls
    document.getElementById('host-lobby-controls').style.display = isHost ? 'flex' : 'none';
    document.getElementById('guest-lobby-controls').style.display = isHost ? 'none' : 'block';

    const startBtn = document.getElementById('btn-start-game');
    if (startBtn) {
      startBtn.disabled = playersList.length < 3;
      startBtn.textContent = playersList.length < 3 
        ? `Waiting for Players (${playersList.length}/3 min)...` 
        : `🚀 Start Game (${playersList.length} Players)`;
    }

    // Render Player Cards in Lobby
    const grid = document.getElementById('lobby-players-grid');
    grid.innerHTML = '';

    playersList.forEach(player => {
      const isCurrentPlayer = player.id === window.firebaseService.getUserId();
      const card = document.createElement('div');
      card.className = `player-card ${isCurrentPlayer ? 'active' : ''} animate-pop-in`;

      card.innerHTML = `
        <div class="player-avatar">
          ${player.avatar}
          ${player.isHost ? '<span class="player-crown">👑</span>' : ''}
        </div>
        <div class="player-info">
          <div class="player-name">${this.escapeHtml(player.name)} ${isCurrentPlayer ? '(You)' : ''}</div>
          <div class="player-status">
            <span class="status-dot"></span>
            ${player.isHost ? 'Host' : 'Ready'}
          </div>
        </div>
        ${isHost && !isCurrentPlayer ? `<button class="kick-btn" title="Kick player" data-pid="${player.id}">✕</button>` : ''}
      `;

      if (isHost && !isCurrentPlayer) {
        const kickBtn = card.querySelector('.kick-btn');
        if (kickBtn) {
          kickBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm(`Remove ${player.name} from room?`)) {
              window.firebaseService.removePlayer(roomData.code, player.id);
            }
          });
        }
      }

      grid.appendChild(card);
    });
  }

  // ==========================================
  // PHASE: PREDICTION (GUESS THE MAJORITY)
  // ==========================================
  updatePredictionUI(roomData, currentUid) {
    const q = roomData.state.currentQuestion || {};
    document.getElementById('pred-round-indicator').textContent = `Round ${roomData.state.currentRound} of ${roomData.config.totalRounds}`;
    document.getElementById('pred-category-tag').innerHTML = `<span>${q.icon || '🎭'}</span> ${q.categoryName || 'General'}`;
    document.getElementById('pred-question-text').textContent = q.text || "Loading question...";

    const grid = document.getElementById('pred-players-grid');
    grid.innerHTML = '';
    const playersList = Object.values(roomData.players || {});

    playersList.forEach(player => {
      const isSelected = this.selectedPredictionTargetId === player.id;
      const card = document.createElement('div');
      card.className = `vote-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="player-avatar">${player.avatar}</div>
        <div class="player-name">${this.escapeHtml(player.name)}</div>
      `;

      if (!this.hasSubmittedPrediction) {
        card.addEventListener('click', () => {
          this.selectedPredictionTargetId = player.id;
          grid.querySelectorAll('.vote-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          document.getElementById('btn-submit-prediction').disabled = false;
          if (window.soundEngine) window.soundEngine.playSelect();
        });
      }

      grid.appendChild(card);
    });
  }

  async handleSubmitPrediction() {
    if (!this.selectedPredictionTargetId || this.hasSubmittedPrediction) return;
    this.hasSubmittedPrediction = true;
    document.getElementById('btn-submit-prediction').disabled = true;
    document.getElementById('btn-submit-prediction').textContent = "Prediction Locked! 🔒";

    const roomCode = window.gameEngine.roomData.code;
    const currentRound = window.gameEngine.roomData.state.currentRound;

    await window.firebaseService.submitPrediction(roomCode, currentRound, this.selectedPredictionTargetId);
    if (window.soundEngine) window.soundEngine.playVoteSubmit();
    window.visualEffects.showToast("Prediction recorded! +2 pts if you're right. 🔮", "success");
  }

  // ==========================================
  // PHASE: VOTING
  // ==========================================
  updateVotingUI(roomData, currentUid, playersList) {
    const q = roomData.state.currentQuestion || {};
    const mode = roomData.state.mode || 'normal';

    document.getElementById('vote-round-indicator').textContent = `Round ${roomData.state.currentRound} of ${roomData.config.totalRounds}`;
    document.getElementById('vote-category-icon').textContent = q.icon || '🎓';
    document.getElementById('vote-category-name').textContent = q.categoryName || 'General';
    document.getElementById('vote-question-text').textContent = q.text || "Loading question...";

    // Spice Badge
    const spiceBadge = document.getElementById('vote-spice-badge');
    if (spiceBadge) {
      const level = q.spiceLevel || 2;
      if (level === 1) {
        spiceBadge.className = 'spice-badge spice-mild';
        spiceBadge.textContent = '🟢 Mild Fun';
      } else if (level === 3) {
        spiceBadge.className = 'spice-badge spice-spicy';
        spiceBadge.textContent = '🔴 Extra Spicy';
      } else {
        spiceBadge.className = 'spice-badge spice-medium';
        spiceBadge.textContent = '🟡 Medium Roast';
      }
    }

    // Mode Badge
    const modeBadge = document.getElementById('vote-mode-badge');
    if (mode === 'reverse') {
      modeBadge.textContent = "🔄 REVERSE MODE: PICK LEAST LIKELY";
      modeBadge.style.background = "linear-gradient(135deg, #06b6d4, #3b82f6)";
    } else if (mode === 'double_trouble') {
      modeBadge.textContent = "💥 DOUBLE TROUBLE: PICK 2 FRIENDS";
      modeBadge.style.background = "linear-gradient(135deg, #f97316, #ef4444)";
    } else if (mode === 'random_chaos') {
      modeBadge.textContent = "🌪️ RANDOM CHAOS (2X POINTS)";
      modeBadge.style.background = "linear-gradient(135deg, #ec4899, #8b5cf6)";
    } else {
      modeBadge.textContent = "🎯 NORMAL MODE";
      modeBadge.style.background = "var(--primary-gradient)";
    }

    // Anonymous Voting Progress
    const roundVotes = (roomData.votes && roomData.votes[`round_${roomData.state.currentRound}`]) || {};
    const votedList = (roomData.state && roomData.state.votedPlayerIds) || Object.keys(roundVotes);
    const totalVoted = votedList.length;
    const totalPlayers = playersList.length;
    const percent = Math.min(100, Math.round((totalVoted / totalPlayers) * 100));

    document.getElementById('voting-progress-fill').style.width = `${percent}%`;
    document.getElementById('voting-count-text').textContent = `${totalVoted} / ${totalPlayers} voted`;

    // Render voting cards
    const grid = document.getElementById('vote-players-grid');
    grid.innerHTML = '';

    playersList.forEach(player => {
      const isSelf = player.id === currentUid;
      const isSelected = mode === 'double_trouble' 
        ? this.selectedDoubleTargets.includes(player.id)
        : this.selectedVoteTargetId === player.id;

      const card = document.createElement('div');
      card.className = `vote-card ${isSelf ? 'self-disabled' : ''} ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="player-avatar">${player.avatar}</div>
        <div class="player-name">${this.escapeHtml(player.name)}</div>
        ${isSelf ? '<span class="self-badge">You (No Self Voting) 😇</span>' : ''}
      `;

      if (!isSelf && !this.hasSubmittedVote) {
        card.addEventListener('click', () => {
          if (mode === 'double_trouble') {
            if (this.selectedDoubleTargets.includes(player.id)) {
              this.selectedDoubleTargets = this.selectedDoubleTargets.filter(id => id !== player.id);
              card.classList.remove('selected');
            } else {
              if (this.selectedDoubleTargets.length < 2) {
                this.selectedDoubleTargets.push(player.id);
                card.classList.add('selected');
              } else {
                window.visualEffects.showToast("Pick 2 friends for Double Trouble", "warning");
              }
            }
            document.getElementById('btn-submit-vote').disabled = this.selectedDoubleTargets.length !== 2;
          } else {
            this.selectedVoteTargetId = player.id;
            grid.querySelectorAll('.vote-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            document.getElementById('btn-submit-vote').disabled = false;
          }
          if (window.soundEngine) window.soundEngine.playSelect();
        });
      }

      grid.appendChild(card);
    });

    // Check if current user already voted
    if (votedList.includes(currentUid) || roundVotes[currentUid]) {
      this.hasSubmittedVote = true;
      document.getElementById('btn-submit-vote').disabled = true;
      document.getElementById('btn-submit-vote').textContent = "Vote Recorded! 🤐";
      document.getElementById('post-vote-state').style.display = 'block';
    }

    // Auto-advance if everyone voted
    if (totalVoted >= totalPlayers && window.gameEngine.isHost()) {
      window.gameEngine.advanceToResults();
    }
  }

  async handleSubmitVote() {
    if (this.hasSubmittedVote) return;
    const mode = window.gameEngine.roomData.state.mode || 'normal';
    let target = null;

    if (mode === 'double_trouble') {
      if (this.selectedDoubleTargets.length !== 2) return;
      target = this.selectedDoubleTargets;
    } else {
      if (!this.selectedVoteTargetId) return;
      target = this.selectedVoteTargetId;
    }

    this.hasSubmittedVote = true;
    document.getElementById('btn-submit-vote').disabled = true;
    document.getElementById('btn-submit-vote').textContent = "Vote Recorded! 🤐";

    const roomCode = window.gameEngine.roomData.code;
    const round = window.gameEngine.roomData.state.currentRound;

    try {
      await window.firebaseService.submitVote(roomCode, round, target);
      if (window.soundEngine) window.soundEngine.playVoteSubmit();

      const humorMsg = window.POST_VOTE_MESSAGES[Math.floor(Math.random() * window.POST_VOTE_MESSAGES.length)];
      document.getElementById('post-vote-humor-msg').textContent = humorMsg;
      document.getElementById('post-vote-state').style.display = 'block';
    } catch (e) {
      window.visualEffects.showToast(e.message || "Failed to submit vote", "error");
      this.hasSubmittedVote = false;
      document.getElementById('btn-submit-vote').disabled = false;
    }
  }

  // ==========================================
  // PHASE: RESULTS
  // ==========================================
  updateResultsUI(roomData, isHost, playersList) {
    const state = roomData.state;
    const voteTally = state.voteTally || {};
    const mostVotedId = state.mostVotedId;
    const q = state.currentQuestion || {};

    document.getElementById('results-round-indicator').textContent = `Round ${state.currentRound} Results`;
    document.getElementById('results-question-recap').textContent = q.text || "";

    // Host controls for Next Round
    document.getElementById('host-results-controls').style.display = isHost ? 'block' : 'none';
    document.getElementById('guest-results-waiting').style.display = isHost ? 'none' : 'block';

    const isLastRound = state.currentRound >= (roomData.config.totalRounds || 5);
    const nextBtn = document.getElementById('btn-next-round');
    if (nextBtn) {
      nextBtn.textContent = isLastRound ? "🏆 View Final Winners & Podium" : "➡️ Next Round";
    }

    // Spotlight: The Problem
    const heroCard = document.getElementById('problem-hero-card');
    if (mostVotedId && roomData.players[mostVotedId]) {
      heroCard.style.display = 'block';
      const problemPlayer = roomData.players[mostVotedId];
      const votesReceived = voteTally[mostVotedId] || 0;
      const totalVotes = Object.values(voteTally).reduce((a, b) => a + b, 0);
      const pct = totalVotes > 0 ? Math.round((votesReceived / totalVotes) * 100) : 0;

      const title = state.problemTitle || "CHIEF CHAOS OFFICER 🌪️";
      document.getElementById('problem-award-title').textContent = title;
      document.getElementById('problem-avatar').textContent = problemPlayer.avatar;
      document.getElementById('problem-winner-name').textContent = problemPlayer.name;
      document.getElementById('problem-vote-stats').textContent = `Received ${votesReceived} vote${votesReceived === 1 ? '' : 's'} (${pct}%)!`;
    } else {
      heroCard.style.display = 'none';
    }

    // Vote Distribution Bars
    const distList = document.getElementById('results-distribution-list');
    distList.innerHTML = '';
    const sortedPlayers = [...playersList].sort((a, b) => (voteTally[b.id] || 0) - (voteTally[a.id] || 0));
    const totalVotes = Object.values(voteTally).reduce((a, b) => a + b, 0) || 1;

    sortedPlayers.forEach(p => {
      const votes = voteTally[p.id] || 0;
      const pct = Math.round((votes / totalVotes) * 100);

      const row = document.createElement('div');
      row.className = 'result-row animate-slide-up';
      row.innerHTML = `
        <div class="result-player-col">
          <span style="font-size: 1.4rem;">${p.avatar}</span>
          <span class="result-player-name">${this.escapeHtml(p.name)}</span>
        </div>
        <div class="result-bar-wrapper">
          <div class="result-bar-fill" style="width: ${pct}%;"></div>
        </div>
        <div class="result-count-col">
          <strong>${votes}</strong> (${pct}%)
        </div>
      `;
      distList.appendChild(row);
    });

    // Populate Standings List
    const standingsList = document.getElementById('leaderboard-standings-list');
    if (standingsList) {
      standingsList.innerHTML = '';
      const byScore = [...playersList].sort((a, b) => (b.score || 0) - (a.score || 0));
      byScore.forEach((p, idx) => {
        const item = document.createElement('div');
        item.className = 'result-row';
        item.innerHTML = `
          <div class="result-player-col">
            <span style="font-weight: 800; color: ${idx === 0 ? '#fbbf24' : '#94a3b8'};">#${idx + 1}</span>
            <span style="font-size: 1.3rem;">${p.avatar}</span>
            <span class="result-player-name">${this.escapeHtml(p.name)}</span>
          </div>
          <div class="result-count-col">
            <strong style="color: var(--secondary-cyan); font-size: 1.1rem;">${p.score || 0} pts</strong>
          </div>
        `;
        standingsList.appendChild(item);
      });
    }
  }

  // ==========================================
  // PHASE: GAME OVER & GRAND PODIUM
  // ==========================================
  updateGameOverUI(roomData, playersList) {
    const sorted = [...playersList].sort((a, b) => (b.score || 0) - (a.score || 0));

    // 1st place
    if (sorted[0]) {
      document.getElementById('podium-avatar-1').textContent = sorted[0].avatar;
      document.getElementById('podium-name-1').textContent = sorted[0].name;
      document.getElementById('podium-score-1').textContent = `${sorted[0].score || 0} pts`;
    }

    // 2nd place
    if (sorted[1]) {
      document.getElementById('podium-avatar-2').textContent = sorted[1].avatar;
      document.getElementById('podium-name-2').textContent = sorted[1].name;
      document.getElementById('podium-score-2').textContent = `${sorted[1].score || 0} pts`;
      document.getElementById('podium-col-2').style.display = 'flex';
    } else {
      document.getElementById('podium-col-2').style.display = 'none';
    }

    // 3rd place
    if (sorted[2]) {
      document.getElementById('podium-avatar-3').textContent = sorted[2].avatar;
      document.getElementById('podium-name-3').textContent = sorted[2].name;
      document.getElementById('podium-score-3').textContent = `${sorted[2].score || 0} pts`;
      document.getElementById('podium-col-3').style.display = 'flex';
    } else {
      document.getElementById('podium-col-3').style.display = 'none';
    }

    // Generate Funny Statistical Awards
    const awardsGrid = document.getElementById('final-awards-grid');
    awardsGrid.innerHTML = '';
    const awards = window.AwardsEngine ? window.AwardsEngine.generateAwards(playersList) : [];

    awards.forEach(aw => {
      const card = document.createElement('div');
      card.className = 'award-card animate-slide-up';
      card.innerHTML = `
        <div class="award-icon">${aw.icon}</div>
        <div>
          <div class="award-title">${aw.title}</div>
          <div class="award-winner">${this.escapeHtml(aw.winnerName)}</div>
          <div class="award-reason">${aw.desc}</div>
        </div>
      `;
      awardsGrid.appendChild(card);
    });

    this.cachedFinalAwards = awards;
  }

  // ==========================================
  // EXPORT SCORECARD IMAGE
  // ==========================================
  shareFinalResults() {
    const roomData = window.gameEngine.roomData;
    if (!roomData) return;
    const playersList = Object.values(roomData.players || {});
    const sorted = [...playersList].sort((a, b) => (b.score || 0) - (a.score || 0));

    window.visualEffects.exportScorecardImage({
      roomCode: roomData.code,
      players: sorted,
      topWinner: sorted[0],
      awards: this.cachedFinalAwards || []
    });
  }

  // ==========================================
  // BOT SIMULATOR FOR MULTI-PLAYER TESTING (3–15 Players)
  // ==========================================
  async addSimulatedBot() {
    const roomData = window.gameEngine.roomData;
    if (!roomData) return;

    const currentCount = Object.keys(roomData.players || {}).length;
    if (currentCount >= (roomData.config.maxPlayers || 15)) {
      window.visualEffects.showToast("Room is at maximum player limit (15)", "warning");
      return;
    }

    const availableBots = this.botNamesPool.filter(
      b => !Object.values(roomData.players).some(p => p.name === b.name)
    );

    const botProfile = availableBots.length > 0 
      ? availableBots[Math.floor(Math.random() * availableBots.length)]
      : { name: `Bot_${Math.floor(Math.random() * 1000)}`, avatar: "🤖" };

    const botId = 'bot_' + Math.random().toString(36).substr(2, 8);
    const newBot = {
      id: botId,
      name: botProfile.name,
      avatar: botProfile.avatar,
      isHost: false,
      online: true,
      score: 0,
      joinedAt: Date.now(),
      isBot: true,
      stats: { timesProblem: 0, correctPredictions: 0, fastestVotes: 0, longestVotes: 0 }
    };

    const updatedPlayers = { ...roomData.players, [botId]: newBot };
    await window.firebaseService.updatePlayers(roomData.code, updatedPlayers);
    window.visualEffects.showToast(`Bot ${newBot.name} joined the room! 🤖`, "join");
  }

  async clearSimulatedBots() {
    const roomData = window.gameEngine.roomData;
    if (!roomData) return;

    const remaining = {};
    Object.entries(roomData.players).forEach(([pid, p]) => {
      if (!p.isBot) remaining[pid] = p;
    });

    await window.firebaseService.updatePlayers(roomData.code, remaining);
    window.visualEffects.showToast("All simulated bots cleared", "info");
  }

  triggerBotsPrediction(roomData) {
    if (!window.gameEngine.isHost()) return;
    const players = Object.values(roomData.players || {});
    const bots = players.filter(p => p.isBot);
    if (bots.length === 0) return;

    const round = roomData.state.currentRound;

    bots.forEach(bot => {
      const delay = 1000 + Math.random() * 4000;
      setTimeout(() => {
        if (window.gameEngine.roomData?.state?.phase !== 'prediction') return;
        const target = players[Math.floor(Math.random() * players.length)];
        if (!roomData.predictions) roomData.predictions = {};
        if (!roomData.predictions[`round_${round}`]) roomData.predictions[`round_${round}`] = {};

        roomData.predictions[`round_${round}`][bot.id] = {
          predictedId: target.id,
          timestamp: Date.now()
        };
      }, delay);
    });
  }

  triggerBotsVoting(roomData) {
    if (!window.gameEngine.isHost()) return;
    const players = Object.values(roomData.players || {});
    const bots = players.filter(p => p.isBot);
    if (bots.length === 0) return;

    const round = roomData.state.currentRound;
    const mode = roomData.state.mode || 'normal';

    bots.forEach(bot => {
      const delay = 1200 + Math.random() * 5000;
      setTimeout(() => {
        if (window.gameEngine.roomData?.state?.phase !== 'voting') return;
        const validTargets = players.filter(p => p.id !== bot.id);
        if (validTargets.length === 0) return;

        let targetId = null;
        if (mode === 'double_trouble' && validTargets.length >= 2) {
          const shuffled = [...validTargets].sort(() => 0.5 - Math.random());
          targetId = [shuffled[0].id, shuffled[1].id];
        } else {
          targetId = validTargets[Math.floor(Math.random() * validTargets.length)].id;
        }

        const roundKey = `round_${round}`;
        if (!window.firebaseService.secretRoundVotes[roundKey]) {
          window.firebaseService.secretRoundVotes[roundKey] = {};
        }
        window.firebaseService.secretRoundVotes[roundKey][bot.id] = {
          targetId: targetId,
          timestamp: Date.now()
        };

        const currentData = window.gameEngine.roomData;
        if (currentData && currentData.state) {
          if (!currentData.state.votedPlayerIds) currentData.state.votedPlayerIds = [];
          if (!currentData.state.votedPlayerIds.includes(bot.id)) {
            currentData.state.votedPlayerIds.push(bot.id);
          }
          window.firebaseService.updateRoomState(currentData.code, {
            votedPlayerIds: currentData.state.votedPlayerIds
          });
        }
      }, delay);
    });
  }

  // ==========================================
  // TIMERS & HELPERS
  // ==========================================
  startTimerCountdown(timerEnd, onExpire) {
    window.gameEngine.startLocalTimer(timerEnd, (sec) => {
      const voteTimerEl = document.getElementById('vote-timer-sec');
      const predTimerEl = document.querySelector('#pred-timer-display span');
      const resultsCountEl = document.getElementById('results-countdown-num');

      if (voteTimerEl) voteTimerEl.textContent = sec;
      if (predTimerEl) predTimerEl.textContent = sec;
      if (resultsCountEl) resultsCountEl.textContent = sec;

      const nextBtn = document.getElementById('btn-next-round');
      if (nextBtn && window.gameEngine.roomData?.state?.phase === 'results') {
        const isLastRound = window.gameEngine.roomData.state.currentRound >= (window.gameEngine.roomData.config.totalRounds || 5);
        nextBtn.textContent = isLastRound ? `🏆 View Final Podium (${sec}s)` : `➡️ Skip to Next Round (${sec}s)`;
      }

      const timerBox = document.getElementById('vote-timer-display');
      if (timerBox) {
        if (sec <= 5) {
          timerBox.classList.add('animate-urgent');
          if (window.soundEngine) window.soundEngine.playTick(true);
        } else {
          timerBox.classList.remove('animate-urgent');
          if (window.soundEngine && sec % 2 === 0) window.soundEngine.playTick(false);
        }
      }
    }, () => {
      if (onExpire) onExpire();
    });
  }

  copyRoomCode() {
    const code = window.gameEngine.roomData?.code;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      window.visualEffects.showToast(`Room code ${code} copied! 📋`, "success");
      if (window.soundEngine) window.soundEngine.playPop();
    }).catch(() => {
      window.visualEffects.showToast(`Code: ${code}`, "info");
    });
  }

  copyInviteLink() {
    const code = window.gameEngine.roomData?.code;
    if (!code) return;
    const url = `${window.location.origin}${window.location.pathname}?room=${code}`;
    navigator.clipboard.writeText(url).then(() => {
      window.visualEffects.showToast("Invite link copied! Share with friends 🔗", "success");
      if (window.soundEngine) window.soundEngine.playPop();
    }).catch(() => {
      window.visualEffects.showToast(url, "info");
    });
  }

  resetToHome() {
    window.gameEngine.stopLocalTimer();
    this.lastObservedPhase = null;
    const headerBadge = document.getElementById('header-room-badge');
    if (headerBadge) headerBadge.style.display = 'none';
    this.showScreen('screen-home');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
}

// Global App Instance
window.app = new AppController();
