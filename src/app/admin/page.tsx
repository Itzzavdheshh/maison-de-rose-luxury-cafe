"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Mail, MessageSquare, ShieldAlert, Check, Trash, Plus, Lock, Calendar } from "lucide-react";
import confetti from "canvas-confetti";

interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  timestamp: string;
  status: "New" | "Confirmed" | "Cancelled";
  source: string;
}

interface Subscriber {
  id: string;
  email: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [leads, setLeads] = useState<Reservation[]>([]);
  const [subs, setSubs] = useState<Subscriber[]>([]);

  // Load and pre-populate mock data on first load
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Leads
      let existingLeads = localStorage.getItem("rose_leads");
      if (!existingLeads) {
        const mockLeads: Reservation[] = [
          {
            id: "lead-1",
            name: "Sophia Laurent",
            phone: "+1 (555) 234-8921",
            date: "2026-06-27",
            time: "19:30",
            guests: "2",
            occasion: "Anniversary (Premium)",
            timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
            status: "Confirmed",
            source: "WhatsApp Widget",
          },
          {
            id: "lead-2",
            name: "Julian Sterling",
            phone: "+1 (555) 872-1049",
            date: "2026-06-28",
            time: "20:00",
            guests: "6",
            occasion: "Birthday Party (Luxe Elite)",
            timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
            status: "New",
            source: "Web Form",
          },
          {
            id: "lead-3",
            name: "Emma Watson",
            phone: "+1 (555) 492-3810",
            date: "2026-06-26",
            time: "18:00",
            guests: "2",
            occasion: "Proposal Setup (Luxe Elite)",
            timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
            status: "Confirmed",
            source: "Web Form",
          },
        ];
        localStorage.setItem("rose_leads", JSON.stringify(mockLeads));
        setLeads(mockLeads);
      } else {
        setLeads(JSON.parse(existingLeads));
      }

