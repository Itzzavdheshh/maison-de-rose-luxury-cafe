"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock, Award, X, Sparkles, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

export default function ReservationWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Date Night");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) return;

    // Save lead to local storage for Admin Dashboard sync
    const newLead = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      phone,
      date,
      time,
      guests,
      occasion,
      timestamp: new Date().toISOString(),
      status: "New",
      source: "WhatsApp Widget"
    };
    
    const existing = JSON.parse(localStorage.getItem("rose_leads") || "[]");
    localStorage.setItem("rose_leads", JSON.stringify([newLead, ...existing]));

    // Trigger luxury rose/gold confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#F7D6E0", "#F4C2C2", "#D4AF37", "#FFF8F5"],
    });

    setIsSuccess(true);

    // Format WhatsApp API Text
    const text = `Hello Maison De Rose Bistro,
I would like to reserve a table.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}
Occasion: ${occasion}`;

    const waUrl = `https://wa.me/917690863039?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSuccess(false);
      setIsOpen(false);
      // Reset
      setName("");
      setPhone("");
      setDate("");
      setTime("");
    }, 1800);
  };

  return (
    <>
      {/* Floating CTA Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gold-champagne hover:bg-opacity-95 text-charcoal font-medium text-sm px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] flex items-center gap-3 border border-[#FFF8F5]/30 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
      >
        <MessageSquare className="w-4 h-4 fill-current text-charcoal" />
        <span>Reserve Table</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFF8F5]"></span>
        </span>
      </motion.button>

      {/* Reservation Widget Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md glass-panel p-8 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal tracking-wide">
                    Instant Booking
                  </h3>
                  <p className="text-xs text-charcoal/60 mt-1">
                    Book table via WhatsApp in 30 seconds
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-rose-soft/40 rounded-full transition-colors cursor-pointer text-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ananya Rao"
                      className="w-full bg-cream-white/60 border border-rose-blush/30 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-sm text-charcoal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-cream-white/60 border border-rose-blush/30 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-sm text-charcoal"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
                        Select Date
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-cream-white/60 border border-rose-blush/30 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-sm text-charcoal"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
                        Select Time
                      </label>
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-cream-white/60 border border-rose-blush/30 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-sm text-charcoal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-cream-white/60 border border-rose-blush/30 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-sm text-charcoal cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, "7+", "10+"].map((num) => (
                          <option key={num} value={num}>
                            {num} Guest{num !== 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal/80 mb-1.5 font-medium">
                        Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full bg-cream-white/60 border border-rose-blush/30 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3 text-sm text-charcoal cursor-pointer"
                      >
                        {[
                          "Casual Dining",
                          "Date Night",
                          "Birthday Party",
                          "Anniversary",
                          "Proposal Setup",
                          "Baby Shower",
                          "Business Meeting",
                        ].map((occ) => (
                          <option key={occ} value={occ}>
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-champagne hover:bg-opacity-90 text-charcoal py-4 rounded-xl font-medium tracking-wide shadow-lg cursor-pointer mt-4 flex items-center justify-center gap-2"
                  >
                    <span>Reserve My Table</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 bg-gold-champagne/20 rounded-full flex items-center justify-center text-gold-champagne mb-4 animate-bounce">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-charcoal mb-2">
                    Request Generated!
                  </h4>
                  <p className="text-sm text-charcoal/70 max-w-[280px]">
                    Redirecting to WhatsApp to complete your reservation...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
