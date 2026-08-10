"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Flower, Camera, Gift, Coffee, Heart, Sparkles } from "lucide-react";

interface Experience {
  icon: React.ReactNode;
  title: string;
  desc: string;
  img: string;
}

export default function SignatureExperiences() {
  const experiences: Experience[] = [
    {
      icon: <Flower className="w-6 h-6 text-gold-champagne" />,
      title: "Rose-Themed Interiors",
      desc: "Immerse yourself in a blooming pink forest, styled with thousands of silk roses, chic golden lighting, and Parisian elements.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&fit=crop",
    },
    {
      icon: <Camera className="w-6 h-6 text-gold-champagne" />,
      title: "Instagram Worthy Spots",
      desc: "Discover our iconic pink phone booth, floral swings, and neon backdrops designed to capture your perfect viral photo.",
      img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600&fit=crop",
    },
    {
      icon: <Gift className="w-6 h-6 text-gold-champagne" />,
      title: "Celebration Packages",
      desc: "Delicate custom desserts, flower arches, balloons, and customized themes to elevate birthday parties and baby showers.",
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&fit=crop",
    },
    {
      icon: <Coffee className="w-6 h-6 text-gold-champagne" />,
      title: "Specialty Beverages",
      desc: "Sip on signature Rose Gold Cappuccinos, custom KitKat thickshakes, and botanical mocktails made by our mixologists.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&fit=crop",
    },
    {
      icon: <Heart className="w-6 h-6 text-gold-champagne" />,
      title: "Romantic Dining",
      desc: "Enjoy candlelit setups, custom tables, rose petal pathways, and elegant menu pairings made for intimate dates.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&fit=crop",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-champagne" />,
      title: "Private Events",
      desc: "Host exclusive events, bridal showers, meetups, and celebrations with customized dining and decorations.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&fit=crop",
    },
  ];

  return (
    <section
      id="experiences"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal text-cream-white"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-rose-blush/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 flex flex-col items-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold"
          >
            Curated For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl tracking-wide leading-tight"
          >
            Signature <span className="italic text-rose-blush font-light">Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cream-white/60 font-light text-sm md:text-base mt-2"
          >
            Indulge in moments designed to captivate your senses and create beautiful memories.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Divisor controls the tilt scale (higher = gentler)
    const divisor = 12;
    setRotateX(-y / divisor);
    setRotateY(x / divisor);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative h-[420px] rounded-[30px] overflow-hidden border border-cream-white/10 hover:border-gold-champagne/40 bg-charcoal-light/30 backdrop-blur-md shadow-2xl flex flex-col justify-end p-8 transition-colors duration-300 select-none cursor-pointer"
    >
      {/* Card Image Cover background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2000ms] ease-out pointer-events-none"
        style={{ backgroundImage: `url(${experience.img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent pointer-events-none" />

      {/* Floating golden glow effect behind card */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.06)_0%,transparent_60%)] group-hover:rgba(212,175,55,0.1) transition-all pointer-events-none" />

      {/* Hover Gold Corner Highlights */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-transparent group-hover:border-gold-champagne/45 transition-colors duration-500 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-transparent group-hover:border-gold-champagne/45 transition-colors duration-500 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-transparent group-hover:border-gold-champagne/45 transition-colors duration-500 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-transparent group-hover:border-gold-champagne/45 transition-colors duration-500 rounded-br-lg" />

      {/* Card Details (Icon, Title, Desc) */}
      <div className="relative z-10 flex flex-col gap-4 transform translate-z-10">
        {/* Animated Icon Circle */}
        <div className="w-12 h-12 bg-charcoal border border-cream-white/10 group-hover:border-gold-champagne/50 rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-500 transform group-hover:scale-110">
          {experience.icon}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-xl tracking-wide text-cream-white group-hover:text-gold-champagne transition-colors duration-300">
            {experience.title}
          </h3>
          <p className="text-xs text-cream-white/60 font-light leading-relaxed group-hover:text-cream-white/80 transition-colors duration-300 mt-1">
            {experience.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
