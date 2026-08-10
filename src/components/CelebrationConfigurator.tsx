"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Gift, Calendar, ArrowRight } from "lucide-react";

type EventType = "birthday" | "anniversary" | "proposal" | "baby-shower";
type TierType = "basic" | "premium" | "luxury";

interface PackageDetails {
  price: string;
  image: string;
  inclusions: string[];
  description: string;
}

type ConfigurationData = Record<EventType, Record<TierType, PackageDetails>>;

export default function CelebrationConfigurator() {
  const [event, setEvent] = useState<EventType>("birthday");
  const [tier, setTier] = useState<TierType>("premium");

  const configData: ConfigurationData = {
    birthday: {
      basic: {
        price: "₹4,500",
        description: "An elegant table setup perfect for small family gatherings.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&fit=crop",
        inclusions: [
          "Delicate rose petal table scatterings",
          "Happy Birthday neon light display",
          "Premium 500g Dutch Truffle cake",
          "Pastel balloon cluster (20 pieces)",
          "Dedicated table server for 2 hours",
        ],
      },
      premium: {
        price: "₹12,500",
        description: "Our signature birthday package. Ideal for creating lasting, beautiful photo moments.",
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&fit=crop",
        inclusions: [
          "Gorgeous semi-arch rose backdrop stand",
          "Custom gold-acrylic name plaque",
          "Helium balloon canopy overhead",
          "Customized 1.5kg Red Velvet signature cake",
          "Professional photographer (45-min shoot)",
          "Pre-reserved premium window seating",
        ],
      },
      luxury: {
        price: "₹28,000",
        description: "A show-stopping, VIP birthday experience. Complete floral makeover.",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&fit=crop",
        inclusions: [
          "Grand floral entrance canopy with candles",
          "Circular stage setup with premium rose backdrops",
          "Custom multi-tier cake (up to 3kg)",
          "Professional photographer & short video reel highlight",
          "Private violinist performance (30 mins)",
          "5-course curated Chef's tasting menu for up to 6 guests",
        ],
      },
    },
    anniversary: {
      basic: {
        price: "₹5,000",
        description: "A cozy romantic date setup to celebrate your milestone.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&fit=crop",
        inclusions: [
          "Candlelit table with gold accents",
          "Red rose flower bouquet on arrival",
          "Heart-shaped Red Velvet pastry cake",
          "Personalized menu mockup card",
          "Chilled welcome berry mocktails",
        ],
      },
      premium: {
        price: "₹15,000",
        description: "Transform date night into an unforgettable floral getaway.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e3a5?q=80&w=600&fit=crop",
        inclusions: [
          "Gold frame floral stand backdrop",
          "Pathway of rose petals and glass candles",
          "Customized 1kg heart cake with initials",
          "Violinist table serenade (20 mins)",
          "3-course candlelight chef pair menu",
          "Private alcove reservation",
        ],
      },
      luxury: {
        price: "₹32,000",
        description: "The ultimate romantic dining experience under the stars.",
        image: "https://images.unsplash.com/photo-1519225495810-7517c2a79088?q=80&w=600&fit=crop",
        inclusions: [
          "Exclusive fairy-light cabana dome setup",
          "Massive heart-shaped floral backdrop",
          "Gourmet 5-course chef curated table + private butler",
          "Professional violinist (45 mins)",
          "Professional photographer (1-hour portrait shoot)",
          "Premium luxury flower bouquet (100 fresh roses)",
        ],
      },
    },
    proposal: {
      basic: {
        price: "₹8,000",
        description: "A private, beautiful way to pop the question.",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&fit=crop",
        inclusions: [
          "Light-up 'Marry Me' marquee letters (2ft)",
          "Pathway of fresh red rose petals",
          "Warm fairy light columns",
          "Fresh rose bouquet and welcome mocktails",
          "Custom proposal cake (500g)",
        ],
      },
      premium: {
        price: "₹20,000",
        description: "An elegant, cinematic setup to ensure a perfect 'YES'.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&fit=crop",
        inclusions: [
          "Floral dome heart backdrop with warm hanging globes",
          "Flickering LED glass candle path (50 candles)",
          "Violinist performance during the proposal (15 mins)",
          "Professional photographer capturing the big moment",
          "Custom 1kg champagne-rose cake",
          "Pre-arranged premium dinner table setup",
        ],
      },
      luxury: {
        price: "₹45,000",
        description: "An Awwwards-worthy fairytale setup. Maximum luxury and elegance.",
        image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&fit=crop",
        inclusions: [
          "Grand red carpet pathway lined with 100+ glass pillar candles",
          "Massive 1000-rose custom flower wall with neon sign",
          "4ft 'MARRY ME' giant marquee light setup",
          "Private acoustic duo (violin + guitar) for 45 mins",
          "Dedicated photographer + videographer (cinematic proposal reel)",
          "5-course private chef's dinner table & vintage grape juice toast",
        ],
      },
    },
    "baby-shower": {
      basic: {
        price: "₹6,000",
        description: "A cozy pastel setup for the mom-to-be.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&fit=crop",
        inclusions: [
          "Baby Shower neon sign display",
          "Pastel pink and blue balloon clouds",
          "Customized baby shower cake (1kg)",
          "Elegant table runner and mini floral jars",
          "Pre-reserved seating for up to 8 guests",
        ],
      },
      premium: {
        price: "₹16,000",
        description: "A larger theme setup with personalized floral props.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&fit=crop",
        inclusions: [
          "Giant teddy bear floral arch display",
          "Baby block marquee letters with lights",
          "Premium custom fondant cake (2kg)",
          "Assorted custom cupcakes & cake pops (12 pieces)",
          "Professional photographer (1 hour)",
          "Welcome mocktail dispenser and dedicated servers",
        ],
      },
      luxury: {
        price: "₹35,000",
        description: "A high-end, bespoke baby shower carnival setup.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&fit=crop",
        inclusions: [
          "Bespoke themed stage setup (up to 15ft backdrop)",
          "Grand floral balloon arch installation",
          "Luxury dessert counter: macarons, cupcakes, donuts, tarts",
          "Customized return gifts and premium packaging for guests",
          "Dedicated host / MC and professional photographer",
          "High-tea buffet setup for up to 15 guests",
        ],
      },
    },
  };

  const currentPackage = configData[event][tier];

  const handleBook = () => {
    // Save selection in session storage or state for form autofill
    sessionStorage.setItem("selected_occasion", `${event.charAt(0).toUpperCase() + event.slice(1)} - ${tier.toUpperCase()}`);
    
    // Smooth scroll to reservation section
    const el = document.getElementById("reservation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      
      // Trigger event to notify form
      const evt = new CustomEvent("autofill_reservation", {
        detail: {
          occasion: `${event.charAt(0).toUpperCase() + event.slice(1)} (${tier.charAt(0).toUpperCase() + tier.slice(1)})`
        }
      });
      window.dispatchEvent(evt);
    }
  };

  return (
    <section
      id="configurator"
      className="relative py-24 md:py-32 overflow-hidden bg-cream-white text-charcoal"
    >
      {/* Background soft pink circles */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-rose-soft/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 flex flex-col items-center gap-3">
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Interactive Planner
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
            Celebration <span className="italic text-gold-champagne font-light">Configurator</span>
          </h2>
          <p className="text-charcoal/60 text-xs md:text-sm font-light mt-2 max-w-md">
            Design your ideal event setup and instantly preview details, premium inclusions, and pricing.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-charcoal/5 border border-rose-blush/20 rounded-[40px] p-6 md:p-10 backdrop-blur-md">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-8">
              {/* Event Select */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/60 mb-4">
                  1. Select Event Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "birthday", label: "Birthday" },
                    { key: "anniversary", label: "Anniversary" },
                    { key: "proposal", label: "Proposal" },
                    { key: "baby-shower", label: "Baby Shower" },
                  ].map((evt) => (
                    <button
                      key={evt.key}
                      onClick={() => setEvent(evt.key as EventType)}
                      className={`px-4 py-3 rounded-2xl text-xs font-medium border uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        event === evt.key
                          ? "bg-gold-champagne border-gold-champagne text-charcoal shadow-md"
                          : "bg-cream-white/70 border-rose-blush/30 text-charcoal/70 hover:border-gold-champagne/45"
                      }`}
                    >
                      {evt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier Select */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/60 mb-4">
                  2. Choose Decoration Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: "basic", label: "Classic" },
                    { key: "premium", label: "Premium" },
                    { key: "luxury", label: "Luxe Elite" },
                  ].map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTier(t.key as TierType)}
                      className={`px-3 py-3 rounded-2xl text-[10px] font-semibold border uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                        tier === t.key
                          ? "bg-gold-champagne border-gold-champagne text-charcoal shadow-md"
                          : "bg-cream-white/70 border-rose-blush/30 text-charcoal/70 hover:border-gold-champagne/45"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Card */}
            <div className="p-6 bg-cream-white/80 border border-rose-blush/30 rounded-3xl shadow-sm flex flex-col gap-2 mt-6">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal/50">
                Estimated Package Cost
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3.5xl md:text-4.5xl font-bold text-charcoal leading-none">
                  {currentPackage.price}
                </span>
                <span className="text-xs text-charcoal/50">Incl. decor & setup</span>
              </div>
              <p className="text-xs text-charcoal/70 mt-2 font-light italic">
                {currentPackage.description}
              </p>
            </div>
          </div>

          {/* Details & Inclusions Column (Middle) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-cream-white/50 border border-rose-blush/20 rounded-3xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gold-champagne">
                <Gift className="w-5 h-5" />
                <h4 className="font-serif text-lg tracking-wide text-charcoal">Package Inclusions</h4>
              </div>

              {/* Inclusions list */}
              <ul className="space-y-3.5">
                {currentPackage.inclusions.map((inc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 items-start text-xs text-charcoal/80 leading-normal"
                  >
                    <div className="w-4 h-4 rounded-full bg-gold-champagne/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-gold-champagne" />
                    </div>
                    <span>{inc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Book CTA */}
            <button
              onClick={handleBook}
              className="w-full bg-gold-champagne hover:bg-opacity-95 text-charcoal py-4 rounded-2xl font-medium tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-8 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Configure Booking</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Live Preview Column (Right) */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden min-h-[250px] lg:min-h-0 aspect-video lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${event}-${tier}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentPackage.image})` }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay Indicator */}
            <div className="absolute bottom-4 left-4 right-4 bg-charcoal/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-gold-champagne/20 flex justify-between items-center z-10 text-cream-white">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest text-gold-champagne font-semibold">Live Preview</span>
                <span className="text-xs font-serif font-medium">{event.toUpperCase()} - {tier.toUpperCase()}</span>
              </div>
              <Sparkles className="w-4 h-4 text-gold-champagne animate-pulse" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
