"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Flame } from "lucide-react";
import confetti from "canvas-confetti";

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  calories: string;
  image: string;
  category: "beverages" | "main-course" | "desserts";
  tag?: string;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<"beverages" | "main-course" | "desserts">("beverages");
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    // Beverages
    {
      id: "bev-1",
      name: "KitKat Thickshake",
      desc: "Rich double chocolate shake blended with crunchy KitKat wafers, topped with fresh whipped cream and chocolate dust.",
      price: "₹240",
      calories: "350 kcal",
      category: "beverages",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&fit=crop",
      tag: "Popular",
    },
    {
      id: "bev-2",
      name: "Cappuccino Royale",
      desc: "Classic rich double espresso shot brewed with velvet microfoam, decorated with delicate rose dusting.",
      price: "₹190",
      calories: "120 kcal",
      category: "beverages",
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?q=80&w=600&fit=crop",
    },
    {
      id: "bev-3",
      name: "Coffee Frappe",
      desc: "Chilled blended espresso shot, fresh milk, crushed ice, finished with premium dark caramel syrup drizzle.",
      price: "₹220",
      calories: "280 kcal",
      category: "beverages",
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=600&fit=crop",
    },
    {
      id: "bev-4",
      name: "Watermelon Mojito",
      desc: "Sweet watermelon chunks muddled with fresh mint, lime slices, sparkling soda, and organic cane sugar.",
      price: "₹185",
      calories: "90 kcal",
      category: "beverages",
      image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&fit=crop",
    },
    {
      id: "bev-5",
      name: "Brownie Hot Chocolate",
      desc: "Velvety steamed hot chocolate mixed with fudge brownie bits, served with toasted marshmallows.",
      price: "₹210",
      calories: "320 kcal",
      category: "beverages",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&fit=crop",
      tag: "Seasonal",
    },
    // Main Course
    {
      id: "main-1",
      name: "Butter Chicken Rice Bowl",
      desc: "Rich butter chicken gravy served over aromatic steam-basmati rice, garnished with fresh ginger and coriander.",
      price: "₹380",
      calories: "540 kcal",
      category: "main-course",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&fit=crop",
      tag: "Best Seller",
    },
    {
      id: "main-2",
      name: "Pink Sauce Pasta",
      desc: "Penne pasta cooked in a custom blend of organic tomato concasse and creamy alfredo sauce, topped with mozzarella.",
      price: "₹340",
      calories: "480 kcal",
      category: "main-course",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&fit=crop",
    },
    {
      id: "main-3",
      name: "Alfredo Chicken Penne",
      desc: "Soft penne tossed with grilled chicken strips, seasoned mushrooms, in a rich, buttery garlic alfredo sauce.",
      price: "₹360",
      calories: "520 kcal",
      category: "main-course",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600&fit=crop",
    },
    {
      id: "main-4",
      name: "Peri Peri Fries",
      desc: "Double-fried crispy russet potatoes dusted with hot peri peri powder, served with rose garlic dip.",
      price: "₹170",
      calories: "220 kcal",
      category: "main-course",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&fit=crop",
    },
    // Desserts
    {
      id: "des-1",
      name: "Sundae In Clouds",
      desc: "Decadent strawberry-rose gelato nestled on a warm waffles waffle, encapsulated in a magical cloud of rose cotton candy.",
      price: "₹380",
      calories: "450 kcal",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&fit=crop",
      tag: "Signature",
    },
    {
      id: "des-2",
      name: "Brownie In Clouds",
      desc: "Rich fudge brownie on a sizzling hot skillet, vanilla bean quenelle, drizzled with rose-tinted warm white chocolate fudge.",
      price: "₹390",
      calories: "510 kcal",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&fit=crop",
    },
    {
      id: "des-3",
      name: "Macarons Boutique Set",
      desc: "A trio of gourmet Parisian macarons: rose water essence, pistachio dust, and signature golden salted caramel.",
      price: "₹290",
      calories: "210 kcal",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&fit=crop",
    },
    {
      id: "des-4",
      name: "Rose Lychee Pastry",
      desc: "Layers of light sponge cake infused with rose water syrup, containing lychee chunks, frosted with rose cream.",
      price: "₹310",
      calories: "290 kcal",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&fit=crop",
      tag: "Chef's Special",
    },
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const isCurrentlyLiked = likedIds.includes(id);
    if (isCurrentlyLiked) {
      setLikedIds(likedIds.filter((item) => item !== id));
    } else {
      setLikedIds([...likedIds, id]);
      // Small heart explosion
      confetti({
        particleCount: 12,
        spread: 45,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ["#F4C2C2", "#F7D6E0"],
      });
    }
  };

  const categories = [
    { key: "beverages", label: "Specialty Beverages" },
    { key: "main-course", label: "Main Course" },
    { key: "desserts", label: "Desserts & Pastries" },
  ] as const;

  return (
    <section
      id="menu"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal text-cream-white"
    >
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-blush/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Title */}
        <div className="flex flex-col items-center gap-3 text-center mb-16 max-w-2xl mx-auto">
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Signature Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
            Maison <span className="italic text-rose-blush font-light">De Rose</span> Menu
          </h2>
          <p className="text-cream-white/50 text-xs md:text-sm font-light mt-2 max-w-md">
            Handcrafted with love. Click the heart to favorite, and prepare to indulge in your pink Parisian dreams.
          </p>
        </div>

        {/* Tab Selector buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-gold-champagne border-gold-champagne text-charcoal shadow-lg shadow-gold-champagne/20"
                  : "bg-transparent border-cream-white/10 text-cream-white/60 hover:text-gold-champagne hover:border-gold-champagne/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Display Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative rounded-3xl overflow-hidden border border-cream-white/5 bg-charcoal-light/10 p-5 shadow-lg flex gap-5 hover:border-gold-champagne/30 hover:bg-charcoal-light/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="w-24 md:w-32 aspect-square rounded-2xl overflow-hidden relative shrink-0 shadow-md">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-108 transition-transform duration-[2000ms] ease-out"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {item.tag && (
                    <div className="absolute top-2 left-2 bg-gold-champagne text-charcoal font-semibold text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-2 h-2" />
                      <span>{item.tag}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-serif text-lg md:text-xl text-cream-white group-hover:text-gold-champagne transition-colors duration-300 leading-tight">
                        {item.name}
                      </h4>
                      
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleLike(e, item.id)}
                        className="p-1.5 bg-cream-white/5 hover:bg-cream-white/10 rounded-full transition-colors cursor-pointer text-cream-white"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-colors ${
                            likedIds.includes(item.id)
                              ? "fill-red-400 text-red-400"
                              : "text-cream-white/60"
                          }`}
                        />
                      </button>
                    </div>
                    
                    <p className="text-xs text-cream-white/50 leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  {/* Price & Calories Row */}
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-cream-white/5">
                    <span className="font-serif text-lg font-semibold text-gold-champagne">
                      {item.price}
                    </span>
                    <div className="flex items-center gap-1 text-[9px] text-cream-white/40 uppercase font-semibold">
                      <Flame className="w-3 h-3 text-rose-blush" />
                      <span>{item.calories}</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
