/**
 * WHO'S THE PROBLEM? - Sound Engine
 * Synthesized Web Audio API sound effects:
 * - Click, Tap, Select
 * - Countdown tick & Urgent tick
 * - Vote Submitted chime
 * - Dramatic Reveal / Drumroll & Brass hit
 * - Winner Fanfare celebration
 * - Confetti Pop
 * Includes mute/unmute management with localStorage persistence.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('wtp_sound_muted') === 'true';
    this.initialized = false;
  }

  init() {
    if (this.initialized && this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  ensureContext() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('wtp_sound_muted', this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // 1. Clean UI Click Sound
  playClick() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // 2. Card Selection / Pop
  playSelect() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // 3. Countdown Tick
  playTick(isUrgent = false) {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = isUrgent ? 'sawtooth' : 'sine';
    const freq = isUrgent ? 880 : 520;
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.04);

    gain.gain.setValueAtTime(isUrgent ? 0.25 : 0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // 4. Vote Submitted Chime
  playVoteSubmit() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = now + (idx * 0.06);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.18, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.2);
    });
  }

  // 5. Dramatic Drumroll / Reveal Sound
  playReveal() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Low frequency rumble / build up
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(70, now);
    osc.frequency.linearRampToValueAtTime(220, now + 1.2);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 1.4);

    // Big dramatic orchestral hit at 1.2s
    setTimeout(() => {
      if (this.muted || !this.ctx) return;
      const hitTime = this.ctx.currentTime;
      const chord = [220, 277.18, 329.63, 440]; // A major power chord
      chord.forEach(freq => {
        const hitOsc = this.ctx.createOscillator();
        const hitGain = this.ctx.createGain();

        hitOsc.type = 'triangle';
        hitOsc.frequency.setValueAtTime(freq, hitTime);
        hitOsc.frequency.exponentialRampToValueAtTime(freq * 0.98, hitTime + 0.8);

        hitGain.gain.setValueAtTime(0.2, hitTime);
        hitGain.gain.exponentialRampToValueAtTime(0.001, hitTime + 0.8);

        hitOsc.connect(hitGain);
        hitGain.connect(this.ctx.destination);

        hitOsc.start(hitTime);
        hitOsc.stop(hitTime + 0.8);
      });
    }, 1200);
  }

  // 6. Confetti Pop / Celebration Sound
  playPop() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(900, now + 0.06);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // 7. Victory / Winner Fanfare
  playFanfare() {
    if (this.muted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // C4, E4, G4, C5, G4, C5!
    const melody = [
      { note: 261.63, delay: 0, dur: 0.15 },
      { note: 329.63, delay: 0.15, dur: 0.15 },
      { note: 392.00, delay: 0.3, dur: 0.15 },
      { note: 523.25, delay: 0.45, dur: 0.35 },
      { note: 392.00, delay: 0.75, dur: 0.15 },
      { note: 523.25, delay: 0.9, dur: 0.6 }
    ];

    melody.forEach(({ note, delay, dur }) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = now + delay;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note, noteTime);

      gain.gain.setValueAtTime(0.2, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + dur);
    });
  }
}

// Global singleton instance
window.soundEngine = new SoundEngine();
