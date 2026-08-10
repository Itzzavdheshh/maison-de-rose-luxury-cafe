"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const testimonialsRow1: Testimonial[] = [
    {
      id: 1,
      name: "Sophia Laurent",
      location: "Downtown District",
      text: "The most captivating floral bistro I have ever visited! The rose arches, vintage decor, and warm ambient lighting make it a dream. The Rose Gold Cappuccino was pure perfection!",
      rating: 5,
    },
    {
      id: 2,
      name: "Alexander & Clara",
      location: "West End",
      text: "Booked their Luxury Anniversary Package and my partner was completely blown away. The private violinist and floral dome setup were absolutely magical. 10/10!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Watson",
      location: "Metropolis Central",
      text: "Exceptional service and mouthwatering desserts. The Sundae in Clouds is a true masterpiece and tastes even better than it looks. Highly recommend!",
      rating: 5,
    },
  ];

  const testimonialsRow2: Testimonial[] = [
    {
      id: 4,
      name: "Julian Sterling",
      location: "North Quarter",
      text: "The architectural attention to detail in the rose walls is breathtaking. Perfect ambiance for an unforgettable date night. The Pink Sauce Pasta was exceptionally creamy and fresh.",
      rating: 5,
    },
    {
      id: 5,
      name: "Elena & Marcus",
      location: "Riverside",
      text: "If you want timeless memories, this is the destination. We hosted our celebration here and the concierge team managed every tiny detail flawlessly.",
      rating: 5,
    },
    {
      id: 6,
      name: "Chloe Bennett",
      location: "South Bay",
      text: "Every single corner of Maison De Rose is picture-perfect. The handcrafted pastries and signature drinks make for an exquisite Parisian escape.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden bg-cream-white text-charcoal"
    >
      {/* Self-contained Infinite Marquee styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-rose-soft/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 w-full">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 px-6 flex flex-col items-center gap-3">
          <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
            Guest Experiences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal leading-tight">
            Loved By <span className="italic text-gold-champagne font-light">Thousands</span>
          </h2>
          
          <div className="flex items-center gap-4 mt-4 bg-rose-soft/30 px-5 py-2.5 rounded-full border border-rose-blush/25 shadow-sm">
            <span className="font-serif text-2xl font-bold text-charcoal leading-none">4.6 ★</span>
            <div className="w-[1px] h-5 bg-rose-blush/40" />
            <span className="text-xs uppercase tracking-wider font-semibold text-charcoal/70">3,900+ Happy Reviews</span>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="marquee-container space-y-8 overflow-hidden select-none cursor-grab active:cursor-grabbing">
          
          {/* Row 1: Leftward */}
          <div className="flex w-[200%] gap-6 overflow-hidden">
            <div className="flex gap-6 animate-marquee-left w-max">
              {[...testimonialsRow1, ...testimonialsRow1].map((test, idx) => (
                <div
                  key={idx}
                  className="w-[300px] md:w-[400px] glass-panel p-8 rounded-3xl border border-rose-blush/25 flex flex-col justify-between shadow-lg shrink-0 gap-6 backdrop-blur-md"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start text-gold-champagne">
                      <div className="flex gap-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-gold-champagne" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-rose-blush/25 fill-current rotate-180" />
                    </div>

                    <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-light italic">
                      "{test.text}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-0.5 border-t border-rose-blush/10 pt-4">
                    <span className="font-serif font-bold text-sm text-charcoal">{test.name}</span>
                    <span className="text-[10px] text-charcoal/45 uppercase tracking-wider font-medium">{test.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward */}
          <div className="flex w-[200%] gap-6 overflow-hidden">
            <div className="flex gap-6 animate-marquee-right w-max">
              {[...testimonialsRow2, ...testimonialsRow2].map((test, idx) => (
                <div
                  key={idx}
                  className="w-[300px] md:w-[400px] glass-panel p-8 rounded-3xl border border-rose-blush/25 flex flex-col justify-between shadow-lg shrink-0 gap-6 backdrop-blur-md"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start text-gold-champagne">
                      <div className="flex gap-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-gold-champagne" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-rose-blush/25 fill-current rotate-180" />
                    </div>

                    <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-light italic">
                      "{test.text}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-0.5 border-t border-rose-blush/10 pt-4">
                    <span className="font-serif font-bold text-sm text-charcoal">{test.name}</span>
                    <span className="text-[10px] text-charcoal/45 uppercase tracking-wider font-medium">{test.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
