# WHO'S THE PROBLEM? 😂
> **Tagline:** *Everyone is innocent until the votes are revealed.*

A commercial-quality, fast-paced, real-time multiplayer anonymous voting and friendly roasting browser party game for **3 to 15 friends**. Play together online from different cities on phones, tablets, or laptops!

---

## 🎮 Game Concept

Every round presents a spicy, hilarious, relatable scenario:
- *"Who comes to college only for attendance and immediately vanishes into thin air?"*
- *"Who is always active on Instagram but takes 18 business hours to reply to the group chat?"*
- *"Who turns a small restaurant debate into a three-season emotional Netflix drama?"*
- *"Who gives masterclass relationship advice but makes the absolute worst life choices?"*
- *"Who would survive longest on a deserted island by befriending a coconut?"*
- *"Who eats only the cheese off a pizza slice and leaves the crust abandoned like a crime scene?"*

Players secretly vote for one friend. After everyone votes (or when the timer runs out), the game reveals the results with suspenseful drumrolls, animated vote bars, confetti celebrations, funny titles, and a live 3D Olympic-style podium!

---

## ⚡ Tech Stack

- **Frontend:** HTML5, CSS3 (Jackbox/Kahoot/Discord dark gaming theme, Neon Violet/Pink/Cyan accents, Glassmorphism), Vanilla ES6 JavaScript.
- **Audio Engine:** Web Audio API procedural synthesizer (clicks, countdown ticks, chimes, drumrolls, brass hits, fanfare; zero external audio asset dependencies).
- **Visuals:** Zero-dependency HTML5 Canvas Confetti cannon, floating ambient emoji bubbles, interactive live reaction emoji bursts, 3D Olympic podium, HTML5 Canvas party scorecard exporter.
- **Backend & Online Multiplayer:**
  - **Firebase Realtime Database** + Firebase Anonymous Authentication (with authorative security rules).
  - **Zero-Config Real-Time Cloud Relay** (WebRTC DataChannels via PeerJS + Public MQTT WebSocket Fallback) connecting friends across different cities, cellular data, and WiFi with zero configuration.
  - **Cross-Tab Synchronization** (`BroadcastChannel` + `localStorage`) for instantaneous local multi-tab testing.
- **Hosting:** Vercel / Firebase Hosting ready (`vercel.json` & `firebase.json` included).

---

## 🚀 Key Features

### 1. Master Funny Question Bank (336+ Original Questions)
Handcrafted across 8 relatable categories (40+ questions each):
- 🎓 **COLLEGE CHAOS:** Attendance ghosts, 9 AM sleep, 5-min exam panic, proxy attendance, canteen spending.
- 🤡 **FRIEND GROUP ROAST:** Advice never taken, "I'm 5 mins away" while in bed, hoodie thieves, restaurant vetoes.
- 👑 **DRAMA KING/QUEEN:** Oscar-worthy reactions, Victorian fainting spells, 24 one-word texts, "do not contact me" screens.
- 📱 **SOCIAL MEDIA ADDICT:** 100 selfies uploads 0, cold food photoshoots, 3 AM stalking, accidental 2016 likes.
- 🔮 **FUTURE PREDICTIONS:** Viral fame for weird reasons, forgetting what their startup sells, mountain gurus.
- 🌪️ **RANDOM CHAOS:** Arguing with Google Maps, 16x elevator button presses, 14,000 unread emails.
- 🌙 **LATE NIGHT VIBES:** 3 AM Maggi noodles, 2 AM impulse buys, deep lore confessions, Wikipedia rabbit holes.
- 🍕 **FOODIE CRIMES:** Fry theft, ketchup crimes, eating pizza toppings and leaving crust, midnight cheese slices.

**Question Management System:**
- Random question picker with zero repeats in the same match.
- Category filters in room creation and host settings.
- Spice Level selector: 🟢 Mild Fun, 🟡 Medium Roast, 🔴 Extra Spicy, 🌈 All Mix.
- ⏭️ **Skip Question** button for host.
- 🚩 **Report Inappropriate Question** button for players (auto-skips and blacklists).
- ✍️ **Custom Question Creator** for personal inside jokes.
- 🎡 **Random Question Wheel** with animated physics and surprise question reveals.

### 2. Real Online Multiplayer (3–15 Players)
- **Zero-Config Real-Time Connection:** Friends can join on their mobile phones from different cities without having to configure cloud servers or databases!
- **Firebase Realtime Database Support:** Simply paste your Firebase config in `config.js` or through the in-app **Cloud Sync Settings** modal.
- **100% Anonymous Voting:** Individual votes are kept strictly confidential by host/server. Only aggregate vote counts and completion indicators are broadcast at reveal.
- **Synchronized Countdown Timers:** Synchronized on server timestamps with tick sounds and urgent visual pulses.
- **Host Migration:** If the host disconnects, the oldest active player automatically takes over as host.
- **Reconnection Support:** Refreshing the browser or switching network restores the player's session, score, and room state.

### 3. Dynamic Game Modes
- **Normal Mode:** Classic secret voting. Most votes is crowned "The Problem".
- **Guess the Majority:** Predict who gets the most votes before voting. Correct predictions earn **+2 bonus points**!
- **Reverse Mode:** Vote for the friend *least* likely to do the crazy scenario.
- **Double Trouble:** Pick *two* guilty friends!
- **Random Chaos:** Surprise rounds with 2x point multipliers.

### 4. Premium Gaming UI/UX & Live Interactivity
- High-contrast, dark charcoal/purple backdrop with neon violet and electric cyan gradients.
- Interactive **Live Emoji Reactions** (`😂`, `💀`, `🔥`, `👑`, `👀`, `🍿`) in lobby and voting.
- **3D Olympic-Style Podium** with gold, silver, bronze pedestals, animated crowns, and confetti cannon.
- **Shareable Scorecard Image Exporter:** Downloads a high-resolution 4:5 party card ready for Instagram and WhatsApp stories!
- Built-in **AI Bot Simulator:** Add up to 15 bot players with 1 click to test full games immediately!

---

## 🛠️ Testing & Verification

Run the automated test suite anytime:
```bash
node scratch/test_game.js
```
The test suite validates:
- Question bank size (336 questions), 8 categories, and 0 duplicates.
- Room creation and scaling up to 15 simultaneous players.
- Question synchronization and host skip/report controls.
- Anonymous voting confidentiality and self-vote rejection.
- Majority prediction score calculation (+2 points).
- Host migration on disconnect.
- Statistical awards engine (8 unique awards).

---

## 🌐 Instant Testing Guide

### Option 1: Quick Demo (Bot Party)
1. Open `index.html` in your browser.
2. Click **"Quick Demo (Bot Party)"** on the landing page.
3. The game launches a room with 4 simulated friends (`Maya`, `Liam`, `Chloe`, `Alex`).
4. Click **"Start Game"** to experience predictions, voting, reveal, and podium celebration!

### Option 2: Real Multi-Device Play
1. Host clicks **"Create Room"**, chooses nickname and avatar, and launches the room.
2. Host clicks **"Copy Link"** or shares the 6-character room code (e.g. `ABC123`).
3. Friends open the link on their phones in any city and enter their nicknames.
4. All players see the same synchronized questions, voting timers, live progress, and results!

---

## 📜 License
MIT License. Created with ❤️ for unforgettable party game nights!
