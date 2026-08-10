"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Award, Star, Compass, Sparkles, BookOpen } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

export default function TimelineStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      year: "2020",
      title: "The Dream Begins",
      desc: "Our founders envisioned an ethereal Parisian sanctuary combining high-fashion floral design with artisanal gastronomy.",
      icon: <Compass className="w-5 h-5 text-gold-champagne" />,
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=500&fit=crop",
    },
    {
      year: "2021",
      title: "Bespoke Rose Architecture",
      desc: "Architects and botanists finalized our blueprint, hand-crafting over 10,000 silk roses to adorn our ceilings, arches, and booths.",
      icon: <BookOpen className="w-5 h-5 text-gold-champagne" />,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500&fit=crop",
    },
    {
      year: "2022",
      title: "Grand Flagship Opening",
      desc: "Our doors opened to instant viral acclaim, establishing Maison De Rose as the premier dining destination for luxury celebrations.",
      icon: <Sparkles className="w-5 h-5 text-gold-champagne" />,
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=500&fit=crop",
    },
    {
      year: "2023",
      title: "Culinary Excellence Awards",
      desc: "Celebrated internationally for our signature 24k Rose Gold Cappuccino, handcrafted French pastries, and romantic ambiance.",
      icon: <Award className="w-5 h-5 text-gold-champagne" />,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=500&fit=crop",
    },
    {
      year: "2024",
      title: "4,000+ Five-Star Reviews",
      desc: "Welcoming over 150,000 guests, curating dream backdrops for thousands of birthdays, romantic dates, and fairytale proposals.",
      icon: <Star className="w-5 h-5 text-gold-champagne" />,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500&fit=crop",
    },
    {
      year: "2025",
      title: "Digital Luxury V2.0",
      desc: "We introduced our state-of-the-art interactive Celebration Configurator and instant VIP table reservation suite.",
      icon: <Calendar className="w-5 h-5 text-gold-champagne" />,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&fit=crop",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".timeline-card");
    const lines = gsap.utils.toArray(".timeline-line-fill");

    items.forEach((item: any) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate central timeline progress bar
    gsap.fromTo(
      ".timeline-progress-indicator",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal text-cream-white"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-blush/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 flex flex-col items-center gap-3">
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
            How The <span className="italic text-rose-blush font-light">Rose</span> Bloomed
          </h2>
          <div className="w-16 h-[1px] bg-gold-champagne mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-5xl mx-auto">
          {/* Central Vertical Line (Desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-neutral-800 -translate-x-1/2 hidden md:block origin-top">
            <div className="timeline-progress-indicator w-full h-full bg-gold-champagne origin-top scale-y-0" />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16 md:space-y-24">
            {events.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`timeline-card relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer dot marker (Desktop only) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-gold-champagne bg-charcoal hidden md:flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-blush animate-ping" />
                  </div>

                  {/* Left/Right Column: Image Frame */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-cream-white/10 group">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[4000ms]"
                        style={{ backgroundImage: `url(${evt.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Left/Right Column: Text Content Card */}
                  <div className="w-full md:w-1/2 flex justify-start px-2 md:px-8">
                    <div className="glass-panel-dark p-8 rounded-3xl border border-cream-white/10 max-w-md w-full relative">
                      {/* Floating year indicator */}
                      <span className="absolute -top-6 right-8 font-serif text-5xl md:text-6xl text-gold-champagne/20 font-bold tracking-wider select-none pointer-events-none">
                        {evt.year}
                      </span>

                      <div className="flex gap-4 items-center mb-4">
                        <div className="w-10 h-10 bg-gold-champagne/10 border border-gold-champagne/30 rounded-xl flex items-center justify-center">
                          {evt.icon}
                        </div>
                        <h3 className="font-serif text-xl tracking-wide text-cream-white">
                          {evt.title}
                        </h3>
                      </div>

                      <p className="text-xs md:text-sm text-cream-white/60 font-light leading-relaxed">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
