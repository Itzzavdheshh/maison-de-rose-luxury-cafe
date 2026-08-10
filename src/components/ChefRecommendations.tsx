"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Flame } from "lucide-react";
import confetti from "canvas-confetti";

interface Dish {
  id: string;
  name: string;
  desc: string;
  price: string;
  calories: string;
  image: string;
  tag: string;
}

export default function ChefRecommendations() {
  const recommendations: Dish[] = [
    {
      id: "rec-1",
      name: "Sundae In Clouds",
      desc: "Decadent strawberry-rose gelato nestled on a warm waffles waffle, encapsulated in a magical cloud of rose cotton candy.",
      price: "₹380",
      calories: "450 kcal",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&fit=crop",
      tag: "Signature Dessert",
    },
    {
      id: "rec-2",
      name: "Butter Chicken Pizza",
      desc: "Artisanal thin crust sourdough, creamy makhani base, clay-oven tandoori chicken, mozzarella, garnished with gold-leaf accents.",
      price: "₹490",
      calories: "620 kcal",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&fit=crop",
      tag: "Best Seller",
    },
    {
      id: "rec-3",
      name: "Brownie In Clouds",
      desc: "Rich fudge brownie on a sizzling hot skillet, vanilla bean quenelle, drizzled with rose-tinted warm white chocolate fudge.",
      price: "₹390",
      calories: "510 kcal",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&fit=crop",
      tag: "Exclusive",
    },
    {
      id: "rec-4",
      name: "Rose Gold Cappuccino",
      desc: "Single-origin espresso brewed with rose water infusion, velvet microfoam, topped with flakes of edible 24k gold leaf.",
      price: "₹260",
      calories: "180 kcal",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&fit=crop",
      tag: "Chef's Signature",
    },
  ];

  return (
    <section
      id="chef-recommendations"
      className="relative py-24 md:py-32 overflow-hidden bg-cream-white"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-soft/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-blush/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 flex flex-col items-center gap-3">
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Gastronomy Showcase
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal leading-tight">
            Chef's <span className="italic text-gold-champagne font-light">Recommendations</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-champagne mt-4" />
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {recommendations.map((dish) => (
            <RecommendationCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecommendationCard({ dish }: { dish: Dish }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    if (!isLiked) {
      // Trigger a tiny heart confetti explosion on click
      confetti({
        particleCount: 15,
        angle: 60,
        spread: 55,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ["#F4C2C2", "#F7D6E0", "#D4AF37"],
      });
    }
  };

  return (
    <div className="group relative rounded-[32px] overflow-hidden border border-rose-blush/20 bg-[#FFF8F5] p-6 shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col sm:flex-row gap-6 hover:border-gold-champagne/40">
      
      {/* Animated Gold border drawing on hover */}
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-gold-champagne transition-all duration-700 group-hover:w-full" />
      <span className="absolute top-0 right-0 w-[2px] h-0 bg-gold-champagne transition-all duration-700 delay-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-gold-champagne transition-all duration-700 delay-200 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-gold-champagne transition-all duration-700 delay-300 group-hover:h-full" />

      {/* Dish Image Container */}
      <div className="w-full sm:w-44 aspect-square rounded-2xl overflow-hidden relative shadow-md">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${dish.image})` }}
        />
        <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold-champagne/30 text-[10px] text-gold-champagne uppercase font-medium tracking-wider flex items-center gap-1.5 z-10">
          <Sparkles className="w-3 h-3 text-gold-champagne" />
          <span>{dish.tag}</span>
        </div>
      </div>

      {/* Dish Details */}
      <div className="flex-1 flex flex-col justify-between py-1 relative">
        <div className="flex flex-col gap-2">
          {/* Header Row */}
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-serif text-xl md:text-2xl text-charcoal tracking-wide">
              {dish.name}
            </h3>
            
            {/* Heart Favorite button */}
            <motion.button
              onClick={handleLike}
              whileTap={{ scale: 0.8 }}
              className="p-2 bg-rose-soft/20 hover:bg-rose-soft/40 text-[#1F1F1F] rounded-full transition-colors cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isLiked ? "fill-red-400 text-red-400" : "text-charcoal"
                }`}
              />
            </motion.button>
          </div>

          <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
            {dish.desc}
          </p>
        </div>

        {/* Footer Metrics Row */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-rose-blush/10">
          <div className="flex gap-4 items-center">
            <span className="font-serif text-xl font-bold text-gold-champagne">
              {dish.price}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-charcoal/40 uppercase font-semibold">
              <Flame className="w-3.5 h-3.5 text-rose-blush" />
              <span>{dish.calories}</span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-gold-champagne tracking-wider uppercase bg-gold-champagne/10 px-2.5 py-1 rounded">
            Recommended
          </span>
        </div>
      </div>
    </div>
  );
}
