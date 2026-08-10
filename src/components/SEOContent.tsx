"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowLeft } from "lucide-react";
import ReservationSystem from "./ReservationSystem";
import Testimonials from "./Testimonials";
import Location from "./Location";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import RosePetals from "./RosePetals";
import ReservationWidget from "./ReservationWidget";

interface Highlight {
  title: string;
  desc: string;
}

interface Faq {
  q: string;
  a: string;
}

interface SEOContentProps {
  keyword: string;
  title: string;
  subtitle: string;
  description: string;
  focusImage: string;
  highlights: Highlight[];
  faq: Faq[];
}

export default function SEOContent({
  keyword,
  title,
  subtitle,
  description,
  focusImage,
  highlights,
  faq,
}: SEOContentProps) {
  
  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <SmoothScroll>
      <RosePetals />
      <ReservationWidget />

      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-charcoal text-center px-6">
        {/* Background visual */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url(${focusImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl flex flex-col items-center gap-4 mt-12">
          {/* Back to main button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-xs text-rose-blush uppercase tracking-widest hover:text-gold-champagne transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-4.5 h-4.5" />
            <span>Back to main site</span>
          </button>

          <span className="text-gold-champagne uppercase tracking-[0.3em] text-xs font-semibold">
            {keyword}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-cream-white leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-cream-white/70 max-w-2xl text-sm md:text-base font-light tracking-wide mt-2">
            {subtitle}
          </p>

          <button
            onClick={() => {
              const el = document.getElementById("reservation");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-gold-champagne text-charcoal font-semibold rounded-full uppercase text-xs tracking-wider mt-6 hover:bg-opacity-95 shadow-lg cursor-pointer"
          >
            Book My Spot
          </button>
        </div>
      </section>

      {/* Main Focus Editorial Section */}
      <section className="py-20 bg-cream-white text-charcoal relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Box */}
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl border border-rose-blush/20">
              <img
                src={focusImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent pointer-events-none" />
            </div>

            {/* Editorial Copy */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                Designed For <span className="italic text-gold-champagne font-light">Memories</span>
              </h2>
              <p className="text-sm md:text-base text-charcoal/75 leading-relaxed font-light">
                {description}
              </p>

              {/* Highlights cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((h, i) => (
                  <div key={i} className="p-5 bg-rose-soft/20 border border-rose-blush/20 rounded-2xl">
                    <h4 className="font-serif font-bold text-sm text-charcoal flex items-center gap-2">
                      <Sparkles className="w-4.5 h-4.5 text-gold-champagne shrink-0" />
                      <span>{h.title}</span>
                    </h4>
                    <p className="text-xs text-charcoal/65 mt-2 leading-relaxed font-light">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-charcoal text-cream-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold-champagne uppercase tracking-widest text-xs font-semibold">Answers</span>
            <h3 className="font-serif text-3xl mt-1">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6">
            {faq.map((item, idx) => (
              <div key={idx} className="p-6 bg-charcoal-light/10 border border-cream-white/10 rounded-2xl">
                <h4 className="font-serif text-lg text-gold-champagne mb-2">
                  {item.q}
                </h4>
                <p className="text-xs md:text-sm text-cream-white/60 font-light leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard conversion funnel */}
      <ReservationSystem />
      <Testimonials />
      <Location />
      <Footer />
    </SmoothScroll>
  );
}
