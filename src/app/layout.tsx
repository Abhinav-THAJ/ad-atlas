// ============================================
// AD Atlas Beauty — Root Layout
// ============================================

import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { OfferBar } from "@/components/common/OfferBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AD Atlas Beauty | Luxury. Science. You.",
  description:
    "Explore science-backed luxury cosmetics crafted with premium clinical formulations for Indian beauty.",
  keywords: "luxury cosmetics, premium lipstick, science backed skincare, Indian beauty brand, AD Atlas",
  openGraph: {
    title: "AD Atlas Beauty",
    description: "Premium luxury beauty and science-backed cosmetics.",
    url: "https://adatlasventures.com",
    siteName: "AD Atlas",
    images: [
      {
        url: "/images/hero-campaign.png",
        width: 1200,
        height: 630,
        alt: "AD Atlas Beauty Campaign",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${jakarta.variable} antialiasedScroll`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-brand-bg text-[#1c1c1c]">
        {/* Luxury preloader screen */}
        <LoadingScreen />

        {/* Global Toaster for notifications */}
        <Toaster position="bottom-right" reverseOrder={false} />

        {/* Multi-Offer Top Bar */}
        <OfferBar />

        {/* Main Brand Header Navigation */}
        <Header />

        {/* Page Content area */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Complete Corporate Footer */}
        <Footer />
      </body>
    </html>
  );
}
