"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  url: string;
  category: "interiors" | "food" | "celebrations";
  title: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "interiors" | "food" | "celebrations">("all");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const items: GalleryItem[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&fit=crop",
      category: "interiors",
      title: "Pink Rose Canopy seating",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&fit=crop",
      category: "food",
      title: "Gelato in Clouds Sundae",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&fit=crop",
      category: "celebrations",
      title: "Luxury Anniversary Cabana Date",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600&fit=crop",
      category: "interiors",
      title: "Parisian Swing Corner",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&fit=crop",
      category: "interiors",
      title: "Luxury Dining Rose Arch",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&fit=crop",
      category: "food",
      title: "Brownie Hot Skillet Fudge",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&fit=crop",
      category: "celebrations",
      title: "Bespoke Pastel Birthday Setup",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&fit=crop",
      category: "celebrations",
      title: "Cinematic Rose Proposal Pathway",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&fit=crop",
      category: "food",
      title: "Signature Rose Lychee Pastry",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  const openLightbox = (url: string) => {
    const idx = items.findIndex((i) => i.url === url);
    setSelectedIdx(idx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % items.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + items.length) % items.length);
  };

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 overflow-hidden bg-cream-white text-charcoal"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-rose-soft/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 flex flex-col items-center gap-3">
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Visual Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal leading-tight">
            Magical <span className="italic text-gold-champagne font-light">Moments</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-champagne mt-4" />
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {[
            { key: "all", label: "Show All" },
            { key: "interiors", label: "Interiors" },
            { key: "food", label: "Artisanal Food" },
            { key: "celebrations", label: "Celebrations" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                filter === cat.key
                  ? "bg-gold-champagne border-gold-champagne text-charcoal shadow-md"
                  : "bg-cream-white/70 border-rose-blush/30 text-charcoal/70 hover:border-gold-champagne/45"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Columns Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item.url)}
                className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-blush/20 bg-cream-white group cursor-pointer inline-block w-full"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                />

                {/* Glassy hover overlay */}
                <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-center text-cream-white">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-gold-champagne font-bold">{item.category}</span>
                      <h4 className="font-serif text-lg mt-0.5 font-medium">{item.title}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold-champagne text-charcoal flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 p-3 bg-cream-white/10 hover:bg-cream-white/20 text-cream-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 p-3 bg-cream-white/10 hover:bg-cream-white/20 text-cream-white rounded-full transition-colors cursor-pointer hidden sm:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl max-h-[80vh] flex flex-col items-center gap-4"
              >
                <img
                  src={items[selectedIdx].url}
                  alt={items[selectedIdx].title}
                  className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl border border-cream-white/10 select-none"
                />
                
                {/* Lightbox details */}
                <div className="text-center text-cream-white">
                  <span className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold">
                    {items[selectedIdx].category}
                  </span>
                  <h4 className="font-serif text-xl mt-1">{items[selectedIdx].title}</h4>
                </div>
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 p-3 bg-cream-white/10 hover:bg-cream-white/20 text-cream-white rounded-full transition-colors cursor-pointer hidden sm:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
