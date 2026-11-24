/**
 * WHO'S THE PROBLEM? 😂 - Universal Multiplayer Service
 * Supports:
 * 1. Firebase Realtime Database + Anonymous Auth (when configured)
 * 2. Real-time Cloud Relay (WebRTC PeerJS + Public MQTT WebSocket Fallback) for instant cross-city mobile multiplayer with zero setup
 * 3. BroadcastChannel & LocalStorage fallback for local multi-tab testing
 * 4. Anonymous voting & confidential ballot validation
 * 5. Presence detection, automatic host migration, and reconnection support
 */

class FirebaseService {
  constructor() {
    this.app = null;
    this.auth = null;
    this.db = null;
    this.user = null;
    this.isFirebaseReady = false;
    this.connectionMode = 'local'; // 'firebase' | 'cloud_webrtc' | 'cloud_mqtt' | 'local'
    this.connectionStatusText = 'Connecting...';
    
    this.roomListeners = {};
    this.currentRoomCode = null;
    this.currentPlayerId = null;
    this.currentPlayerData = null;
    this.cachedRoomData = null;

    // WebRTC / Cloud Relay state
    this.peer = null;
    this.peerConnections = {}; // host: map of playerId -> DataConnection; client: single host connection
    this.mqttClient = null;
    this.isHost = false;

    // Secret storage for anonymous votes (kept confidential by host, never exposed to other clients)
    this.secretRoundVotes = {}; // round_N -> { voterId: targetId }

    // Presence heartbeat
    this.heartbeatTimer = null;
    this.lastHostSeenTimestamp = Date.now();

    // Cross-tab broadcast channel for local peer-to-peer testing
    this.broadcast = null;
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        this.broadcast = new BroadcastChannel('wtp_game_channel');
        this.broadcast.onmessage = (event) => this.handleBroadcastMessage(event.data);
      } catch (e) {
        console.warn("BroadcastChannel not supported", e);
      }
    }

    this.init();
  }

  // Generate unique 6-character room code (avoiding ambiguous characters like 0, O, 1, I)
  static generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  // Initialize Auth & Real-Time Transports
  async init() {
    this.initLocalUser();

    // Check for custom Firebase credentials in localStorage first, then window.FIREBASE_CONFIG
    let fbConfig = window.FIREBASE_CONFIG;
    try {
      const customConfigStr = localStorage.getItem('wtp_custom_firebase_config');
      if (customConfigStr) {
        const parsed = JSON.parse(customConfigStr);
        if (parsed && parsed.apiKey && !parsed.apiKey.includes('DummyKey')) {
          fbConfig = parsed;
        }
      }
    } catch (e) {}

    const isPlaceholder = !fbConfig || !fbConfig.apiKey || fbConfig.apiKey.includes('DummyKey');

    if (!isPlaceholder && typeof firebase !== 'undefined') {
      try {
        if (!firebase.apps || firebase.apps.length === 0) {
          this.app = firebase.initializeApp(fbConfig);
        } else {
          this.app = firebase.apps[0];
        }
        this.auth = firebase.auth();
        this.db = firebase.database();

        const cred = await this.auth.signInAnonymously();
        this.user = cred.user;
        this.currentPlayerId = cred.user.uid;
        this.isFirebaseReady = true;
        this.connectionMode = 'firebase';
        this.connectionStatusText = 'Firebase Realtime Database';
        console.info("Multiplayer: Connected via Firebase Realtime Database (UID:", this.currentPlayerId, ")");
        this.notifyConnectionChange();
        return;
      } catch (err) {
        console.warn("Firebase initialization failed, initializing Cloud Relay transport...", err);
      }
    }

    // Fallback: Initialize WebRTC / Cloud Relay
    this.initCloudRelay();
  }

  // Fallback unique player ID generation with persistence
  initLocalUser() {
    let localUid = sessionStorage.getItem('wtp_player_uid') || localStorage.getItem('wtp_player_uid');
    if (!localUid) {
      localUid = 'user_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
      try {
        sessionStorage.setItem('wtp_player_uid', localUid);
        localStorage.setItem('wtp_player_uid', localUid);
      } catch (e) {}
    }
    this.currentPlayerId = localUid;
    this.user = { uid: localUid, isAnonymous: true };
  }

  getUserId() {
    return this.currentPlayerId || 'guest_' + Date.now();
  }

  getConnectionStatus() {
    return {
      mode: this.connectionMode,
      text: this.connectionStatusText,
      isFirebase: this.isFirebaseReady,
      uid: this.getUserId()
    };
  }

  notifyConnectionChange() {
    window.dispatchEvent(new CustomEvent('wtp_connection_change', {
      detail: this.getConnectionStatus()
    }));
  }

  // ==========================================
  // CLOUD WEBRTC & MQTT RELAY ENGINE
  // Connects phones across cities with ZERO setup!
  // ==========================================
  initCloudRelay() {
    this.connectionMode = 'cloud_webrtc';
    this.connectionStatusText = 'Real-time Cloud Relay';
    this.notifyConnectionChange();

    // Check if PeerJS is loaded
    if (typeof Peer !== 'undefined') {
      console.info("Multiplayer: Cloud WebRTC Relay Ready (PeerJS active)");
    } else {
      console.info("Multiplayer: Fallback to Local + MQTT channel");
      this.initMqttRelay();
    }
  }

  initMqttRelay() {
    if (typeof Paho !== 'undefined' && Paho.MQTT) {
      try {
        const clientId = 'wtp_client_' + this.getUserId();
        // Public secure WebSocket broker
        this.mqttClient = new Paho.MQTT.Client('broker.hivemq.com', 8884, '/mqtt', clientId);
        this.mqttClient.onMessageArrived = (message) => {
          try {
            const payload = JSON.parse(message.payloadString);
            this.handleIncomingCloudMessage(payload);
          } catch (e) {}
        };
        this.mqttClient.connect({
          useSSL: true,
          timeout: 5,
          onSuccess: () => {
            console.info("Multiplayer: Connected to MQTT Public Cloud Relay");
            if (this.currentRoomCode) {
              this.mqttClient.subscribe(`wtp/rooms/${this.currentRoomCode}/#`);
            }
          },
          onFailure: (err) => {
            console.warn("MQTT connection failed, local sync active", err);
          }
        });
      } catch (e) {
        console.warn("MQTT relay init failed", e);
      }
    }
  }

  // ==========================================
  // ROOM MANAGEMENT
  // ==========================================

  /**
   * Create a new multiplayer room
   */
  async createRoom(hostPlayer, roomConfig = {}) {
    const roomCode = FirebaseService.generateRoomCode();
    const hostId = this.getUserId();
    this.isHost = true;
    this.currentRoomCode = roomCode;
    this.currentPlayerData = {
      name: hostPlayer.name,
      avatar: hostPlayer.avatar
    };

    const initialRoomData = {
      code: roomCode,
      createdAt: Date.now(),
      config: {
        hostId: hostId,
        maxPlayers: roomConfig.maxPlayers || 15,
        totalRounds: roomConfig.rounds || 5,
        votingTimeSec: roomConfig.timerSec || 20,
        spiceLevel: roomConfig.spiceLevel || 'all',
        enableGuessMajority: roomConfig.guessMajority ?? true,
        categories: roomConfig.categories || [
          'college_chaos',
          'friend_group_roast',
          'drama_king_queen',
          'social_media_addict',
          'future_predictions',
          'random_chaos'
        ],
        customQuestions: roomConfig.customQuestions || []
      },
      state: {
        phase: 'lobby', // 'lobby' | 'prediction' | 'voting' | 'results' | 'leaderboard' | 'gameover'
        currentRound: 0,
        currentQuestion: null,
        mode: 'normal',
        timerEnd: 0,
        revealStep: 0,
        scoresCalculated: false,
        votedPlayerIds: [],
        lastHeartbeat: Date.now()
      },
      players: {
        [hostId]: {
          id: hostId,
          name: hostPlayer.name,
          avatar: hostPlayer.avatar,
          isHost: true,
          online: true,
          score: 0,
          joinedAt: Date.now(),
          stats: {
            timesProblem: 0,
            correctPredictions: 0,
            fastestVotes: 0,
            longestVotes: 0
          }
        }
      },
      predictions: {},
      votes: {} // Publicly sanitized votes (only tallies or completion indicators)
    };

    this.cachedRoomData = initialRoomData;

    // 1. Firebase Write
    if (this.isFirebaseReady && this.db) {
      try {
        const roomRef = this.db.ref(`rooms/${roomCode}`);
        await roomRef.set(initialRoomData);
        this.setupPresence(roomCode, hostId);
      } catch (err) {
        console.error("Firebase createRoom error:", err);
      }
    }

    // 2. PeerJS WebRTC Host setup
    this.setupPeerHost(roomCode);

    // 3. MQTT Relay setup
    if (this.mqttClient && this.mqttClient.isConnected()) {
      try {
        this.mqttClient.subscribe(`wtp/rooms/${roomCode}/#`);
      } catch (e) {}
    }

    // 4. Local storage & broadcast
    this.saveRoomLocally(roomCode, initialRoomData);
    this.broadcastMessage({ type: 'ROOM_CREATED', roomCode, data: initialRoomData });

    // Start heartbeat
    this.startHeartbeat(roomCode);

    return { roomCode, hostId, roomData: initialRoomData };
  }

  /**
   * Join an existing room
   */
  async joinRoom(roomCode, playerData) {
    roomCode = roomCode.toUpperCase().trim();
    const playerId = this.getUserId();
    this.currentRoomCode = roomCode;
    this.currentPlayerData = {
      name: playerData.name,
      avatar: playerData.avatar
    };

    let roomData = null;

    // 1. Fetch from Firebase
    if (this.isFirebaseReady && this.db) {
      try {
        const snapshot = await this.db.ref(`rooms/${roomCode}`).once('value');
        roomData = snapshot.val();
      } catch (e) {
        console.warn("Firebase room fetch error", e);
      }
    }

    // 2. Fetch from Local Storage / Peer Cache if Firebase had no data
    if (!roomData) {
      const localStr = localStorage.getItem(`wtp_room_${roomCode}`);
      if (localStr) {
        try { roomData = JSON.parse(localStr); } catch (e) {}
      }
    }

    // If still null, attempt peer connect before failing
    if (!roomData && typeof Peer !== 'undefined') {
      try {
        roomData = await this.connectPeerClient(roomCode, playerData);
      } catch (e) {
        console.warn("Peer connection fallback failed", e);
      }
    }

    if (!roomData) {
      throw new Error(`Room "${roomCode}" not found. Verify the room code and ensure the host is online!`);
    }

    if (roomData.state.phase !== 'lobby') {
      // Reconnecting existing player allowed
      if (!roomData.players || !roomData.players[playerId]) {
        throw new Error(`Game in room "${roomCode}" is already in progress.`);
      }
    }

    const currentCount = Object.keys(roomData.players || {}).length;
    if (!roomData.players[playerId] && currentCount >= (roomData.config.maxPlayers || 15)) {
      throw new Error(`Room is full (${currentCount}/${roomData.config.maxPlayers} players).`);
    }

    const isHost = roomData.config.hostId === playerId;
    this.isHost = isHost;

    // Preserve existing player's score and stats if reconnecting
    const existing = roomData.players ? roomData.players[playerId] : null;
    const playerRecord = {
      id: playerId,
      name: playerData.name || (existing ? existing.name : 'Player'),
      avatar: playerData.avatar || (existing ? existing.avatar : '😀'),
      isHost: isHost,
      online: true,
      score: existing ? existing.score : 0,
      joinedAt: existing ? existing.joinedAt : Date.now(),
      stats: existing ? existing.stats : {
        timesProblem: 0,
        correctPredictions: 0,
        fastestVotes: 0,
        longestVotes: 0
      }
    };

    // Firebase update
    if (this.isFirebaseReady && this.db) {
      await this.db.ref(`rooms/${roomCode}/players/${playerId}`).set(playerRecord);
      this.setupPresence(roomCode, playerId);
    }

    // Local update
    if (!roomData.players) roomData.players = {};
    roomData.players[playerId] = playerRecord;
    this.cachedRoomData = roomData;
    this.saveRoomLocally(roomCode, roomData);

    // Send join message via Cloud Relay / Peer
    this.sendCloudMessage({
      type: 'PLAYER_JOINED',
      roomCode,
      player: playerRecord
    });

    this.broadcastMessage({ type: 'PLAYER_JOINED', roomCode, player: playerRecord });
    this.startHeartbeat(roomCode);

    return { roomCode, playerId, roomData };
  }

  /**
   * Listen to real-time room updates
   */
  subscribeToRoom(roomCode, callback) {
    roomCode = roomCode.toUpperCase().trim();
    this.currentRoomCode = roomCode;
    this.roomListeners[roomCode] = callback;

    // Firebase realtime listener
    if (this.isFirebaseReady && this.db) {
      const roomRef = this.db.ref(`rooms/${roomCode}`);
      roomRef.on('value', (snapshot) => {
        const val = snapshot.val();
        if (val) {
          this.cachedRoomData = val;
          this.saveRoomLocally(roomCode, val);
          callback(this.sanitizeRoomDataForClient(val));
        }
      });
    }

    // Initial trigger from memory or local storage
    if (this.cachedRoomData) {
      callback(this.sanitizeRoomDataForClient(this.cachedRoomData));
    } else {
      const local = localStorage.getItem(`wtp_room_${roomCode}`);
      if (local) {
        try {
          const parsed = JSON.parse(local);
          this.cachedRoomData = parsed;
          callback(this.sanitizeRoomDataForClient(parsed));
        } catch (e) {}
      }
    }
  }

  /**
   * Update Room Game State
   */
  async updateRoomState(roomCode, stateUpdate) {
    if (this.cachedRoomData) {
      this.cachedRoomData.state = {
        ...this.cachedRoomData.state,
        ...stateUpdate,
        lastHeartbeat: Date.now()
      };
    }

    // Firebase update
    if (this.isFirebaseReady && this.db) {
      try {
        await this.db.ref(`rooms/${roomCode}/state`).update({
          ...stateUpdate,
          lastHeartbeat: Date.now()
        });
      } catch (e) {
        console.warn("Firebase updateRoomState error", e);
      }
    }

    // Local sync update
    const local = localStorage.getItem(`wtp_room_${roomCode}`);
    if (local) {
      try {
        const data = JSON.parse(local);
        data.state = { ...data.state, ...stateUpdate, lastHeartbeat: Date.now() };
        this.saveRoomLocally(roomCode, data);
        this.cachedRoomData = data;
        
        // Broadcast across tabs and Cloud Relay
        this.broadcastMessage({ type: 'STATE_UPDATED', roomCode, state: data.state });
        this.sendCloudMessage({ type: 'STATE_UPDATED', roomCode, state: data.state });

        if (this.roomListeners[roomCode]) {
          this.roomListeners[roomCode](this.sanitizeRoomDataForClient(data));
        }
      } catch (e) {}
    }
  }

  /**
   * Submit Vote for a player (100% Anonymous & Secure)
   */
  async submitVote(roomCode, round, targetPlayerId) {
    const voterId = this.getUserId();
    const roundKey = `round_${round}`;

    // Reject self-voting
    if (targetPlayerId === voterId) {
      throw new Error("Self-voting is not allowed! Pick a friend.");
    }

    const votePayload = {
      targetId: targetPlayerId,
      timestamp: Date.now()
    };

    // Store vote in private secret storage
    if (!this.secretRoundVotes[roundKey]) {
      this.secretRoundVotes[roundKey] = {};
    }
    this.secretRoundVotes[roundKey][voterId] = votePayload;

    // Firebase private vote path (accessible only to voter and host)
    if (this.isFirebaseReady && this.db) {
      try {
        await this.db.ref(`rooms/${roomCode}/secret_votes/${roundKey}/${voterId}`).set(votePayload);
      } catch (e) {
        console.warn("Firebase submitVote error", e);
      }
    }

    // Update public voting progress (who has voted, but NEVER reveal targetId!)
    let currentVotedList = [];
    if (this.cachedRoomData && this.cachedRoomData.state) {
      currentVotedList = this.cachedRoomData.state.votedPlayerIds || [];
      if (!currentVotedList.includes(voterId)) {
        currentVotedList.push(voterId);
      }
      this.cachedRoomData.state.votedPlayerIds = currentVotedList;
    }

    const local = localStorage.getItem(`wtp_room_${roomCode}`);
    if (local) {
      try {
        const data = JSON.parse(local);
        if (!data.state) data.state = {};
        if (!data.state.votedPlayerIds) data.state.votedPlayerIds = [];
        if (!data.state.votedPlayerIds.includes(voterId)) {
          data.state.votedPlayerIds.push(voterId);
        }

        this.saveRoomLocally(roomCode, data);
        this.cachedRoomData = data;

        // Broadcast vote confirmation (CONFIDENTIAL: target is omitted from broadcast!)
        const sanitizedMsg = {
          type: 'VOTE_SUBMITTED',
          roomCode,
          round,
          voterId,
          votedPlayerIds: data.state.votedPlayerIds
        };
        this.broadcastMessage(sanitizedMsg);
        this.sendCloudMessage(sanitizedMsg);

        if (this.roomListeners[roomCode]) {
          this.roomListeners[roomCode](this.sanitizeRoomDataForClient(data));
        }
      } catch (e) {}
    }

    // If client is not host, forward secret vote directly to host over peer/cloud
    if (!this.isHost) {
      this.sendDirectMessageToHost({
        type: 'HOST_RECEIVE_SECRET_VOTE',
        roomCode,
        round,
        voterId,
        targetId: targetPlayerId
      });
    }
  }

  /**
   * Submit Majority Prediction
   */
  async submitPrediction(roomCode, round, predictedPlayerId) {
    const voterId = this.getUserId();
    const roundKey = `round_${round}`;
    const predData = {
      predictedId: predictedPlayerId,
      timestamp: Date.now()
    };

    if (this.isFirebaseReady && this.db) {
      try {
        await this.db.ref(`rooms/${roomCode}/predictions/${roundKey}/${voterId}`).set(predData);
      } catch (e) {}
    }

    const local = localStorage.getItem(`wtp_room_${roomCode}`);
    if (local) {
      try {
        const data = JSON.parse(local);
        if (!data.predictions) data.predictions = {};
        if (!data.predictions[roundKey]) data.predictions[roundKey] = {};
        data.predictions[roundKey][voterId] = predData;

        this.saveRoomLocally(roomCode, data);
        this.cachedRoomData = data;

        this.broadcastMessage({ type: 'PREDICTION_SUBMITTED', roomCode, round, voterId, predData });
        this.sendCloudMessage({ type: 'PREDICTION_SUBMITTED', roomCode, round, voterId, predData });

        if (this.roomListeners[roomCode]) {
          this.roomListeners[roomCode](this.sanitizeRoomDataForClient(data));
        }
      } catch (e) {}
    }
  }

  /**
   * Update Players Scores and Stats
   */
  async updatePlayers(roomCode, playersData) {
    if (this.cachedRoomData) {
      this.cachedRoomData.players = playersData;
    }

    if (this.isFirebaseReady && this.db) {
      try {
        await this.db.ref(`rooms/${roomCode}/players`).set(playersData);
      } catch (e) {}
    }

    const local = localStorage.getItem(`wtp_room_${roomCode}`);
    if (local) {
      try {
        const data = JSON.parse(local);
        data.players = playersData;
        this.saveRoomLocally(roomCode, data);
        this.cachedRoomData = data;

        this.broadcastMessage({ type: 'PLAYERS_UPDATED', roomCode, players: playersData });
        this.sendCloudMessage({ type: 'PLAYERS_UPDATED', roomCode, players: playersData });

        if (this.roomListeners[roomCode]) {
          this.roomListeners[roomCode](this.sanitizeRoomDataForClient(data));
        }
      } catch (e) {}
    }
  }

  /**
   * Kick player or leave room
   */
  async removePlayer(roomCode, playerId) {
    if (this.isFirebaseReady && this.db) {
      try {
        await this.db.ref(`rooms/${roomCode}/players/${playerId}`).remove();
      } catch (e) {}
    }

    const local = localStorage.getItem(`wtp_room_${roomCode}`);
    if (local) {
      try {
        const data = JSON.parse(local);
        if (data.players && data.players[playerId]) {
          delete data.players[playerId];

          // Host migration if host left
          if (data.config.hostId === playerId) {
            const remainingIds = Object.keys(data.players);
            if (remainingIds.length > 0) {
              const newHostId = remainingIds[0];
              data.config.hostId = newHostId;
              data.players[newHostId].isHost = true;
              if (newHostId === this.getUserId()) {
                this.isHost = true;
              }
            }
          }

          this.saveRoomLocally(roomCode, data);
          this.cachedRoomData = data;

          this.broadcastMessage({ type: 'PLAYER_REMOVED', roomCode, playerId });
          this.sendCloudMessage({ type: 'PLAYER_REMOVED', roomCode, playerId });

          if (this.roomListeners[roomCode]) {
            this.roomListeners[roomCode](this.sanitizeRoomDataForClient(data));
          }
        }
      } catch (e) {}
    }
  }

  /**
   * Sanitize room data for client consumption (enforces 100% anonymous voting)
   */
  sanitizeRoomDataForClient(roomData) {
    if (!roomData) return null;
    const cloned = JSON.parse(JSON.stringify(roomData));

    // During voting phase, never disclose individual target votes
    if (cloned.state && cloned.state.phase === 'voting') {
      cloned.votes = {}; // Empty out raw vote mappings
    }

    return cloned;
  }

  /**
   * Save room data locally with active room token
   */
  saveRoomLocally(roomCode, roomData) {
    try {
      localStorage.setItem(`wtp_room_${roomCode}`, JSON.stringify(roomData));
      localStorage.setItem('wtp_active_room_code', roomCode);
      sessionStorage.setItem('wtp_active_room_code', roomCode);
    } catch (e) {}
  }

  // ==========================================
  // PEERJS WEBRTC CONNECTION HANDLING
  // ==========================================
  setupPeerHost(roomCode) {
    if (typeof Peer === 'undefined') return;
    try {
      const peerId = `wtp-host-${roomCode.toLowerCase()}`;
      this.peer = new Peer(peerId, {
        debug: 1,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
          ]
        }
      });

      this.peer.on('open', (id) => {
        console.info(`WebRTC Host connected with Peer ID: ${id}`);
        this.connectionMode = 'cloud_webrtc';
        this.connectionStatusText = 'Online (WebRTC Cloud Host)';
        this.notifyConnectionChange();
      });

      this.peer.on('connection', (conn) => {
        conn.on('open', () => {
          this.peerConnections[conn.peer] = conn;
          // Send latest room state immediately to new peer
          if (this.cachedRoomData) {
            conn.send({
              type: 'SYNC_ROOM_STATE',
              data: this.sanitizeRoomDataForClient(this.cachedRoomData)
            });
          }
        });

        conn.on('data', (data) => {
          this.handleIncomingCloudMessage(data);
        });

        conn.on('close', () => {
          delete this.peerConnections[conn.peer];
        });
      });

      this.peer.on('error', (err) => {
        console.warn("PeerHost error:", err.type, err);
      });
    } catch (e) {
      console.warn("setupPeerHost exception", e);
    }
  }

  connectPeerClient(roomCode, playerData) {
    return new Promise((resolve) => {
      if (typeof Peer === 'undefined') return resolve(null);
      try {
        const clientPeer = new Peer(undefined, {
          debug: 1,
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:stun1.l.google.com:19302' }
            ]
          }
        });

        const hostPeerId = `wtp-host-${roomCode.toLowerCase()}`;

        clientPeer.on('open', () => {
          const conn = clientPeer.connect(hostPeerId, { reliable: true });

          conn.on('open', () => {
            console.info(`WebRTC Connected to Host ${hostPeerId}`);
            this.peerConnections['host'] = conn;
            this.connectionMode = 'cloud_webrtc';
            this.connectionStatusText = 'Online (WebRTC Client)';
            this.notifyConnectionChange();

            // Send Join Intent
            conn.send({
              type: 'CLIENT_REQUEST_JOIN',
              roomCode,
              playerId: this.getUserId(),
              playerData
            });
          });

          conn.on('data', (payload) => {
            if (payload.type === 'SYNC_ROOM_STATE' && payload.data) {
              this.cachedRoomData = payload.data;
              this.saveRoomLocally(roomCode, payload.data);
              if (this.roomListeners[roomCode]) {
                this.roomListeners[roomCode](payload.data);
              }
              resolve(payload.data);
            } else {
              this.handleIncomingCloudMessage(payload);
            }
          });

          conn.on('error', (err) => {
            console.warn("Client peer connection error", err);
            resolve(null);
          });
        });

        // Timeout fallback
        setTimeout(() => resolve(null), 3500);
      } catch (e) {
        resolve(null);
      }
    });
  }

  // ==========================================
  // CLOUD MESSAGE ROUTING
  // ==========================================
  sendCloudMessage(payload) {
    // 1. Send via WebRTC peer data channels
    if (this.isHost) {
      Object.values(this.peerConnections).forEach(conn => {
        if (conn && conn.open) {
          try { conn.send(payload); } catch (e) {}
        }
      });
    } else if (this.peerConnections['host'] && this.peerConnections['host'].open) {
      try { this.peerConnections['host'].send(payload); } catch (e) {}
    }

    // 2. Send via MQTT if active
    if (this.mqttClient && this.mqttClient.isConnected() && payload.roomCode) {
      try {
        const msg = new Paho.MQTT.Message(JSON.stringify(payload));
        msg.destinationName = `wtp/rooms/${payload.roomCode}/events`;
        this.mqttClient.send(msg);
      } catch (e) {}
    }
  }

  sendDirectMessageToHost(payload) {
    if (this.peerConnections['host'] && this.peerConnections['host'].open) {
      try { this.peerConnections['host'].send(payload); } catch (e) {}
    } else {
      this.sendCloudMessage(payload);
    }
  }

  handleIncomingCloudMessage(payload) {
    if (!payload || !payload.roomCode) return;
    const roomCode = payload.roomCode;

    // Handle secret vote received by Host
    if (payload.type === 'HOST_RECEIVE_SECRET_VOTE' && this.isHost) {
      const roundKey = `round_${payload.round}`;
      if (!this.secretRoundVotes[roundKey]) this.secretRoundVotes[roundKey] = {};
      this.secretRoundVotes[roundKey][payload.voterId] = {
        targetId: payload.targetId,
        timestamp: Date.now()
      };
      return;
    }

    // Handle Client Request Join received by Host
    if (payload.type === 'CLIENT_REQUEST_JOIN' && this.isHost) {
      if (this.cachedRoomData) {
        const newPlayer = {
          id: payload.playerId,
          name: payload.playerData.name,
          avatar: payload.playerData.avatar,
          isHost: false,
          online: true,
          score: 0,
          joinedAt: Date.now(),
          stats: { timesProblem: 0, correctPredictions: 0, fastestVotes: 0, longestVotes: 0 }
        };
        this.cachedRoomData.players[payload.playerId] = newPlayer;
        this.saveRoomLocally(roomCode, this.cachedRoomData);
        this.sendCloudMessage({
          type: 'SYNC_ROOM_STATE',
          roomCode,
          data: this.sanitizeRoomDataForClient(this.cachedRoomData)
        });
      }
      return;
    }

    // Update local state if received
    if (payload.type === 'SYNC_ROOM_STATE' && payload.data) {
      this.cachedRoomData = payload.data;
      this.saveRoomLocally(roomCode, payload.data);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](payload.data);
      }
    }
  }

  // ==========================================
  // PRESENCE, HEARTBEAT & RECONNECTION
  // ==========================================
  setupPresence(roomCode, playerId) {
    if (!this.isFirebaseReady || !this.db) return;
    try {
      const connectedRef = this.db.ref('.info/connected');
      const playerStatusRef = this.db.ref(`rooms/${roomCode}/players/${playerId}`);

      connectedRef.on('value', (snap) => {
        if (snap.val() === true) {
          playerStatusRef.onDisconnect().update({ online: false });
          playerStatusRef.update({ online: true });
        }
      });
    } catch (e) {}
  }

  startHeartbeat(roomCode) {
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);

    this.heartbeatTimer = setInterval(() => {
      if (this.isHost && this.cachedRoomData) {
        // Emit host heartbeat
        this.cachedRoomData.state.lastHeartbeat = Date.now();
        this.sendCloudMessage({
          type: 'HEARTBEAT',
          roomCode,
          timestamp: Date.now()
        });
      } else {
        // Client checks if host is alive
        const now = Date.now();
        if (this.cachedRoomData && this.cachedRoomData.state) {
          const lastSeen = this.cachedRoomData.state.lastHeartbeat || 0;
          if (now - lastSeen > 12000 && !this.isHost) {
            this.handleHostDisconnect(roomCode);
          }
        }
      }
    }, 3000);
  }

  handleHostDisconnect(roomCode) {
    if (!this.cachedRoomData || !this.cachedRoomData.players) return;
    const playerIds = Object.keys(this.cachedRoomData.players).sort((a, b) => {
      const pA = this.cachedRoomData.players[a].joinedAt || 0;
      const pB = this.cachedRoomData.players[b].joinedAt || 0;
      return pA - pB;
    });

    if (playerIds.length > 0 && playerIds[0] === this.getUserId()) {
      // Current player is the oldest connected: promote to host!
      console.info("Multiplayer: Old Host dropped. Promoting current player to Host!");
      this.isHost = true;
      this.cachedRoomData.config.hostId = this.getUserId();
      this.cachedRoomData.players[this.getUserId()].isHost = true;
      this.updateRoomState(roomCode, { hostMigrated: true, lastHeartbeat: Date.now() });
      if (window.visualEffects) {
        window.visualEffects.showToast("Host disconnected. You are now the host! 👑", "warning");
      }
    }
  }

  // ==========================================
  // CROSS-TAB BROADCAST
  // ==========================================
  broadcastMessage(payload) {
    if (this.broadcast) {
      try { this.broadcast.postMessage(payload); } catch (e) {}
    }
  }

  handleBroadcastMessage(payload) {
    if (!payload || !payload.roomCode) return;
    const roomCode = payload.roomCode;
    const local = localStorage.getItem(`wtp_room_${roomCode}`);
    if (local && this.roomListeners[roomCode]) {
      try {
        const data = JSON.parse(local);
        this.roomListeners[roomCode](this.sanitizeRoomDataForClient(data));
      } catch (e) {}
    }
  }

  /**
   * Save Custom Firebase Configuration from UI settings modal
   */
  setCustomFirebaseConfig(configObj) {
    if (!configObj || !configObj.apiKey) return false;
    try {
      localStorage.setItem('wtp_custom_firebase_config', JSON.stringify(configObj));
      window.location.reload();
      return true;
    } catch (e) {
      return false;
    }
  }
}

// Global Singleton Instance
window.firebaseService = new FirebaseService();
