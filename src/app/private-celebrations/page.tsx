import type { Metadata } from "next";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "Maison De Rose | Private Celebrations, Birthdays & Events",
  description: "Celebrate milestones, birthdays, and baby showers at Maison De Rose. Custom floral decors, artisan multi-tier cakes, and dedicated concierge service.",
  keywords: ["Private Celebrations", "Luxury Birthday Party", "Baby Shower Venue", "Floral Stage Decor", "Private Dining"],
};

export default function PrivateCelebrations() {
  const highlights = [
    {
      title: "Bespoke Floral Arches",
      desc: "Stunning handcrafted flower arches and neon light displays customized to your event theme.",
    },
    {
      title: "Gourmet Multi-Tier Cakes",
      desc: "Custom-crafted signature cakes made by our pastry chefs, styled to match your aesthetic.",
    },
    {
      title: "Dedicated Event Concierge",
      desc: "A dedicated host and server team ensuring seamless hospitality throughout your special occasion.",
    },
    {
      title: "Live Music & Photography",
      desc: "Professional portrait photographers and live acoustic musicians to capture every milestone moment.",
    },
  ];

  const faq = [
    {
      q: "How do I configure and reserve a private celebration?",
      a: "You can book using our online Celebration Configurator. Choose your event type, select your package tier (Classic, Premium, or Luxe Elite), and submit to receive instant WhatsApp confirmation.",
    },
    {
      q: "Can we bring our own celebration cake or outside decor?",
      a: "All our celebration packages come with premium custom designer cakes and complete themed floral decors. Special requests can be tailored during your booking consultation.",
    },
    {
      q: "What is the maximum group size for private events?",
      a: "We accommodate intimate dinners of 2 up to exclusive boutique lounge takeovers for larger celebrations. Reach out via our reservation form for group arrangements.",
    },
  ];

  return (
    <SEOContent
      keyword="Private Celebrations & Birthdays"
      title="Unforgettable Milestone Celebrations"
      subtitle="Bespoke floral arches, designer cakes, and immersive themes crafted to turn special moments into lifelong memories."
      description="Make your milestone extraordinary at Maison De Rose. Whether celebrating a landmark birthday, hosting an intimate baby shower, or gathering loved ones for an anniversary, our team curates picture-perfect decor, gourmet catering, and seamless hospitality."
      focusImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&fit=crop"
      highlights={highlights}
      faq={faq}
    />
  );
}
