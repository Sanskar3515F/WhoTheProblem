/**
 * WHO'S THE PROBLEM? 😂 - Master Visual Effects Engine
 * Features:
 * - High-energy HTML5 Canvas Confetti Cannon
 * - Background ambient floating emojis
 * - Interactive live Emoji Reaction Bursts (😂, 💀, 🔥, 👑, 👀, 🍿)
 * - Canvas Party Scorecard Generator & Image Exporter (Instagram/WhatsApp story ready)
 * - Animated Toast Notification system
 */

class VisualEffects {
  constructor() {
    this.confettiCanvas = null;
    this.confettiCtx = null;
    this.particles = [];
    this.animId = null;
    this.initConfetti();
    this.initBackgroundParticles();
  }

  initConfetti() {
    let canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
    }
    this.confettiCanvas = canvas;
    this.confettiCtx = canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    if (!this.confettiCanvas) return;
    this.confettiCanvas.width = window.innerWidth;
    this.confettiCanvas.height = window.innerHeight;
  }

  // Trigger high-energy confetti burst
  fireConfetti(count = 100) {
    if (window.soundEngine) window.soundEngine.playPop();
    const colors = ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#f43f5e'];
    const originX = this.confettiCanvas.width / 2;
    const originY = this.confettiCanvas.height * 0.45;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 14;
      this.particles.push({
        x: originX + (Math.random() - 0.5) * 140,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        size: 7 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 14,
        gravity: 0.28,
        drag: 0.98,
        alpha: 1,
        decay: 0.007 + Math.random() * 0.01,
        shape: Math.random() > 0.4 ? 'rect' : 'circle'
      });
    }

    if (!this.animId) {
      this.animateConfetti();
    }
  }

  animateConfetti() {
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.confettiCanvas.height + 20) {
        this.particles.splice(i, 1);
        continue;
      }

      this.confettiCtx.save();
      this.confettiCtx.translate(p.x, p.y);
      this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
      this.confettiCtx.globalAlpha = Math.max(0, p.alpha);
      this.confettiCtx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        this.confettiCtx.beginPath();
        this.confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.confettiCtx.fill();
      }
      this.confettiCtx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.animId = null;
    }
  }

  // Floating background ambient emojis
  initBackgroundParticles() {
    const bgContainer = document.getElementById('ambient-bg');
    if (!bgContainer) return;

    const emojis = ['😂', '👀', '🤫', '💅', '🔥', '🍿', '👑', '🤡', '🥑', '⚡', '🎭', '🍕', '🎓', '🔮'];
    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {
      const el = document.createElement('div');
      el.className = 'ambient-bubble';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.animationDuration = `${16 + Math.random() * 20}s`;
      el.style.animationDelay = `-${Math.random() * 20}s`;
      el.style.fontSize = `${1.2 + Math.random() * 1.6}rem`;
      el.style.opacity = `${0.06 + Math.random() * 0.12}`;
      bgContainer.appendChild(el);
    }
  }

  // Interactive Live Emoji Reaction Bursts
  spawnEmojiReaction(emoji = '😂', startX = null, startY = null) {
    if (window.soundEngine) window.soundEngine.playPop();

    const count = 5;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-reaction-emoji';
      el.textContent = emoji;

      const x = startX !== null ? startX : (window.innerWidth / 2) + (Math.random() - 0.5) * 160;
      const y = startY !== null ? startY : window.innerHeight - 100;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.setProperty('--dx', `${(Math.random() - 0.5) * 120}px`);
      el.style.setProperty('--dy', `-${180 + Math.random() * 160}px`);
      el.style.setProperty('--scale', `${1 + Math.random() * 0.6}`);

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1600);
    }
  }

  // Dynamic Toast Notifications
  showToast(message, type = 'info', duration = 3000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type} animate-slide-up`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '❌';
    if (type === 'join') icon = '👋';
    if (type === 'vote') icon = '🗳️';

    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-text">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  /**
   * Export Game Scorecard as a high-res image (Shareable on Instagram, WhatsApp, TikTok)
   */
  exportScorecardImage({ roomCode = 'GAME', players = [], topWinner = null, awards = [] } = {}) {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1350; // 4:5 Instagram / Phone story ratio
      const ctx = canvas.getContext('2d');

      // 1. Dark Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1350);
      bgGrad.addColorStop(0, '#0a071b');
      bgGrad.addColorStop(0.5, '#140c33');
      bgGrad.addColorStop(1, '#070415');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1080, 1350);

      // Glowing orbs
      const glow1 = ctx.createRadialGradient(250, 200, 10, 250, 200, 350);
      glow1.addColorStop(0, 'rgba(168, 85, 247, 0.25)');
      glow1.addColorStop(1, 'transparent');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, 1080, 1350);

      const glow2 = ctx.createRadialGradient(850, 1000, 10, 850, 1000, 400);
      glow2.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
      glow2.addColorStop(1, 'transparent');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, 1080, 1350);

      // Header Brand
      ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#a855f7';
      ctx.textAlign = 'center';
      ctx.fillText("🔥 PARTY GAME NIGHT", 540, 100);

      ctx.font = '900 68px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText("WHO'S THE PROBLEM? 😂", 540, 180);

      ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`ROOM: ${roomCode} • OFFICIAL MATCH SCORECARD`, 540, 230);

      // Top Winner Spotlight Card
      if (topWinner) {
        ctx.fillStyle = 'rgba(30, 22, 65, 0.85)';
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(140, 290, 800, 320, 24);
        ctx.fill();
        ctx.stroke();

        ctx.font = '80px sans-serif';
        ctx.fillText("👑", 540, 370);

        ctx.font = '80px sans-serif';
        ctx.fillText(topWinner.avatar || '🤡', 540, 460);

        ctx.font = '900 44px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(topWinner.name || 'Champion', 540, 520);

        ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(`CHIEF CHAOS OFFICER • ${topWinner.score || 0} POINTS`, 540, 570);
      }

      // Leaderboard Roster (Top 5)
      ctx.font = 'bold 32px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText("🏆 FINAL STANDINGS", 140, 670);

      const sorted = [...players].sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 5);
      let startY = 720;
      sorted.forEach((p, idx) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.beginPath();
        ctx.roundRect(140, startY, 800, 70, 16);
        ctx.fill();

        ctx.font = 'bold 28px sans-serif';
        ctx.fillStyle = idx === 0 ? '#fbbf24' : idx === 1 ? '#cbd5e1' : idx === 2 ? '#d97706' : '#94a3b8';
        ctx.fillText(`#${idx + 1}`, 170, startY + 45);

        ctx.font = '36px sans-serif';
        ctx.fillText(p.avatar || '😀', 240, startY + 48);

        ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(p.name, 310, startY + 46);

        ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#06b6d4';
        ctx.textAlign = 'right';
        ctx.fillText(`${p.score || 0} pts`, 900, startY + 46);
        ctx.textAlign = 'left';

        startY += 85;
      });

      // Funny Awards Teaser
      if (awards && awards.length > 0) {
        ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#ec4899';
        ctx.fillText(`🎖️ SPOTLIGHT AWARD: ${awards[0].title}`, 140, 1180);

        ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(`Awarded to ${awards[0].winnerName}: "${awards[0].desc}"`, 140, 1220);
      }

      // Footer
      ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'center';
      ctx.fillText("Play free online: Who's The Problem? 😂", 540, 1300);

      // Trigger download
      const link = document.createElement('a');
      link.download = `whos-the-problem-${roomCode}-scorecard.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      this.showToast("Scorecard image downloaded! 📸 Share it with your friends!", "success");
    } catch (e) {
      console.warn("Scorecard export error", e);
      this.showToast("Could not generate image scorecard", "warning");
    }
  }
}

// Global singleton instance
window.visualEffects = new VisualEffects();
