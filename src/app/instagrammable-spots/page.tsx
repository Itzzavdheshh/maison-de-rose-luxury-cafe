import type { Metadata } from "next";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "Maison De Rose | Picture-Perfect Aesthetic Spots & Photo Backdrops",
  description: "Discover Maison De Rose's world of visual storytelling. Vintage telephone booths, floral swings, neon installations, and Instagrammable dining.",
  keywords: ["Aesthetic Cafe", "Instagram Worthy Spots", "Floral Swings", "Pink Phone Booth", "Photo Ready Dining"],
};

export default function InstagrammableSpots() {
  const highlights = [
    {
      title: "Parisian Phone Booth",
      desc: "Our iconic custom pink telephone booth overflowing with premium silk roses is our signature photoshoot centerpiece.",
    },
    {
      title: "Floral Swing Corners",
      desc: "Elegant velvet swing chairs framed with blooming rose arches, ideal for portrait photography and reels.",
    },
    {
      title: "Neon Accent Walls",
      desc: "Warm glowing neon scripts paired with dense botanical walls providing the perfect photo backdrop.",
    },
    {
      title: "Gastronomy in Clouds",
      desc: "Signature dishes like 'Sundae in Clouds' encased in cotton candy clouds that look just as spectacular as they taste.",
    },
  ];

  const faq = [
    {
      q: "Are professional photo shoots allowed inside the cafe?",
      a: "Yes! Casual photography is always welcomed. For commercial or portrait shoots with specialized lighting, we offer private hours through our celebration packages.",
    },
    {
      q: "Which time of day offers the best natural lighting for photos?",
      a: "Our daylight hours between 12:00 PM and 4:30 PM provide soft, natural ambient lighting, while evenings feature warm golden glows and candlelight ambiance.",
    },
    {
      q: "How can I get featured on your community Instagram Wall?",
      a: "Simply tag your posts or reels with #MaisonDeRose to get featured on our live community gallery.",
    },
  ];

  return (
    <SEOContent
      keyword="Visual Storytelling"
      title="Picture-Perfect Aesthetic Moments"
      subtitle="Step into a botanical wonderland engineered for unforgettable visual memories and cinematic photography."
      description="Maison De Rose was conceived as a visual sanctuary. Featuring custom vintage phone booths, floral swings, aesthetic lighting, and camera-ready artisanal desserts, every corner provides a stunning backdrop for your stories and memories."
      focusImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&fit=crop"
      highlights={highlights}
      faq={faq}
    />
  );
}
