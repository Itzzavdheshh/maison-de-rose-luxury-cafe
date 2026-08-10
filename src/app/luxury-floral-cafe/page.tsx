import type { Metadata } from "next";
import SEOContent from "@/components/SEOContent";

export const metadata: Metadata = {
  title: "Maison De Rose | Luxury Floral Cafe & Parisian Bistro",
  description: "Experience Maison De Rose — a premier pink Parisian floral cafe. Exquisite interiors lined with thousands of roses, signature coffees, and French pastries.",
  keywords: ["Luxury Floral Cafe", "Parisian Bistro", "Gourmet Coffee", "Rose Cafe", "Boutique Desserts"],
};

export default function LuxuryFloralCafe() {
  const highlights = [
    {
      title: "10,000+ Hand-Curated Silk Roses",
      desc: "An architectural marvel adorned with thousands of silk roses lining every wall, arch, and ceiling alcove.",
    },
    {
      title: "Signature Rose Gold Cappuccino",
      desc: "Brewed with single-origin espresso, rose water essence, velvet microfoam, and real edible 24k gold leaf flakes.",
    },
    {
      title: "French Pastry Boutique",
      desc: "Delicate artisanal macarons, warm Belgian waffles, and fresh Parisian pastries crafted daily by our pastry chefs.",
    },
    {
      title: "Interactive Celebration Suite",
      desc: "Plan bespoke celebrations with live package previews, instant cost estimates, and VIP reservation confirmations.",
    },
  ];

  const faq = [
    {
      q: "What makes Maison De Rose unique?",
      a: "Maison De Rose blends high-concept Parisian floral aesthetics with world-class gastronomy, offering a multi-sensory dining experience complete with live music, custom celebration planning, and handcrafted signature desserts.",
    },
    {
      q: "Do you cater to dietary requirements or vegetarian preferences?",
      a: "Yes! Our menu features a rich selection of vegetarian, vegan, and gluten-free choices across our coffee, mocktail, pasta, and dessert selections.",
    },
    {
      q: "How can I reserve a table?",
      a: "You can book directly using our online reservation form or through our instant WhatsApp booking feature.",
    },
  ];

  return (
    <SEOContent
      keyword="Parisian Floral Bistro"
      title="The Epitome of Floral Elegance"
      subtitle="Step into a world of timeless Parisian charm, handcrafted gourmet coffee, and bespoke dining memories."
      description="Maison De Rose is a premier floral dining destination. Combining a romantic French aesthetic with contemporary culinary excellence, our sanctuary provides the ultimate setting for weekend brunches, evening dates, and unforgettable celebrations."
      focusImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&fit=crop"
      highlights={highlights}
      faq={faq}
    />
  );
}
