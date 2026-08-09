import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maison De Rose | Luxury Parisian Floral Cafe & Lounge",
  description: "Step into Maison De Rose — a premier Parisian floral sanctuary. Handcrafted coffees, artisanal desserts, gourmet cuisine, and bespoke celebration experiences.",
  keywords: [
    "Maison De Rose",
    "Luxury Cafe",
    "Parisian Floral Cafe",
    "Romantic Dining",
    "Aesthetic Cafe",
    "Celebration Packages",
    "Gourmet Coffee",
    "Floral Bistro"
  ],
  authors: [{ name: "Avdhesh Dadhich", url: "https://github.com/itzzavdheshh" }],
  creator: "Avdhesh Dadhich",
  openGraph: {
    title: "Maison De Rose | Luxury Parisian Floral Cafe & Lounge",
    description: "Experience the epitome of Parisian elegance. Exquisite floral dining, artisanal beverages, and custom celebration setups.",
    url: "https://maison-de-rose.vercel.app",
    siteName: "Maison De Rose",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Maison De Rose - Parisian Luxury Floral Interiors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison De Rose | Luxury Parisian Floral Cafe",
    description: "Handcrafted coffee, aesthetic desserts, and romantic dining atmospheres.",
    images: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Schema Markup (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Maison De Rose",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    "@id": "https://maison-de-rose.vercel.app/#restaurant",
    "url": "https://maison-de-rose.vercel.app",
    "telephone": "+917690863039",
    "email": "aavdhesh.dadhich@gmail.com",
    "priceRange": "$$$",
    "menu": "https://maison-de-rose.vercel.app#menu",
    "servesCuisine": "French, Italian, Gourmet Desserts, Artisanal Coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 Avenue des Roses, Central Promenade",
      "addressLocality": "Downtown",
      "addressRegion": "Metropolis",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "23:30"
      }
    ],
    "sameAs": [
      "https://github.com/itzzavdheshh",
      "https://www.linkedin.com/in/aavdhesh"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-[#FFF8F5] text-[#1F1F1F] antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
