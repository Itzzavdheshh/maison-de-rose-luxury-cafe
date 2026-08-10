"use client";

import { MapPin, Phone, Clock, Sparkles } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="relative py-24 md:py-32 overflow-hidden bg-cream-white text-charcoal"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-soft/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-champagne/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Map Details & Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-gold-champagne uppercase tracking-[0.35em] text-xs font-semibold">
                  Visit Us
                </span>
                <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
                  Locate Our <span className="italic text-gold-champagne font-light">Paradise</span>
                </h2>
              </div>
              
              <p className="text-charcoal/70 font-light leading-relaxed text-sm md:text-base">
                Step into our premier rose retreat. Located conveniently in the heart of the city promenade, our bistro offers an unforgettable panoramic ambiance, floral walls, and a luxurious getaway.
              </p>
            </div>

            {/* Location Cards List */}
            <div className="space-y-6">
              {/* Card 1: Map Pin */}
              <div className="flex gap-4 items-start p-6 bg-rose-soft/20 border border-rose-blush/25 rounded-3xl backdrop-blur-md">
                <div className="p-3 bg-gold-champagne/10 text-gold-champagne rounded-xl border border-gold-champagne/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-sm">Our Address</h4>
                  <p className="text-xs text-charcoal/65 mt-1 leading-normal">
                    42 Avenue des Roses, Central Promenade,<br />
                    Downtown Fashion District
                  </p>
                </div>
              </div>

              {/* Card 2: Contact Phone */}
              <div className="flex gap-4 items-start p-6 bg-rose-soft/20 border border-rose-blush/25 rounded-3xl backdrop-blur-md">
                <div className="p-3 bg-gold-champagne/10 text-gold-champagne rounded-xl border border-gold-champagne/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-sm">Direct Phone</h4>
                  <p className="text-xs text-charcoal/65 mt-1 leading-normal">
                    +91 76908 63039
                  </p>
                  <button
                    onClick={() => window.open("tel:+917690863039")}
                    className="text-[10px] font-bold text-gold-champagne tracking-wider uppercase mt-2 hover:underline cursor-pointer"
                  >
                    Call Now
                  </button>
                </div>
              </div>

              {/* Card 3: Hours */}
              <div className="flex gap-4 items-start p-6 bg-rose-soft/20 border border-rose-blush/25 rounded-3xl backdrop-blur-md">
                <div className="p-3 bg-gold-champagne/10 text-gold-champagne rounded-xl border border-gold-champagne/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-sm">Operating Hours</h4>
                  <p className="text-xs text-charcoal/65 mt-1 leading-normal">
                    11:00 AM – 11:30 PM Daily
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Map Embed Frame */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-0 rounded-[40px] overflow-hidden border-4 border-rose-blush/20 shadow-2xl">
            {/* Dark overlay mask in Gold tint (simulated by iframe background/border styling or absolute overlay mix-blend) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1680000000000!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.98] sepia-[0.1]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
