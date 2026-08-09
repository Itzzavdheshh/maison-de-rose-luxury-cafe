"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  r: number; // size
  color: string;
  opacity: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  swayAmplitude: number;
  swaySpeed: number;
  swayOffset: number;
}

export default function RosePetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let petals: Petal[] = [];
    const maxPetals = 40;

    const colors = [
      "rgba(247, 214, 224, 0.8)",  // rose-soft
      "rgba(244, 194, 194, 0.85)", // rose-blush
      "rgba(255, 204, 213, 0.75)", // soft baby pink
      "rgba(224, 169, 109, 0.3)",  // touch of gold ambient hue
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createPetal = (isInitial = false): Petal => {
      const size = Math.random() * 12 + 6;
      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : -20,
        r: size,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 1.2 + 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.015 - 0.0075) * Math.PI,
        swayAmplitude: Math.random() * 1.5 + 0.5,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * 100,
      };
    };

    // Pre-populate petals
    for (let i = 0; i < maxPetals; i++) {
      petals.push(createPetal(true));
    }

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Draw customized realistic rose petal path
    const drawOrganicPetal = (ctx: CanvasRenderingContext2D, r: number) => {
      ctx.beginPath();
      // Organic rounded petal shape using bezier curves
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(-r * 1.2, -r * 1.2, -r * 1.5, r * 0.2, 0, r * 1.3);
      ctx.bezierCurveTo(r * 1.5, r * 0.2, r * 1.2, -r * 1.2, 0, -r);
      ctx.closePath();
      ctx.fill();

      // Add a subtle gold vein for luxurious details in high-opacity petals
      ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, r * 1.3);
      ctx.quadraticCurveTo(0, r * 0.2, 0, -r * 0.5);
      ctx.stroke();
    };

    const update = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((p, idx) => {
        // Horizontal sway calculation
        const sway = Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmplitude;

        // Interaction with mouse (petals push away from mouse)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let windX = 0;
        let windY = 0;

        if (dist < 150) {
          const force = (150 - dist) / 150;
          windX = (dx / dist) * force * 2.5;
          windY = (dy / dist) * force * 1.0;
        }

        p.x += p.speedX + sway + windX;
        p.y += p.speedY + windY;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw the luxury petal
        drawOrganicPetal(ctx, p.r);

        ctx.restore();

        // Recycle if off screen
        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          petals[idx] = createPetal(false);
        }
      });

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[15]" />;
}
