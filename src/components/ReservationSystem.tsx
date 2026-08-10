"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock, Award, Sparkles, Send, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function ReservationSystem() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Casual Dining");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Listen to autofill event from CelebrationConfigurator
  useEffect(() => {
    const handleAutofill = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.occasion) {
        setOccasion(customEvent.detail.occasion);
      }
    };
    window.addEventListener("autofill_reservation", handleAutofill);
    return () => window.removeEventListener("autofill_reservation", handleAutofill);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) return;

    setIsSubmitting(true);

    // Save lead to local storage (syncs with Admin Dashboard)
    const newReservation = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      phone,
      date,
      time,
      guests,
      occasion,
      timestamp: new Date().toISOString(),
      status: "Confirmed",
      source: "Web Form"
    };

    const existing = JSON.parse(localStorage.getItem("rose_leads") || "[]");
    localStorage.setItem("rose_leads", JSON.stringify([newReservation, ...existing]));

    // Simulated Webhook post to Google Sheets / EmailJS
    // In production, the user would replace this with their Google script webhook or EmailJS call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate network delay
      
      // Post to mock endpoint (optional reference)
      // fetch('https://script.google.com/macros/s/MOCK_ID/exec', { method: 'POST', body: JSON.stringify(newReservation) })
      
    } catch (err) {
      console.error("Integration error:", err);
    }

    setIsSubmitting(false);
    setShowSuccess(true);

    // Blast luxury rose gold confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ["#F7D6E0", "#F4C2C2", "#D4AF37", "#FFF8F5"],
    });

    // Option to instantly redirect to WhatsApp
    const waText = `Hello Maison De Rose Bistro,
I have submitted a table reservation request via your website.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}
Occasion: ${occasion}

Please confirm my booking. Thank you!`;
    const waUrl = `https://wa.me/917690863039?text=${encodeURIComponent(waText)}`;

    // Automatically open WhatsApp in new tab after a brief delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 2000);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    // Reset
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("2");
    setOccasion("Casual Dining");
  };

  return (
    <section
      id="reservation"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal text-cream-white"
    >
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-blush/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual copy & details */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
                Table Reservations
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
                Secure Your <span className="italic text-rose-blush font-light">Experience</span>
              </h2>
            </div>
            
            <p className="text-cream-white/60 font-light leading-relaxed text-sm md:text-base">
              Reservations are highly recommended, especially for weekends and special celebrations. Use our quick form to reserve your table. A copy of your details will be synchronized with our dashboard and a WhatsApp request will be generated to secure your table instantly.
            </p>

            {/* Visual list */}
            <ul className="space-y-4">
              {[
                "Priority VIP seating inside our premium rose garden",
                "Decor options auto-configured from our configurator",
                "Direct confirmation from our host team via WhatsApp",
                "Complimentary welcome drinks for special occasions",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start text-xs text-cream-white/80">
                  <div className="w-5 h-5 rounded-full bg-gold-champagne/10 border border-gold-champagne/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-gold-champagne" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Reservation Form Box */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-10 rounded-[36px] border border-cream-white/10 shadow-2xl relative overflow-hidden text-charcoal">
              {/* Top luxury line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-champagne" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Shruti Sen"
                      className="w-full bg-cream-white/70 border border-rose-blush/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-xs text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 76908 63039"
                      className="w-full bg-cream-white/70 border border-rose-blush/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-xs text-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 mb-1.5">
                      Reservation Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-cream-white/70 border border-rose-blush/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-xs text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 mb-1.5">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-cream-white/70 border border-rose-blush/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-xs text-charcoal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-cream-white/70 border border-rose-blush/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-xs text-charcoal cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, "7+", "10+"].map((n) => (
                        <option key={n} value={n}>
                          {n} Guest{n !== 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold text-charcoal/60 mb-1.5">
                      Dining Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full bg-cream-white/70 border border-rose-blush/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-xs text-charcoal cursor-pointer"
                    >
                      {[
                        "Casual Dining",
                        "Birthday Party",
                        "Anniversary",
                        "Proposal Setup",
                        "Baby Shower",
                        "Date Night",
                        "Business Meeting",
                      ].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-champagne hover:bg-opacity-95 disabled:bg-gold-champagne/50 text-charcoal py-4 rounded-2xl font-semibold tracking-wider uppercase text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-6"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Processing..." : "Reserve My Table"}</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-cream-white text-charcoal p-8 rounded-[36px] shadow-2xl border border-rose-blush/30 text-center"
            >
              <div className="w-16 h-16 bg-gold-champagne/10 text-gold-champagne border border-gold-champagne/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">
                Booking Request Sent!
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed max-w-[280px] mx-auto mb-6">
                We're redirecting you to WhatsApp to instantly confirm your reservation with our hosts.
              </p>

              <button
                onClick={closeSuccess}
                className="px-6 py-3 bg-gold-champagne hover:bg-opacity-95 text-charcoal rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