      // 2. Subscribers
      let existingSubs = localStorage.getItem("rose_subscribers");
      if (!existingSubs) {
        const mockSubs: Subscriber[] = [
          { id: "sub-1", email: "clara.m@example.com", timestamp: new Date(Date.now() - 3600000 * 24).toISOString() },
          { id: "sub-2", email: "julian.v@example.com", timestamp: new Date(Date.now() - 3600000 * 48).toISOString() },
        ];
        localStorage.setItem("rose_subscribers", JSON.stringify(mockSubs));
        setSubs(mockSubs);
      } else {
        setSubs(JSON.parse(existingSubs));
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "rose123") {
      setIsAuthenticated(true);
      setError("");
      // Little celebration
      confetti({
        particleCount: 50,
        spread: 45,
        colors: ["#D4AF37", "#F7D6E0"],
      });
    } else {
      setError("Incorrect Access Code. Hint: rose123");
    }
  };

  const handleAddMockLead = () => {
    const names = ["Vijay Kumar", "Pooja Reddy", "Nikhil Sen", "Divya Rao"];
    const occasions = ["Date Night", "Birthday (Classic)", "Anniversary (Luxe Elite)"];
    
    const randomLead: Reservation = {
      id: Math.random().toString(36).substring(2, 9),
      name: names[Math.floor(Math.random() * names.length)],
      phone: "+91 9" + Math.floor(100000000 + Math.random() * 900000000),
      date: new Date(Date.now() + 86400000 * Math.floor(Math.random() * 5)).toISOString().split("T")[0],
      time: `${12 + Math.floor(Math.random() * 10)}:${Math.random() > 0.5 ? "00" : "30"}`,
      guests: String(1 + Math.floor(Math.random() * 6)),
      occasion: occasions[Math.floor(Math.random() * occasions.length)],
      timestamp: new Date().toISOString(),
      status: "New",
      source: "Mock Injector",
    };

    const updated = [randomLead, ...leads];
    setLeads(updated);
    localStorage.setItem("rose_leads", JSON.stringify(updated));
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter((item) => item.id !== id);
    setLeads(updated);
    localStorage.setItem("rose_leads", JSON.stringify(updated));
  };

  const handleConfirmLead = (id: string) => {
    const updated = leads.map((item) => {
      if (item.id === id) {
        return { ...item, status: "Confirmed" as const };
      }
      return item;
    });
    setLeads(updated);
    localStorage.setItem("rose_leads", JSON.stringify(updated));
  };

  const handleDeleteSub = (id: string) => {
    const updated = subs.filter((item) => item.id !== id);
    setSubs(updated);
    localStorage.setItem("rose_subscribers", JSON.stringify(updated));
  };

  // Stats
  const totalBookings = leads.length;
  const newBookings = leads.filter((l) => l.status === "New").length;
  const confirmedBookings = leads.filter((l) => l.status === "Confirmed").length;
  const totalSubs = subs.length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center p-6 text-cream-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-sm w-full glass-panel-dark p-8 rounded-[36px] border border-gold-champagne/20 shadow-2xl text-center"
        >
          <div className="w-14 h-14 bg-gold-champagne/10 border border-gold-champagne/30 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-champagne">
            <Lock className="w-6 h-6 animate-pulse" />
          </div>

          <h1 className="font-serif text-2xl text-cream-white tracking-wide">
            Lead Console
          </h1>
          <p className="text-xs text-cream-white/50 tracking-[0.2em] uppercase mt-1">
            Maison De Rose
          </p>

          <form onSubmit={handleLogin} className="space-y-4 mt-8">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-cream-white/60 mb-2 font-medium text-left">
                Security Access Code
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hint: rose123"
                className="w-full bg-[#1F1F1F] border border-gold-champagne/20 focus:border-gold-champagne focus:outline-none rounded-xl px-4 py-3.5 text-xs text-cream-white text-center placeholder-cream-white/20"
              />
            </div>

            {error && (
              <p className="text-[10px] text-red-400 font-semibold mt-1">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gold-champagne hover:bg-opacity-95 text-charcoal py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg mt-4"
            >
              Enter Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal text-cream-white p-6 md:p-10 font-sans relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-cream-white/5 pb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-cream-white tracking-wide">
              Lead Console
            </h1>
            <p className="text-xs text-gold-champagne tracking-[0.25em] uppercase mt-1">
              Live Reservation & Newsletter Manager
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddMockLead}
              className="px-4 py-2.5 bg-gold-champagne hover:bg-opacity-90 text-charcoal rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Simulate Lead</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2.5 bg-[#1F1F1F] border border-cream-white/10 hover:border-cream-white/25 rounded-xl text-xs font-semibold tracking-wider uppercase cursor-pointer"
            >
              Lock Console
            </button>
          </div>
        </div>

        {/* Stats Row Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1: Total Bookings */}
          <div className="glass-panel-dark p-6 rounded-3xl border border-cream-white/5 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-gold-champagne/10 flex items-center justify-center text-gold-champagne">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream-white">{totalBookings}</h3>
              <p className="text-[10px] text-cream-white/40 uppercase tracking-widest font-semibold">Total Leads</p>
            </div>
          </div>

          {/* Card 2: New Requests */}
          <div className="glass-panel-dark p-6 rounded-3xl border border-cream-white/5 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream-white">{newBookings}</h3>
              <p className="text-[10px] text-cream-white/40 uppercase tracking-widest font-semibold">New Requests</p>
            </div>
          </div>

          {/* Card 3: Confirmed */}
          <div className="glass-panel-dark p-6 rounded-3xl border border-cream-white/5 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream-white">{confirmedBookings}</h3>
              <p className="text-[10px] text-cream-white/40 uppercase tracking-widest font-semibold">Confirmed</p>
            </div>
          </div>

          {/* Card 4: Subscribers */}
          <div className="glass-panel-dark p-6 rounded-3xl border border-cream-white/5 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-cream-white">{totalSubs}</h3>
              <p className="text-[10px] text-cream-white/40 uppercase tracking-widest font-semibold">Subscribers</p>
            </div>
          </div>
        </div>

        {/* Split Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table: Bookings (L-8 cols) */}
          <div className="lg:col-span-8 glass-panel-dark rounded-[32px] border border-cream-white/5 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-cream-white/5 bg-[#1F1F1F]/40 flex justify-between items-center">
              <h3 className="font-serif text-lg tracking-wide text-cream-white">Table Reservations</h3>
              <span className="text-[9px] uppercase tracking-widest bg-gold-champagne/15 text-gold-champagne font-bold px-2 py-0.5 rounded">
                Live Feed
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-cream-white/5 text-cream-white/40 font-semibold uppercase tracking-wider text-[9px] bg-charcoal-light/10">
                    <th className="p-4 pl-6">Guest Details</th>
                    <th className="p-4">Schedule</th>
                    <th className="p-4">Size & Occasion</th>
                    <th className="p-4">Source</th>
                    <th className="p-4 text-right pr-6">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length > 0 ? (
                    leads.map((lead) => (
                      <tr key={lead.id} className="border-b border-cream-white/5 hover:bg-cream-white/[0.02] transition-colors">
                        <td className="p-4 pl-6">
                          <div className="font-medium text-cream-white">{lead.name}</div>
                          <div className="text-[10px] text-cream-white/40 mt-0.5">{lead.phone}</div>
                        </td>
                        <td className="p-4">
                          <div>{lead.date}</div>
                          <div className="text-[10px] text-gold-champagne mt-0.5">{lead.time}</div>
                        </td>
                        <td className="p-4">
                          <div>{lead.guests} Guest{lead.guests !== "1" ? "s" : ""}</div>
                          <div className="text-[10px] text-rose-blush mt-0.5">{lead.occasion}</div>
                        </td>
                        <td className="p-4">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cream-white/5 border border-cream-white/10 text-cream-white/60">
                            {lead.source}
                          </span>
                        </td>
                        <td className="p-4 text-right pr-6 space-x-2">
                          {lead.status === "New" && (
                            <button
                              onClick={() => handleConfirmLead(lead.id)}
                              className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl transition-colors cursor-pointer"
                              title="Confirm Reservation"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl transition-colors cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-cream-white/30 font-light">
                        No reservation leads recorded.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table: Subscribers (L-4 cols) */}
          <div className="lg:col-span-4 glass-panel-dark rounded-[32px] border border-cream-white/5 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-cream-white/5 bg-[#1F1F1F]/40 flex justify-between items-center">
              <h3 className="font-serif text-lg tracking-wide text-cream-white">Newsletter Leads</h3>
              <button
                onClick={() => {
                  const emails = subs.map((s) => s.email).join("\n");
                  navigator.clipboard.writeText(emails);
                  confetti({ particleCount: 15, spread: 20 });
                }}
                className="text-[9px] uppercase tracking-widest font-bold border border-gold-champagne/30 text-gold-champagne hover:bg-gold-champagne/10 px-2 py-1 rounded cursor-pointer"
              >
                Copy All
              </button>
            </div>

            <div className="divide-y divide-cream-white/5 max-h-[350px] overflow-y-auto">
              {subs.length > 0 ? (
                subs.map((sub) => (
                  <div key={sub.id} className="p-4 flex justify-between items-center hover:bg-cream-white/[0.01]">
                    <div className="overflow-hidden mr-2">
                      <div className="text-xs font-medium text-cream-white truncate">{sub.email}</div>
                      <div className="text-[9px] text-cream-white/30 mt-0.5">
                        {new Date(sub.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteSub(sub.id)}
                      className="p-2 text-cream-white/35 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-cream-white/30 font-light text-xs">
                  No subscribers recorded.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
