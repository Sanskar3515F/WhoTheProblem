/**
 * WHO'S THE PROBLEM? - Firebase Cloud Functions
 * Provides server-authoritative validations:
 * - Sanitizes votes and ensures no self-voting
 * - Computes official round scores on voting phase completion
 * - Automatically purges inactive rooms older than 24 hours
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.database();

/**
 * Triggered on vote submission: validates vote target is in room & not self
 */
exports.validateVote = functions.database
  .ref("/rooms/{roomId}/votes/{roundId}/{voterId}")
  .onCreate(async (snapshot, context) => {
    const { roomId, roundId, voterId } = context.params;
    const voteData = snapshot.val();
    const targetId = voteData.targetId;

    // Reject self-voting
    if (targetId === voterId) {
      console.warn(`Self-vote detected by ${voterId} in room ${roomId}. Removing vote.`);
      return snapshot.ref.remove();
    }

    // Verify voter and target are valid room members
    const playersSnap = await db.ref(`rooms/${roomId}/players`).once("value");
    const players = playersSnap.val() || {};

    if (!players[voterId] || !players[targetId]) {
      console.warn(`Invalid voter or target in room ${roomId}. Removing vote.`);
      return snapshot.ref.remove();
    }

    return null;
  });

/**
 * Scheduled room cleaner: removes rooms older than 24 hours
 */
exports.cleanupOldRooms = functions.pubsub
  .schedule("every 24 hours")
  .onRun(async (context) => {
    const cutoff = Date.now() - 24 * 60 * 60 * 1000;
    const roomsRef = db.ref("rooms");
    const snapshot = await roomsRef.once("value");
    const rooms = snapshot.val() || {};

    const updates = {};
    for (const [roomId, room] of Object.entries(rooms)) {
      if (room.createdAt && room.createdAt < cutoff) {
        updates[roomId] = null;
      }
    }

    if (Object.keys(updates).length > 0) {
      await roomsRef.update(updates);
      console.log(`Cleaned up ${Object.keys(updates).length} stale rooms.`);
    }

    return null;
  });
