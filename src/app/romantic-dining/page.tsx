import type { Metadata } from "next";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "Maison De Rose | Romantic Candlelight Dining & Proposals",
  description: "Plan the quintessential romantic date or marriage proposal at Maison De Rose. Candlelight dinners, private violinists, and rose cabanas.",
  keywords: ["Romantic Dining", "Candlelight Dinner", "Proposal Setup", "Luxury Date Night", "Floral Cabana"],
};

export default function RomanticDining() {
  const highlights = [
    {
      title: "Candlelit Glass Pathways",
      desc: "Walk along pathways lined with hundreds of flickering LED glass pillar candles and fresh red rose petals.",
    },
    {
      title: "Fairy-Light Cabana Domes",
      desc: "Dine inside our exclusive private cabanas illuminated by thousands of twinkling micro fairy lights.",
    },
    {
      title: "Violinist Serenades",
      desc: "Enjoy private table violin serenades playing timeless ballads during your gourmet dinner.",
    },
    {
      title: "Curated Couple Tasting Menus",
      desc: "Indulge in a 3-course or 5-course chef-tasting menu paired with signature botanical rose beverages.",
    },
  ];

  const faq = [
    {
      q: "Do you offer custom setups for surprise proposals?",
      a: "Yes, we specialize in luxury surprise marriage proposals. Our Luxe Elite package includes marquee 'MARRY ME' giant letters, red carpet paths, violinists, and a dedicated host team.",
    },
    {
      q: "Are the private cabanas available for walk-in guests?",
      a: "Private cabanas require advance reservation due to custom setup requirements and high demand. We recommend reserving at least 48 hours in advance using our Celebration Configurator.",
    },
    {
      q: "Can I customize the menu for our anniversary dinner?",
      a: "Yes! Once you book your package, our culinary team will connect with you to review preferences, customize dishes, and prepare personalized menu cards.",
    },
  ];

  return (
    <SEOContent
      keyword="Romantic Floral Dining"
      title="Intimate Dining & Candlelit Moments"
      subtitle="Flickering candles, private violinists, and bespoke dining setups designed to celebrate your love story."
      description="Plan your next romantic date at Maison De Rose. The ultimate destination for anniversaries, date nights, and fairytale marriage proposals. Indulge in private cabanas, floral pathways, and live acoustic music for a truly magical evening."
      focusImage="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&fit=crop"
      highlights={highlights}
      faq={faq}
    />
  );
}
