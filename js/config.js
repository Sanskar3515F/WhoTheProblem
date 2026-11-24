/**
 * WHO'S THE PROBLEM? - Configuration & Constants
 */

// Firebase Configuration
// Replace with your real Firebase Project credentials from Firebase Console:
// https://console.firebase.google.com/
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDummyKeyReplaceWithYourRealFirebaseKey-001",
  authDomain: "whos-the-problem-game.firebaseapp.com",
  databaseURL: "https://whos-the-problem-game-default-rtdb.firebaseio.com",
  projectId: "whos-the-problem-game",
  storageBucket: "whos-the-problem-game.appspot.com",
  messagingSenderId: "109876543210",
  appId: "1:109876543210:web:abcdef1234567890"
};

// Fun Avatars for players
const GAME_AVATARS = [
  "🤡", "🕵️‍♂️", "🍿", "💅", "☕", "🎭", "🦄", "🥑",
  "🚀", "🤖", "👻", "👑", "🍕", "🧠", "🐱", "🔥",
  "🐶", "🌮", "🎸", "⚡", "🕶️", "🧙‍♂️", "🧁", "🦁"
];

// Funny Titles for the Most Voted Person
const PROBLEM_TITLES = [
  "PUBLIC ENEMY #1 🚨",
  "CHIEF CHAOS OFFICER 🌪️",
  "CERTIFIED WALKING RED FLAG 🚩",
  "DRAMA QUEEN SUPREME 👑",
  "THE UNAPOLOGETIC MENACE 😈",
  "THE GROUP INSTIGATOR 🔥",
  "GUILTY AS CHARGED ⚖️",
  "SUSPECT OF THE CENTURY 🕵️",
  "THE OVERTHINKING ARCHITECT 🧠",
  "OFFICIALLY UNHINGED 🤪",
  "THE MAIN CHARACTER 🎬",
  "THE WALKING MEME 🤡",
  "THE MIDNIGHT SNACK CRIMINAL 🍕",
  "PROFESSIONAL GHOST 👻"
];

// Post-vote humorous cycling messages
const POST_VOTE_MESSAGES = [
  "Votes sealed in titanium... 🔒",
  "Consulting the drama tribunal... ⚖️",
  "Waiting for the professional overthinker... 🤔",
  "Scanning for innocent alibis... 🔍",
  "Preparing the roast torches... 🔥",
  "Almost everyone has pointed their finger... 👀"
];

// Game Configuration Defaults
const GAME_DEFAULTS = {
  minPlayers: 3,
  maxPlayers: 15,
  defaultRounds: 5,
  defaultTimerSec: 20,
  modes: {
    normal: true,
    guessMajority: true,
    reverse: false,
    doubleTrouble: false,
    randomChaos: false,
    custom: false
  }
};

window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.GAME_AVATARS = GAME_AVATARS;
window.PROBLEM_TITLES = PROBLEM_TITLES;
window.POST_VOTE_MESSAGES = POST_VOTE_MESSAGES;
window.GAME_DEFAULTS = GAME_DEFAULTS;
