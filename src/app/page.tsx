// ============================================
// AD Atlas Beauty — Core Homepage
// ============================================

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Play, Film, User, HeartHandshake } from "lucide-react";
import { products, reviews, instagramPosts } from "@/data";
import { COMING_SOON_PRODUCTS } from "@/constants";
import { Product } from "@/types";
import { ProductCard } from "@/components/common/ProductCard";
import { ComingSoonCard } from "@/components/common/ComingSoonCard";
import { TrustBadge } from "@/components/common/TrustBadge";
import { ReviewCard } from "@/components/common/ReviewCard";
import { NewsletterCard } from "@/components/common/NewsletterCard";
import { QuickViewModal } from "@/components/common/QuickViewModal";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { SectionContainer } from "@/components/common/SectionContainer";
import { LuxuryButton } from "@/components/common/LuxuryButton";
import { MagneticButton } from "@/components/common/MagneticButton";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [videoTab, setVideoTab] = useState<"story" | "demo" | "testimonials" | "launch">("story");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Active products to display (Matte Lipstick & Liquid Lipstick)
  const activeProducts = products.filter((p) => p.status === "active");

  const videoData = {
    story: {
      title: "The AD Atlas Philosophy",
      subtitle: "Where luxury aesthetics meet state-of-the-art dermatological research.",
      embed: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/images/brand-editorial.png",
    },
    demo: {
      title: "Velvet Matte Application Guide",
      subtitle: "How to achieve the perfect 12-hour high-pigment finish.",
      embed: "https://www.w3schools.com/html/movie.mp4",
      poster: "/images/matte-lipstick.png",
    },
    testimonials: {
      title: "What the Experts Say",
      subtitle: "Leading dermatologists and makeup artists share their honest reviews.",
      embed: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/images/collaboration.png",
    },
    launch: {
      title: "The Luxury Launch Campaign",
      subtitle: "Presenting the signature collection for modern elegance.",
      embed: "https://www.w3schools.com/html/movie.mp4",
      poster: "/images/hero-campaign.png",
    },
  };

  const handleOpenVideo = (key: "story" | "demo" | "testimonials" | "launch") => {
    setPlayingVideo(videoData[key].embed);
  };

  return (
    <>
      {/* 2. Premium Hero Section */}
      <section className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center bg-brand-primary">
        {/* Parallax background banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-campaign.png"
            alt="AD Atlas Luxury Beauty Campaign"
            fill
            priority
            className="object-cover object-center scale-102"
          />
          {/* Rich Dark overlays for editorial text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color" />
        </div>

        {/* Campaign copy */}
        <div className="container relative z-10 px-6 md:px-12 flex flex-col items-start text-white max-w-7xl mx-auto">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-accent mb-6 animate-pulse">
            AD Atlas Ventures Presents
          </span>
          
          <AnimatedHeading
            text="Luxury Meets Science"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-9xl font-heading text-white max-w-4xl leading-[1.05] mb-8 font-bold"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-xs md:text-base text-neutral-200/90 font-light font-subheading max-w-xl leading-relaxed tracking-wider mb-10 md:mb-12 uppercase"
          >
            Premium beauty products crafted with science-backed formulations designed for modern beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <MagneticButton>
              <LuxuryButton href="/shop" variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Shop Collection
              </LuxuryButton>
            </MagneticButton>

            <LuxuryButton href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" size="lg">
              Explore Brand
            </LuxuryButton>
          </motion.div>
        </div>

        {/* Elegant scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[9px] tracking-[0.3em] uppercase select-none">
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-brand-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* 3. Featured Collection Section */}
      <SectionContainer className="bg-brand-bg">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-3 block">
                Luxury Cosmetics
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-brand-primary font-bold">
                Featured Collection
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-brand-primary uppercase tracking-[0.2em] text-[10px] font-bold hover:text-brand-secondary transition-colors pb-1.5 border-b border-brand-primary/30"
            >
              View Full Store
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12 max-w-4xl mx-auto">
            {activeProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 4. Best Sellers Section */}
      <SectionContainer className="bg-brand-light">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-3 block">
              Customer Favorites
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-brand-primary font-bold">
              Best Sellers
            </h2>
          </div>

          {/* Luxury Carousel container */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 max-w-4xl mx-auto">
            {activeProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 shadow-sm border border-brand-primary/5 hover:shadow-md transition-shadow">
                <ProductCard
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 5. Trust Badges Section */}
      <SectionContainer className="bg-brand-primary text-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
              Our Safety Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-[#faf7f2] font-semibold">
              The AD Atlas Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <TrustBadge icon="leaf" title="Cruelty Free" description="No animal testing, ever" className="text-white" />
            <TrustBadge icon="shield-check" title="Dermatologically Tested" description="Clinically proven safe" className="text-white" />
            <TrustBadge icon="flag" title="Made In India" description="Proudly crafted locally" className="text-white" />
            <TrustBadge icon="flask-conical" title="Science Backed" description="Research-driven formulas" className="text-white" />
            <TrustBadge icon="gem" title="Premium Ingredients" description="Finest skincare extracts" className="text-white" />
            <TrustBadge icon="heart-handshake" title="Safe & Effective" description="Gentle on all skin types" className="text-white" />
          </div>
        </div>
      </SectionContainer>

      {/* 6. Brand Story Section */}
      <SectionContainer className="bg-brand-bg py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image left panel */}
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl border border-brand-primary/5">
              <Image
                src="/images/brand-editorial.png"
                alt="Luxury Cosmetics Story Formulation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
            </div>

            {/* Content right panel */}
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-6 block">
                The Science of Radiance
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-brand-primary mb-8 font-black leading-[1.1]">
                Where Opulence Meets Scientific Precision
              </h2>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed tracking-wide mb-6">
                At AD Atlas Beauty, we refuse to compromise between high luxury aesthetic and absolute clinical purity. 
                Our research laboratories source premium botanical ingredients and combine them with dermatologically-proven 
                compounds to deliver makeup that nourishes and shields skin health.
              </p>
              <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed tracking-wide mb-10">
                Each product undergoes rigorous safety trials, matching international premium cosmetic quality guidelines,
                ensuring beautiful finishes that remain vibrant for hours.
              </p>
              
              <Link href="/about">
                <LuxuryButton variant="primary">Read Our Story</LuxuryButton>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 7. Video Showcase Section */}
      <SectionContainer className="bg-brand-light">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-3 block">
              Cinematic Brand Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-brand-primary font-bold">
              Video Showcase
            </h2>
          </div>

          {/* Navigation tabs — scrollable on mobile */}
          <div className="flex overflow-x-auto scrollbar-none gap-4 md:gap-8 mb-10 md:mb-12 border-b border-brand-primary/10">
            {(["story", "demo", "testimonials", "launch"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setVideoTab(tab);
                  setPlayingVideo(null);
                }}
                className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] pb-3 transition-colors relative cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  videoTab === tab ? "text-brand-primary font-black" : "text-neutral-400 hover:text-brand-primary"
                }`}
              >
                {tab === "story"
                  ? "Brand Story"
                  : tab === "demo"
                  ? "Product Demo"
                  : tab === "testimonials"
                  ? "Testimonials"
                  : "Launch Film"}
                {videoTab === tab && (
                  <motion.div
                    layoutId="activeVideoTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Showcase Cinema Screen */}
          <div className="relative aspect-video max-w-4xl mx-auto bg-black overflow-hidden shadow-2xl">
            {playingVideo ? (
              <video
                src={playingVideo}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Image
                  src={videoData[videoTab].poster}
                  alt={videoData[videoTab].title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => handleOpenVideo(videoTab)}
                    className="w-20 h-20 bg-white hover:bg-brand-accent hover:text-white text-brand-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                  <h3 className="text-white font-heading text-2xl md:text-3xl mt-6 mb-2">
                    {videoData[videoTab].title}
                  </h3>
                  <p className="text-neutral-300 text-xs md:text-sm max-w-md font-sans">
                    {videoData[videoTab].subtitle}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* 8. Customer Reviews Section */}
      <SectionContainer className="bg-brand-bg">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-3 block">
                Verified Customer Feedback
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-brand-primary font-bold">
                Customer Reviews
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-brand-primary uppercase tracking-[0.2em] text-[10px] font-bold hover:text-brand-secondary transition-colors pb-1.5 border-b border-brand-primary/30"
            >
              See All Reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 9. Collaborations CTA Section */}
      <SectionContainer className="py-0">
        <div className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden flex items-center bg-[#1c1c1c] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/collaboration.png"
              alt="AD Atlas Beauty Collaborations Campaign"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 to-transparent" />
          </div>

          <div className="container relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block animate-pulse">
                Creators & Ambassadors
              </span>
              <h2 className="text-3xl md:text-5xl font-heading text-white mb-6 font-bold leading-tight">
                Partner With Us
              </h2>
              <p className="text-xs md:text-sm text-neutral-300 font-sans tracking-wide leading-relaxed mb-10 max-w-md">
                Are you an influencer, makeup artist, or creator? Join our elite inner circle 
                to receive early products, formulate trends, and represent AD Atlas Beauty.
              </p>
              <Link href="/collaborations">
                <LuxuryButton variant="accent" size="md">
                  Collaborate With Us
                </LuxuryButton>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 10. Instagram Feed Section */}
      <SectionContainer className="bg-brand-light">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-3 block">
              Share Your Look @adatlasbeauty
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-brand-primary font-bold">
              Instagram Feed
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-brand-primary border border-brand-primary/5 block"
              >
                <Image
                  src={post.image}
                  alt="AD Atlas Instagram Post"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest gap-2">
                  <Heart className="w-4 h-4 fill-current text-brand-accent" />
                  {post.likes}
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 11. Coming Soon Collection Section */}
      <SectionContainer className="bg-brand-bg">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
              Future Launches
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-brand-primary font-bold">
              Coming Soon Collection
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {COMING_SOON_PRODUCTS.map((product) => (
              <ComingSoonCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 12. Newsletter Section */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-24 bg-brand-bg">
        <NewsletterCard />
      </div>

      {/* Quick View Drawer Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
