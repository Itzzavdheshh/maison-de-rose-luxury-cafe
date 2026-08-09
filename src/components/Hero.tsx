"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Spotlight follow mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlightRef.current, {
        x: x - 125, // offset half of spotlight width
        y: y - 125,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const currentHero = heroRef.current;
    currentHero?.addEventListener("mousemove", handleMouseMove);

    // GSAP Cinematic Text Reveal
    const tl = gsap.timeline({ delay: 0.6 });
    
    tl.fromTo(
      ".reveal-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    tl.fromTo(
      ".reveal-title",
      { opacity: 0, y: 50, rotateX: -15 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.4, ease: "power4.out" },
      "-=0.7"
    );
    tl.fromTo(
      ".reveal-desc",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.9"
    );
    tl.fromTo(
      ".reveal-btns",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    return () => {
      currentHero?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-charcoal"
      id="hero"
    >
      {/* Background Cinematic Video Loop */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.05] transition-transform duration-1000 select-none opacity-45 pointer-events-none"
        poster="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&fit=crop"
      >
        <source
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0541738e4450a47facb9cf6a6f02242&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Luxury Golden Spotlight Overlay */}
      <div
        ref={spotlightRef}
        className="absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none mix-blend-screen blur-xl hidden md:block"
        style={{ left: 0, top: 0 }}
      />

      {/* Cinematic Dark Rose Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/20 via-transparent to-[#1F1F1F]/40 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center gap-5 mt-10">
        
        {/* Subheading */}
        <span className="reveal-sub text-rose-blush tracking-[0.4em] uppercase text-xs md:text-sm font-semibold">
          World's Most Enchanting Floral & Rose Sanctuary
        </span>

        {/* Title */}
        <h1 className="reveal-title font-serif text-5xl md:text-8xl tracking-wider text-cream-white leading-none perspective-[1000px]">
          Maison De Rose
        </h1>

        {/* Cinematic Catchphrase */}
        <p className="reveal-desc text-cream-white/70 max-w-lg md:max-w-2xl text-base md:text-xl font-light tracking-wide mt-2">
          Not Just A Cafe. <span className="text-gold-champagne italic font-serif">An Experience</span> Designed For Memories.
        </p>

        {/* CTA Buttons */}
        <div className="reveal-btns flex flex-col sm:flex-row gap-4 mt-6">
          <motion.button
            onClick={() => scrollTo("reservation")}
            className="px-8 py-4 bg-gold-champagne hover:bg-opacity-90 text-charcoal font-medium rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.25)] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Table
          </motion.button>
          
          <motion.button
            onClick={() => scrollTo("menu")}
            className="px-8 py-4 bg-transparent border border-cream-white/20 hover:border-gold-champagne text-cream-white hover:text-gold-champagne font-medium rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu
          </motion.button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 z-20 flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: -1, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-rose-blush mb-1">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 text-gold-champagne" />
      </motion.div>
    </section>
  );
}
