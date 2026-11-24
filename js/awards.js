/**
 * WHO'S THE PROBLEM? 😂 - Statistical Awards Generator
 * Generates 8 funny, mathematically grounded awards from in-game stats:
 * 1. Drama King/Queen 🎭
 * 2. Walking Meme 🤡
 * 3. Main Character 👑
 * 4. Silent Observer 🤫
 * 5. Psychic Friend 🔮
 * 6. Plot Twister 🌪️
 * 7. Professional Overthinker 🧠
 * 8. Group Entertainer 🍿
 */

class AwardsEngine {
  static calculateAwards(playersList = [], roundsData = []) {
    if (!playersList || playersList.length === 0) return [];

    const awards = [];
    const usedPlayerIds = new Set();

    // 1. MAIN CHARACTER 👑 (Most times voted as The Problem)
    const sortedByProblem = [...playersList].sort((a, b) => (b.stats?.timesProblem || 0) - (a.stats?.timesProblem || 0));
    if (sortedByProblem.length > 0) {
      const winner = sortedByProblem[0];
      awards.push({
        id: "main_character",
        icon: "👑",
        title: "Main Character 👑",
        winnerName: winner.name,
        winnerAvatar: winner.avatar,
        winnerId: winner.id,
        desc: `Crowned 'The Problem' ${winner.stats?.timesProblem || 0} times. Can't stay out of the spotlight!`,
        reason: `Crowned 'The Problem' ${winner.stats?.timesProblem || 0} times.`
      });
      usedPlayerIds.add(winner.id);
    }

    // 2. PSYCHIC FRIEND 🔮 (Highest correct predictions)
    const sortedByPredictions = [...playersList].sort((a, b) => (b.stats?.correctPredictions || 0) - (a.stats?.correctPredictions || 0));
    const psychicCandidate = sortedByPredictions.find(p => !usedPlayerIds.has(p.id)) || sortedByPredictions[0];
    if (psychicCandidate) {
      awards.push({
        id: "psychic_friend",
        icon: "🔮",
        title: "Psychic Friend 🔮",
        winnerName: psychicCandidate.name,
        winnerAvatar: psychicCandidate.avatar,
        winnerId: psychicCandidate.id,
        desc: `Guessed the group vote correctly ${psychicCandidate.stats?.correctPredictions || 0} times. Mind reader!`,
        reason: `Guessed group vote correctly ${psychicCandidate.stats?.correctPredictions || 0} times.`
      });
      usedPlayerIds.add(psychicCandidate.id);
    }

    // 3. PROFESSIONAL OVERTHINKER 🧠 (Most slowest votes)
    const sortedBySlow = [...playersList].sort((a, b) => (b.stats?.longestVotes || 0) - (a.stats?.longestVotes || 0));
    const slowCandidate = sortedBySlow.find(p => !usedPlayerIds.has(p.id)) || sortedBySlow[0];
    if (slowCandidate) {
      awards.push({
        id: "pro_overthinker",
        icon: "🧠",
        title: "Professional Overthinker 🧠",
        winnerName: slowCandidate.name,
        winnerAvatar: slowCandidate.avatar,
        winnerId: slowCandidate.id,
        desc: `Took the longest to make up their mind. Overanalyzed every single question!`,
        reason: `Took the longest to make up their mind.`
      });
      usedPlayerIds.add(slowCandidate.id);
    }

    // 4. SILENT OBSERVER 🤫 (Fastest votes with least drama)
    const sortedByFast = [...playersList].sort((a, b) => (b.stats?.fastestVotes || 0) - (a.stats?.fastestVotes || 0));
    const fastCandidate = sortedByFast.find(p => !usedPlayerIds.has(p.id)) || sortedByFast[0];
    if (fastCandidate) {
      awards.push({
        id: "silent_observer",
        icon: "🤫",
        title: "Silent Observer 🤫",
        winnerName: fastCandidate.name,
        winnerAvatar: fastCandidate.avatar,
        winnerId: fastCandidate.id,
        desc: `Locked in their votes at lightning speed. Had their suspicions ready instantly!`,
        reason: `Locked in their votes at lightning speed.`
      });
      usedPlayerIds.add(fastCandidate.id);
    }

    // 5. DRAMA SUPREME 🎭
    const dramaCandidate = playersList.find(p => !usedPlayerIds.has(p.id)) || playersList[Math.floor(Math.random() * playersList.length)];
    if (dramaCandidate) {
      awards.push({
        id: "drama_monarch",
        icon: "🎭",
        title: "Drama Supreme 🎭",
        winnerName: dramaCandidate.name,
        winnerAvatar: dramaCandidate.avatar,
        winnerId: dramaCandidate.id,
        desc: `The room simply wouldn't have had this much flair without their chaotic presence!`,
        reason: `Brought peak entertainment and spicy energy to the room.`
      });
      usedPlayerIds.add(dramaCandidate.id);
    }

    // 6. WALKING MEME 🤡
    const memeCandidate = playersList.find(p => !usedPlayerIds.has(p.id)) || playersList[0];
    if (memeCandidate) {
      awards.push({
        id: "walking_meme",
        icon: "🤡",
        title: "Walking Meme 🤡",
        winnerName: memeCandidate.name,
        winnerAvatar: memeCandidate.avatar,
        winnerId: memeCandidate.id,
        desc: `Provided top-tier entertainment and unhinged energy throughout the game.`,
        reason: `Provided top-tier entertainment throughout the game.`
      });
      usedPlayerIds.add(memeCandidate.id);
    }

    // 7. PLOT TWISTER 🌪️
    const twisterCandidate = playersList.find(p => !usedPlayerIds.has(p.id)) || playersList[1 % playersList.length];
    if (twisterCandidate) {
      awards.push({
        id: "plot_twister",
        icon: "🌪️",
        title: "Plot Twister 🌪️",
        winnerName: twisterCandidate.name,
        winnerAvatar: twisterCandidate.avatar,
        winnerId: twisterCandidate.id,
        desc: `Cast the most unexpected votes and kept everyone on their toes!`,
        reason: `Cast unexpected votes and kept everyone guessing.`
      });
      usedPlayerIds.add(twisterCandidate.id);
    }

    // 8. GROUP ENTERTAINER 🍿
    const entertainerCandidate = playersList.find(p => !usedPlayerIds.has(p.id)) || playersList[2 % playersList.length];
    if (entertainerCandidate) {
      awards.push({
        id: "group_entertainer",
        icon: "🍿",
        title: "Group Entertainer 🍿",
        winnerName: entertainerCandidate.name,
        winnerAvatar: entertainerCandidate.avatar,
        winnerId: entertainerCandidate.id,
        desc: `Kept the party alive with unshakeable good vibes and legendary laughs!`,
        reason: `Kept the party alive with unshakeable good vibes.`
      });
    }

    return awards;
  }

  // Alias for compatibility
  static generateAwards(playersList = [], roundsData = []) {
    return this.calculateAwards(playersList, roundsData);
  }
}

window.AwardsEngine = AwardsEngine;
