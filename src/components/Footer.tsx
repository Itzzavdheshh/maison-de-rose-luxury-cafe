"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ArrowRight, Heart, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Save newsletter lead locally for Admin Dashboard sync
    const newSub = {
      id: Math.random().toString(36).substring(2, 9),
      email,
      timestamp: new Date().toISOString(),
    };
    
    const existing = JSON.parse(localStorage.getItem("rose_subscribers") || "[]");
    localStorage.setItem("rose_subscribers", JSON.stringify([newSub, ...existing]));

    // Trigger minor confetti
    confetti({
      particleCount: 25,
      spread: 30,
      colors: ["#D4AF37", "#F7D6E0"],
    });

    setSubscribed(true);
    setEmail("");
    
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-rose-gold-gradient text-cream-white/70 overflow-hidden pt-20 pb-10 border-t border-gold-champagne/10">
      
      {/* Background floral accents blur */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-rose-soft/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-cream-white/5">
          
          {/* Brand Info (L-4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-3xl text-cream-white tracking-wide leading-none">
                Maison De Rose
              </h3>
              <span className="text-[10px] text-gold-champagne tracking-[0.4em] uppercase font-semibold">
                Parisian Floral Bistro & Lounge
              </span>
            </div>

            <p className="text-xs md:text-sm text-cream-white/50 leading-relaxed font-light">
              The premier Parisian floral sanctuary. Indulge in artisanal coffees, handcrafted mocktails, luxurious desserts, and gorgeous floral dining setups.
            </p>

            {/* Social / Developer icons */}
            <div className="flex gap-3">
              <button
                onClick={() => window.open("https://github.com/itzzavdheshh", "_blank")}
                className="w-10 h-10 rounded-full border border-cream-white/10 hover:border-gold-champagne/50 hover:text-gold-champagne flex items-center justify-center transition-colors cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/aavdhesh", "_blank")}
                className="w-10 h-10 rounded-full border border-cream-white/10 hover:border-gold-champagne/50 hover:text-gold-champagne flex items-center justify-center transition-colors cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open("mailto:aavdhesh.dadhich@gmail.com", "_blank")}
                className="w-10 h-10 rounded-full border border-cream-white/10 hover:border-gold-champagne/50 hover:text-gold-champagne flex items-center justify-center transition-colors cursor-pointer"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links (L-3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-serif text-lg text-cream-white tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-3.5 text-xs">
              {[
                { id: "hero", label: "Home Base" },
                { id: "about", label: "Our Story" },
                { id: "experiences", label: "Signature Experiences" },
                { id: "menu", label: "Menu Catalogue" },
                { id: "gallery", label: "Moments Gallery" },
                { id: "configurator", label: "Celebration Planner" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-gold-champagne transition-colors cursor-pointer text-left font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details (L-2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-serif text-lg text-cream-white tracking-wide">
              Reach Us
            </h4>
            <ul className="space-y-4 text-xs font-light">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  42 Avenue des Roses, Promenade
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                <a href="tel:+917690863039" className="hover:text-gold-champagne transition-colors">
                  +91 76908 63039
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                <span>11 AM – 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (L-3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-serif text-lg text-cream-white tracking-wide">
              Newsletter
            </h4>
            <p className="text-xs text-cream-white/50 leading-relaxed font-light">
              Subscribe to get exclusive celebration offers, chef recipes, and menu launches.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1F1F1F]/60 border border-cream-white/10 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3.5 text-xs text-cream-white placeholder-cream-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gold-champagne hover:bg-opacity-90 rounded-lg text-charcoal flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <span className="text-[10px] text-gold-champagne font-medium tracking-wide flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Subscribed Successfully!</span>
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright & Dev attribution */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-xs text-cream-white/35 font-light">
          <span>&copy; {new Date().getFullYear()} Maison De Rose. All Rights Reserved.</span>
          <span className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-blush fill-current animate-pulse" />
            <span>by</span>
            <a
              href="https://github.com/itzzavdheshh"
              target="_blank"
              rel="noreferrer"
              className="text-gold-champagne font-medium hover:underline ml-0.5"
            >
              Avdhesh Dadhich
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
