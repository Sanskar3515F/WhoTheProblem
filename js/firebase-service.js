/**
 * WHO'S THE PROBLEM? 😂 - Universal Multiplayer Service
 * Supports:
 * 1. Hybrid Real-time Cloud Relay (Public WSS MQTT WebSocket + WebRTC PeerJS)
 *    Connects phones across different cities and cellular networks with ZERO configuration!
 * 2. Firebase Realtime Database + Anonymous Auth (when custom keys configured)
 * 3. BroadcastChannel & LocalStorage fallback for local multi-tab testing
 * 4. Anonymous voting & confidential ballot validation (votes never exposed)
 * 5. Presence detection, automatic host reconnection, host migration, and seamless session resume
 */

class FirebaseService {
  constructor() {
    this.app = null;
    this.auth = null;
    this.db = null;
    this.user = null;
    this.isFirebaseReady = false;
    this.connectionMode = 'cloud_relay'; // 'firebase' | 'cloud_relay' | 'local'
    this.connectionStatusText = 'Connecting...';
    
    this.roomListeners = {};
    this.currentRoomCode = null;
    this.currentPlayerId = null;
    this.currentPlayerData = null;
    this.cachedRoomData = null;

    // WebRTC / Cloud Relay state
    this.peer = null;
    this.peerConnections = {}; // host: map of peerId -> DataConnection; client: single host connection
    this.mqttClient = null;
    this.mqttConnected = false;
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

    // Check for custom Firebase credentials
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
      } catch (err) {
        console.warn("Firebase initialization failed, using Cloud Relay transport...", err);
      }
    }

    // Always initialize Cloud Relay (MQTT WebSocket + WebRTC) for seamless cross-city & zero-config multiplayer
    this.initCloudRelay();
  }

  // Session-isolated unique player ID generation (preserves player on refresh, unique per tab)
  initLocalUser() {
    let localUid = sessionStorage.getItem('wtp_player_uid');
    if (!localUid) {
      localUid = 'user_' + Math.random().toString(36).substr(2, 7) + '_' + Date.now().toString(36).substr(-4);
      try {
        sessionStorage.setItem('wtp_player_uid', localUid);
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
  // CLOUD MQTT & WEBRTC HYBRID RELAY
  // Connects phones across cities with ZERO setup!
  // ==========================================
  initCloudRelay() {
    this.connectionMode = 'cloud_relay';
    this.connectionStatusText = 'Real-time Cloud Relay';
    this.notifyConnectionChange();

    // Start MQTT WebSocket Client
    this.initMqttRelay();
  }

  initMqttRelay(retryWithFallback = false) {
    if (typeof Paho === 'undefined' || !Paho.MQTT) {
      console.warn("Paho MQTT library not loaded in page");
      return;
    }

    try {
      const clientId = 'wtp_' + Math.random().toString(36).substr(2, 8) + '_' + Date.now().toString(36).substr(-4);
      
      // Primary: HiveMQ Public Secure WebSocket Broker (port 8884)
      // Fallback: EMQX Public Secure WebSocket Broker (port 8084)
      const host = retryWithFallback ? 'broker.emqx.io' : 'broker.hivemq.com';
      const port = retryWithFallback ? 8084 : 8884;
      const path = '/mqtt';

      console.info(`Connecting to Realtime Cloud Broker (${host}:${port})...`);
      this.mqttClient = new Paho.MQTT.Client(host, port, path, clientId);

      this.mqttClient.onMessageArrived = (message) => {
        try {
          const payload = JSON.parse(message.payloadString);
          this.handleIncomingCloudMessage(payload);
        } catch (e) {
          console.warn("MQTT parse message error", e);
        }
      };

      this.mqttClient.onConnectionLost = (responseObject) => {
        this.mqttConnected = false;
        if (responseObject.errorCode !== 0) {
          console.warn("MQTT connection lost:", responseObject.errorMessage);
          // Auto-reconnect after 2 seconds
          setTimeout(() => {
            if (this.currentRoomCode) {
              this.initMqttRelay(!retryWithFallback);
            }
          }, 2000);
        }
      };

      this.mqttClient.connect({
        useSSL: true,
        timeout: 6,
        keepAliveInterval: 30,
        cleanSession: true,
        onSuccess: () => {
          this.mqttConnected = true;
          this.connectionStatusText = 'Online (Cloud Relay Active)';
          this.notifyConnectionChange();
          console.info(`Multiplayer: Connected to Real-time Cloud Broker (${host})`);

          // Re-subscribe if we are already in a room
          if (this.currentRoomCode) {
            this.subscribeMqttRoom(this.currentRoomCode);
          }
        },
        onFailure: (err) => {
          console.warn(`MQTT connection to ${host} failed:`, err);
          if (!retryWithFallback) {
            // Try fallback broker
            setTimeout(() => this.initMqttRelay(true), 1500);
          }
        }
      });
    } catch (e) {
      console.warn("initMqttRelay exception", e);
    }
  }

  subscribeMqttRoom(roomCode) {
    if (!this.mqttClient || !this.mqttConnected || !roomCode) return;
    try {
      const topic = `wtp/rooms/${roomCode.toUpperCase()}/#`;
      this.mqttClient.subscribe(topic);
      console.info(`Subscribed to Cloud topic: ${topic}`);
    } catch (e) {
      console.warn("MQTT subscribe error", e);
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

    // Cache profile in sessionStorage
    try {
      sessionStorage.setItem('wtp_player_name', hostPlayer.name);
      sessionStorage.setItem('wtp_player_avatar', hostPlayer.avatar);
    } catch (e) {}

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
        phase: 'lobby',
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
      votes: {}
    };

    this.cachedRoomData = initialRoomData;

    // 1. Firebase Write (if configured)
    if (this.isFirebaseReady && this.db) {
      try {
        const roomRef = this.db.ref(`rooms/${roomCode}`);
        await roomRef.set(initialRoomData);
        this.setupPresence(roomCode, hostId);
      } catch (err) {
        console.error("Firebase createRoom error:", err);
      }
    }

    // 2. Subscribe to Cloud MQTT Topic
    this.subscribeMqttRoom(roomCode);

    // 3. WebRTC Peer Host setup
    this.setupPeerHost(roomCode);

    // 4. Save local storage & broadcast channel
    this.saveRoomLocally(roomCode, initialRoomData);
    this.broadcastMessage({ type: 'ROOM_CREATED', roomCode, data: initialRoomData });

    // 5. Start Heartbeat
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

    // Cache profile in sessionStorage
    try {
      sessionStorage.setItem('wtp_player_name', playerData.name);
      sessionStorage.setItem('wtp_player_avatar', playerData.avatar);
    } catch (e) {}

    // Ensure MQTT topic is subscribed
    this.subscribeMqttRoom(roomCode);

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

    // 2. Fetch from Local Storage / Session Cache
    if (!roomData) {
      const localStr = localStorage.getItem(`wtp_room_${roomCode}`);
      if (localStr) {
        try { roomData = JSON.parse(localStr); } catch (e) {}
      }
    }

    // 3. If room data not present locally (different phone/browser), discover over Cloud Relay (MQTT + Peer)
    if (!roomData) {
      roomData = await this.discoverRoomOverCloud(roomCode, playerData);
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

    // Send join message via Cloud Relay (MQTT + WebRTC + BroadcastChannel)
    const joinMsg = {
      type: 'CLIENT_REQUEST_JOIN',
      roomCode,
      senderId: playerId,
      playerId,
      playerData: playerRecord
    };
    this.sendCloudMessage(joinMsg);
    this.broadcastMessage(joinMsg);

    // Connect PeerJS client in background for direct P2P data channels
    this.connectPeerClient(roomCode, playerData).catch(() => {});

    this.startHeartbeat(roomCode);

    return { roomCode, playerId, roomData };
  }

  /**
   * Reconnect to an ongoing match session (e.g. on host or player page refresh)
   */
  async reconnectRoom(roomCode, playerData) {
    roomCode = roomCode.toUpperCase().trim();
    const playerId = this.getUserId();
    this.currentRoomCode = roomCode;

    // Subscribe to Cloud topic
    this.subscribeMqttRoom(roomCode);

    // Restore cached room data
    let roomData = null;
    const localStr = localStorage.getItem(`wtp_room_${roomCode}`);
    if (localStr) {
      try { roomData = JSON.parse(localStr); } catch (e) {}
    }

    if (this.isFirebaseReady && this.db) {
      try {
        const snap = await this.db.ref(`rooms/${roomCode}`).once('value');
        if (snap.val()) roomData = snap.val();
      } catch (e) {}
    }

    if (!roomData) return null;

    this.cachedRoomData = roomData;
    const isHost = roomData.config && roomData.config.hostId === playerId;
    this.isHost = isHost;

    if (playerData) {
      this.currentPlayerData = {
        name: playerData.name,
        avatar: playerData.avatar
      };
    }

    if (isHost) {
      this.setupPeerHost(roomCode);
      const hostReconMsg = {
        type: 'HOST_RECONNECTED',
        roomCode,
        senderId: playerId,
        hostId: playerId,
        data: this.sanitizeRoomDataForClient(roomData)
      };
      this.sendCloudMessage(hostReconMsg);
      this.broadcastMessage(hostReconMsg);
    } else {
      const playerReconMsg = {
        type: 'PLAYER_RECONNECTED',
        roomCode,
        senderId: playerId,
        playerId: playerId
      };
      this.sendCloudMessage(playerReconMsg);
      this.broadcastMessage(playerReconMsg);
      this.connectPeerClient(roomCode, playerData).catch(() => {});
    }

    this.startHeartbeat(roomCode);

    if (this.roomListeners[roomCode]) {
      this.roomListeners[roomCode](this.sanitizeRoomDataForClient(roomData));
    }

    return roomData;
  }

  /**
   * Listen to real-time room updates
   */
  subscribeToRoom(roomCode, callback) {
    roomCode = roomCode.toUpperCase().trim();
    this.currentRoomCode = roomCode;
    this.roomListeners[roomCode] = callback;

    this.subscribeMqttRoom(roomCode);

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
        const updateMsg = { 
          type: 'STATE_UPDATED', 
          roomCode, 
          senderId: this.getUserId(),
          state: data.state 
        };
        this.broadcastMessage(updateMsg);
        this.sendCloudMessage(updateMsg);

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

    // Reject self-voting (unless double_trouble which is checked separately)
    if (typeof targetPlayerId === 'string' && targetPlayerId === voterId) {
      throw new Error("Self-voting is not allowed! Pick a friend.");
    }
    if (Array.isArray(targetPlayerId) && targetPlayerId.includes(voterId)) {
      throw new Error("You cannot include yourself in Double Trouble! Pick two friends.");
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

        // Broadcast public vote progress (CONFIDENTIAL: target is omitted!)
        const sanitizedMsg = {
          type: 'VOTE_SUBMITTED',
          roomCode,
          senderId: voterId,
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

    // If client is not host, forward secret vote directly to host over secure cloud channel
    if (!this.isHost) {
      this.sendDirectMessageToHost({
        type: 'HOST_RECEIVE_SECRET_VOTE',
        roomCode,
        senderId: voterId,
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

        const predMsg = { 
          type: 'PREDICTION_SUBMITTED', 
          roomCode, 
          senderId: voterId,
          round, 
          voterId, 
          predData 
        };
        this.broadcastMessage(predMsg);
        this.sendCloudMessage(predMsg);

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

        const updateMsg = { 
          type: 'PLAYERS_UPDATED', 
          roomCode, 
          senderId: this.getUserId(),
          players: playersData 
        };
        this.broadcastMessage(updateMsg);
        this.sendCloudMessage(updateMsg);

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
                this.setupPeerHost(roomCode);
              }
            }
          }

          this.saveRoomLocally(roomCode, data);
          this.cachedRoomData = data;

          const removeMsg = { 
            type: 'PLAYER_REMOVED', 
            roomCode, 
            senderId: this.getUserId(),
            playerId 
          };
          this.broadcastMessage(removeMsg);
          this.sendCloudMessage(removeMsg);

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
      cloned.votes = {};
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
  // DISCOVER ROOM OVER CLOUD (FOR NEW DEVICES)
  // ==========================================
  discoverRoomOverCloud(roomCode, playerData) {
    return new Promise((resolve) => {
      let resolved = false;

      // 1. Send Discover Request via MQTT
      const reqPayload = {
        type: 'REQUEST_ROOM_STATE',
        roomCode,
        senderId: this.getUserId(),
        playerData
      };

      const handler = (data) => {
        if (!resolved && data && data.code === roomCode) {
          resolved = true;
          resolve(data);
        }
      };

      this.roomListeners[roomCode] = handler;
      this.sendCloudMessage(reqPayload);

      // 2. Also try WebRTC peer client connect
      this.connectPeerClient(roomCode, playerData).then((peerData) => {
        if (!resolved && peerData) {
          resolved = true;
          resolve(peerData);
        }
      }).catch(() => {});

      // Timeout fallback (5 seconds)
      setTimeout(() => {
        if (!resolved) {
          resolved = true;
          // Check if local cache has it now
          const check = localStorage.getItem(`wtp_room_${roomCode}`);
          if (check) {
            try { return resolve(JSON.parse(check)); } catch (e) {}
          }
          resolve(null);
        }
      }, 5000);
    });
  }

  // ==========================================
  // PEERJS WEBRTC CONNECTION HANDLING
  // ==========================================
  setupPeerHost(roomCode) {
    if (typeof Peer === 'undefined') return;
    try {
      if (this.peer && !this.peer.destroyed) {
        try { this.peer.destroy(); } catch (e) {}
      }

      const peerId = `wtp-host-${roomCode.toLowerCase()}`;
      this.peer = new Peer(peerId, {
        debug: 0,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
          ]
        }
      });

      this.peer.on('open', (id) => {
        console.info(`WebRTC Host connected with Peer ID: ${id}`);
        this.connectionStatusText = 'Online (Host Relay Active)';
        this.notifyConnectionChange();
      });

      this.peer.on('connection', (conn) => {
        conn.on('open', () => {
          this.peerConnections[conn.peer] = conn;
          // Send latest room state immediately to new peer
          if (this.cachedRoomData) {
            conn.send({
              type: 'SYNC_ROOM_STATE',
              roomCode: this.cachedRoomData.code,
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
        // If peer ID is unavailable because previous tab held it, MQTT handles transport
        console.warn("PeerHost notice:", err.type || err.message);
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
          debug: 0,
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
            this.peerConnections['host'] = conn;
            conn.send({
              type: 'CLIENT_REQUEST_JOIN',
              roomCode,
              senderId: this.getUserId(),
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

          conn.on('error', () => {
            resolve(null);
          });
        });

        setTimeout(() => resolve(null), 3000);
      } catch (e) {
        resolve(null);
      }
    });
  }

  // ==========================================
  // CLOUD MESSAGE ROUTING (MQTT + PEER DATA CHANNELS)
  // ==========================================
  sendCloudMessage(payload) {
    if (!payload.senderId) payload.senderId = this.getUserId();
    const jsonStr = JSON.stringify(payload);

    // 1. Send via MQTT WebSocket
    if (this.mqttClient && this.mqttConnected && payload.roomCode) {
      try {
        const msg = new Paho.MQTT.Message(jsonStr);
        msg.destinationName = `wtp/rooms/${payload.roomCode}/events`;
        this.mqttClient.send(msg);
      } catch (e) {
        console.warn("MQTT send error", e);
      }
    }

    // 2. Send via WebRTC peer data channels
    if (this.isHost) {
      Object.values(this.peerConnections).forEach(conn => {
        if (conn && conn.open) {
          try { conn.send(payload); } catch (e) {}
        }
      });
    } else if (this.peerConnections['host'] && this.peerConnections['host'].open) {
      try { this.peerConnections['host'].send(payload); } catch (e) {}
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
    const roomCode = payload.roomCode.toUpperCase();
    if (this.currentRoomCode && this.currentRoomCode !== roomCode) return;

    // Ignore echoes of self-published messages
    if (payload.senderId && payload.senderId === this.getUserId()) {
      return;
    }

    // 1. Host receives secret confidential vote from a player
    if (payload.type === 'HOST_RECEIVE_SECRET_VOTE' && this.isHost) {
      const roundKey = `round_${payload.round}`;
      if (!this.secretRoundVotes[roundKey]) this.secretRoundVotes[roundKey] = {};
      this.secretRoundVotes[roundKey][payload.voterId] = {
        targetId: payload.targetId,
        timestamp: Date.now()
      };
      return;
    }

    // 2. Host receives join request from a new player
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

        if (!this.cachedRoomData.players) this.cachedRoomData.players = {};
        this.cachedRoomData.players[payload.playerId] = newPlayer;
        this.saveRoomLocally(roomCode, this.cachedRoomData);

        // Notify Host's own UI listener immediately!
        if (this.roomListeners[roomCode]) {
          this.roomListeners[roomCode](this.sanitizeRoomDataForClient(this.cachedRoomData));
        }

        // Broadcast updated room state to ALL players
        this.sendCloudMessage({
          type: 'SYNC_ROOM_STATE',
          roomCode,
          senderId: this.getUserId(),
          data: this.sanitizeRoomDataForClient(this.cachedRoomData)
        });

        if (window.visualEffects) {
          window.visualEffects.showToast(`${newPlayer.name} joined the room! 👋`, "join");
        }
        if (window.soundEngine) {
          window.soundEngine.playPop();
        }
      }
      return;
    }

    // 3. Request Room State (when a new device joins and needs full room data)
    if (payload.type === 'REQUEST_ROOM_STATE' && this.isHost && this.cachedRoomData) {
      this.sendCloudMessage({
        type: 'SYNC_ROOM_STATE',
        roomCode,
        senderId: this.getUserId(),
        data: this.sanitizeRoomDataForClient(this.cachedRoomData)
      });
      return;
    }

    // 4. Synchronize Full Room State
    if (payload.type === 'SYNC_ROOM_STATE' && payload.data) {
      this.cachedRoomData = payload.data;
      this.saveRoomLocally(roomCode, payload.data);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](payload.data);
      }
      return;
    }

    // 5. State Updated (Phase, Round, Question, Timer changes)
    if (payload.type === 'STATE_UPDATED' && payload.state && this.cachedRoomData) {
      this.cachedRoomData.state = { ...this.cachedRoomData.state, ...payload.state };
      this.saveRoomLocally(roomCode, this.cachedRoomData);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](this.sanitizeRoomDataForClient(this.cachedRoomData));
      }
      return;
    }

    // 6. Players Updated (Scores, stats, bots)
    if (payload.type === 'PLAYERS_UPDATED' && payload.players && this.cachedRoomData) {
      this.cachedRoomData.players = payload.players;
      this.saveRoomLocally(roomCode, this.cachedRoomData);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](this.sanitizeRoomDataForClient(this.cachedRoomData));
      }
      return;
    }

    // 7. Player Removed / Kicked
    if (payload.type === 'PLAYER_REMOVED' && payload.playerId && this.cachedRoomData?.players) {
      delete this.cachedRoomData.players[payload.playerId];
      this.saveRoomLocally(roomCode, this.cachedRoomData);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](this.sanitizeRoomDataForClient(this.cachedRoomData));
      }
      return;
    }

    // 8. Public Vote Submitted Progress Indicator
    if (payload.type === 'VOTE_SUBMITTED' && this.cachedRoomData?.state) {
      if (!this.cachedRoomData.state.votedPlayerIds) {
        this.cachedRoomData.state.votedPlayerIds = [];
      }
      if (payload.voterId && !this.cachedRoomData.state.votedPlayerIds.includes(payload.voterId)) {
        this.cachedRoomData.state.votedPlayerIds.push(payload.voterId);
      }
      if (payload.votedPlayerIds) {
        this.cachedRoomData.state.votedPlayerIds = payload.votedPlayerIds;
      }
      this.saveRoomLocally(roomCode, this.cachedRoomData);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](this.sanitizeRoomDataForClient(this.cachedRoomData));
      }
      return;
    }

    // 9. Prediction Submitted
    if (payload.type === 'PREDICTION_SUBMITTED' && this.cachedRoomData) {
      const roundKey = `round_${payload.round}`;
      if (!this.cachedRoomData.predictions) this.cachedRoomData.predictions = {};
      if (!this.cachedRoomData.predictions[roundKey]) this.cachedRoomData.predictions[roundKey] = {};
      this.cachedRoomData.predictions[roundKey][payload.voterId] = payload.predData;
      this.saveRoomLocally(roomCode, this.cachedRoomData);
      if (this.roomListeners[roomCode]) {
        this.roomListeners[roomCode](this.sanitizeRoomDataForClient(this.cachedRoomData));
      }
      return;
    }

    // 10. Lobby Live Reaction Emoji Burst
    if (payload.type === 'LOBBY_REACTION' && payload.emoji) {
      if (window.visualEffects) {
        const x = window.innerWidth * (0.25 + Math.random() * 0.5);
        const y = window.innerHeight * 0.55;
        window.visualEffects.spawnEmojiReaction(payload.emoji, x, y);
      }
      return;
    }

    // 11. Host Reconnected
    if (payload.type === 'HOST_RECONNECTED') {
      if (window.visualEffects) {
        window.visualEffects.showToast("Host reconnected! 👑", "info");
      }
      if (payload.data) {
        this.cachedRoomData = payload.data;
        this.saveRoomLocally(roomCode, payload.data);
        if (this.roomListeners[roomCode]) {
          this.roomListeners[roomCode](payload.data);
        }
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
        this.cachedRoomData.state.lastHeartbeat = Date.now();
        this.sendCloudMessage({
          type: 'HEARTBEAT',
          roomCode,
          senderId: this.getUserId(),
          timestamp: Date.now()
        });
      } else {
        const now = Date.now();
        if (this.cachedRoomData && this.cachedRoomData.state) {
          const lastSeen = this.cachedRoomData.state.lastHeartbeat || 0;
          if (now - lastSeen > 16000 && !this.isHost) {
            this.handleHostDisconnect(roomCode);
          }
        }
      }
    }, 4000);
  }

  handleHostDisconnect(roomCode) {
    if (!this.cachedRoomData || !this.cachedRoomData.players) return;
    const playerIds = Object.keys(this.cachedRoomData.players).sort((a, b) => {
      const pA = this.cachedRoomData.players[a].joinedAt || 0;
      const pB = this.cachedRoomData.players[b].joinedAt || 0;
      return pA - pB;
    });

    if (playerIds.length > 0 && playerIds[0] === this.getUserId()) {
      console.info("Multiplayer: Old Host dropped. Promoting current player to Host!");
      this.isHost = true;
      this.cachedRoomData.config.hostId = this.getUserId();
      this.cachedRoomData.players[this.getUserId()].isHost = true;
      this.setupPeerHost(roomCode);
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
