"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Instagram, Play } from "lucide-react";

interface InstaPost {
  id: number;
  url: string;
  likes: string;
  comments: string;
  type: "post" | "reel";
}

export default function InstagramWall() {
  const posts: InstaPost[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&fit=crop",
      likes: "2.1k",
      comments: "112",
      type: "reel",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=600&fit=crop",
      likes: "1.8k",
      comments: "95",
      type: "post",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&fit=crop",
      likes: "3.4k",
      comments: "210",
      type: "reel",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&fit=crop",
      likes: "1.5k",
      comments: "64",
      type: "post",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1522336572468-97b06eca219b?q=80&w=600&fit=crop",
      likes: "2.9k",
      comments: "185",
      type: "reel",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&fit=crop",
      likes: "1.2k",
      comments: "42",
      type: "post",
    },
  ];

  return (
    <section
      id="instagram"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal text-cream-white"
    >
      {/* Background radial soft pink */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-rose-soft/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-instagram/10 flex items-center justify-center text-rose-blush border border-rose-blush/20 mb-2">
            <Instagram className="w-6 h-6 text-gold-champagne" />
          </div>
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Social Moments
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
            #Maison<span className="italic text-rose-blush font-light font-serif">DeRose</span>
          </h2>
          <p className="text-cream-white/50 text-xs md:text-sm font-light mt-2 max-w-sm">
            Tag us in your stories and reels to get featured on our live community gallery.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-3xl overflow-hidden border border-cream-white/10 shadow-lg cursor-pointer"
            >
              {/* Image Cover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${post.url})` }}
              />

              {/* Reel Indicator overlay */}
              {post.type === "reel" && (
                <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-md p-2 rounded-full border border-gold-champagne/30 text-gold-champagne z-10 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              )}

              {/* Instagram Hover Card overlay */}
              <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 z-20">
                <Instagram className="w-7 h-7 text-gold-champagne mb-1" />
                
                <div className="flex gap-6 text-cream-white font-medium">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 text-rose-blush fill-current" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 text-gold-champagne fill-current" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>

                <span className="text-[10px] text-gold-champagne uppercase font-bold tracking-widest mt-2 bg-gold-champagne/10 px-3 py-1 rounded">
                  {post.type === "reel" ? "View Reel" : "View Post"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to follow on Instagram */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={() => window.open("https://github.com/itzzavdheshh", "_blank")}
            className="px-8 py-4 bg-transparent border border-rose-blush/30 hover:border-gold-champagne text-rose-blush hover:text-gold-champagne font-medium rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer inline-flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-gold-champagne" />
            <span>Follow @maisonderose_luxe</span>
          </button>
        </div>

      </div>
    </section>
  );
}
