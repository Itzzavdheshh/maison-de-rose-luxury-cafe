"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counter = { val: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loader-container", {
          opacity: 0,
          y: "-100%",
          duration: 1.2,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(counter.val));
      },
    });

    // Subtle scale pulsing on logo
    gsap.fromTo(
      ".loader-logo",
      { scale: 0.9, opacity: 0.6 },
      { scale: 1.05, opacity: 1, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" }
    );
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[9999] bg-[#1F1F1F] flex flex-col items-center justify-center text-[#FFF8F5]">
      {/* Ambient gold radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] animate-pulse-glow pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 z-10">
        {/* Luxury Gold-accented Rose Logo */}
        <div className="loader-logo w-28 h-28 text-gold-champagne relative flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            {/* Stylized geometric rose bud */}
            <path d="M50 20 C40 10, 20 20, 30 40 C35 50, 45 55, 50 65 C55 55, 65 50, 70 40 C80 20, 60 10, 50 20 Z" />
            <path d="M50 30 C45 25, 35 30, 40 40 C43 45, 47 48, 50 55 C53 48, 57 45, 60 40 C65 30, 55 25, 50 30 Z" />
            <path d="M50 40 C48 37, 43 40, 45 45 C47 47, 49 48, 50 50 C51 48, 53 47, 55 45 C57 40, 52 37, 50 40 Z" />
            {/* Stem & leaf accents */}
            <path d="M50 65 L50 85" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M50 72 C43 70, 38 62, 43 64" />
            <path d="M50 78 C57 76, 62 68, 57 70" />
          </svg>
        </div>

        {/* Text Titles */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-cream-white font-light">
            MAISON DE ROSE
          </h2>
          <p className="text-xs text-rose-blush tracking-[0.4em] uppercase mt-2 font-medium">
            PARISIAN FLORAL SANCTUARY
          </p>
        </div>

        {/* Counter */}
        <div className="font-serif text-5xl md:text-6xl text-gold-champagne tracking-[0.05em] tabular-nums mt-8">
          {progress}%
        </div>

        {/* Progress Bar */}
        <div className="w-56 h-[1px] bg-neutral-800 relative overflow-hidden mt-4">
          <div
            className="absolute top-0 left-0 h-full bg-gold-champagne transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
