import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
}

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Light blue particle colors representing beach vibes and refined petrol palette
    // Sky blue (#7dd3fc, #38bdf8), cyan (#67e8f9, #a5f3fc), soft light azure (#bae6fd)
    const colorPalette = [
      'rgba(125, 211, 252, ', // #7dd3fc
      'rgba(56, 189, 248, ',  // #38bdf8
      'rgba(165, 243, 252, ', // #a5f3fc
      'rgba(186, 230, 253, ', // #bae6fd
      'rgba(103, 232, 249, ', // #67e8f9
    ];

    // Responsive particle count (fewer on mobile for 60fps smoothness)
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: -Math.random() * 0.55 - 0.15, // gently drift upwards like bioluminescence / ocean breeze
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw each light blue particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around borders seamlessly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        // Calculate pulsing glow opacity
        const currentOpacity =
          Math.max(0.12, Math.min(0.85, p.opacity + Math.sin(time * 1.5 + p.pulsePhase) * 0.25));

        // Draw soft glow ring around selected larger particles
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentOpacity * 0.18).toFixed(3)})`;
          ctx.fill();
        }

        // Draw main light blue particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity.toFixed(3)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(125, 211, 252, 0.7)';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw subtle connecting constellation lines between close light blue particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineOpacity = (1 - dist / 85) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(125, 211, 252, ${lineOpacity.toFixed(3)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
