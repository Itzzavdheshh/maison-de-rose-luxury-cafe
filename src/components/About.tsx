"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Star, Users, ArrowRight } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [guests, setGuests] = useState(0);
  const [rating, setRating] = useState(0.0);

  useEffect(() => {
    if (isStatsInView) {
      // Guests Count Anim
      let startG = 0;
      const endG = 3900;
      const durationG = 2000; // ms
      const intervalG = 30;
      const stepG = Math.ceil((endG / durationG) * intervalG);

      const timerG = setInterval(() => {
        startG += stepG;
        if (startG >= endG) {
          setGuests(endG);
          clearInterval(timerG);
        } else {
          setGuests(startG);
        }
      }, intervalG);

      // Rating Count Anim
      let startR = 0;
      const endR = 4.6;
      const timerR = setInterval(() => {
        startR += 0.1;
        if (startR >= endR) {
          setRating(endR);
          clearInterval(timerR);
        } else {
          setRating(parseFloat(startR.toFixed(1)));
        }
      }, 40);

      return () => {
        clearInterval(timerG);
        clearInterval(timerR);
      };
    }
  }, [isStatsInView]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden bg-cream-white flex items-center"
    >
      {/* Decorative Blur Background Circles */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-rose-soft/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-rose-blush/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Ken Burns and Floating cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Picture Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-lg aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-4 border-rose-soft/30"
            >
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-[6000ms] ease-out"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </motion.div>

            {/* Overlapping Decorative Small Image */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 w-44 md:w-56 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF8F5] hidden sm:block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=600&fit=crop')`,
                }}
              />
            </motion.div>

            {/* Overlapping Stats Card */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, x: 40, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-10 -right-4 glass-panel p-6 rounded-2xl shadow-xl flex flex-col gap-4 border border-rose-blush/30 backdrop-blur-md max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-champagne/15 flex items-center justify-center text-gold-champagne">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-charcoal">{guests}+</h4>
                  <p className="text-[10px] text-charcoal/60 uppercase tracking-wider font-semibold">Happy Guests</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-champagne/15 flex items-center justify-center text-gold-champagne">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-charcoal">{rating} ★</h4>
                  <p className="text-[10px] text-charcoal/60 uppercase tracking-wider font-semibold">Average Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gold-champagne font-medium uppercase tracking-[0.3em] text-xs md:text-sm"
              >
                Maison De Rose
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
              >
                Where Elegance <br />
                Meets <span className="italic text-gold-champagne font-light">Indulgence</span>.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-charcoal/70 font-light leading-relaxed text-base md:text-lg"
            >
              Step into an enchanting floral paradise. Every corner of our bistro is detailed with exquisite rose arrangements, plush velvet seating, and warm ambient lighting to curate the perfect culinary runway. Enjoy handcrafted artisanal food, romantic tea ceremonies, and memories that last a lifetime.
            </motion.p>

            {/* Cafe Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-rose-blush/20"
            >
              {/* Location Card */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rose-soft/30 text-charcoal rounded-xl">
                  <MapPin className="w-5 h-5 text-gold-champagne" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-charcoal text-sm">Location</h5>
                  <p className="text-xs text-charcoal/60 mt-1 leading-normal">
                    42 Avenue des Roses,<br />
                    Central Promenade
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rose-soft/30 text-charcoal rounded-xl">
                  <Clock className="w-5 h-5 text-gold-champagne" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-charcoal text-sm">Operating Hours</h5>
                  <p className="text-xs text-charcoal/60 mt-1 leading-normal">
                    12:00 PM – 11:00 PM<br />
                    Open Daily
                  </p>
                </div>
              </div>
            </motion.div>

            {/* View Celebration Configurator CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("configurator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-charcoal hover:text-gold-champagne font-semibold text-sm tracking-wider uppercase transition-colors cursor-pointer group"
              >
                <span>Plan A Celebration</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
