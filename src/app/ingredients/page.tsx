// ============================================
// AD Atlas Beauty — Ingredients Page
// ============================================

"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { FlaskConical, Award, ShieldCheck, Heart, Sparkles, Dna } from "lucide-react";

export default function IngredientsPage() {
  const activeIngredients = [
    {
      name: "Hyaluronic Acid",
      description: "Locks in deep moisture, keeping lips hydrated and plump beneath high-coverage pigments.",
      source: "Scientific Bio-fermentation",
    },
    {
      name: "Vitamin E & C",
      description: "Powerful skin antioxidants that shield skin cells from environmental pollutants and discoloration.",
      source: "Organic Botanical Extracts",
    },
    {
      name: "Jojoba & Argan Oils",
      description: "Nourishing lipid barriers that soften rough patches, ensuring lipstick applies with pure silkiness.",
      source: "Cold-Pressed Seeds",
    },
    {
      name: "Rose Hip Oil",
      description: "Regenerative fatty acids that soothe lips and target fine lines for a smoother texture.",
      source: "Premium Rose Botanical",
    },
    {
      name: "Kaolin Clay",
      description: "Natural mineral matte agent that ensures transfer-proof wear without sapping vital moisture.",
      source: "Pure Earth Minerals",
    },
    {
      name: "Botanical Plant Waxes",
      description: "Vegan bonding structures that keep formulas firm and pigment payout rich and uniform.",
      source: "Natural Candelilla",
    },
  ];

  return (
    <>
      {/* Editorial Header */}
      <SectionContainer className="bg-brand-bg pt-32 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block">
            Pure Science. Pure Luxury.
          </span>
          <AnimatedHeading
            text="Ingredients & Our Promise"
            tag="h1"
            className="text-4xl md:text-6xl font-heading text-brand-primary mb-6 font-bold leading-tight"
          />
          <p className="text-xs md:text-sm font-sans tracking-widest text-neutral-500 uppercase leading-loose max-w-xl mx-auto">
            Explore the clinical compounds and natural botanicals that form our signature clean formulas.
          </p>
        </div>
      </SectionContainer>

      {/* Hero Banner Grid */}
      <SectionContainer className="bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
                The Science-Backed Formula
              </span>
              <h2 className="text-3xl md:text-5xl font-heading text-brand-primary mb-6 font-bold leading-tight">
                Our Clean Slate Policy
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed mb-6 uppercase tracking-wider">
                We believe what you put on your body is as crucial as what you put inside. 
                AD Atlas has a strict ban list of over 1,500 ingredients, including parabens, 
                sulfates, phthalates, synthetic fragrances, and heavy metals.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed mb-8 uppercase tracking-wider">
                Instead, our lab fuses clinical science with clean beauty, sourcing active botanicals 
                that provide real skin hydration, repair, and long-lasting pigmentation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex gap-3 items-center">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">Paraben Free</span>
                </div>
                <div className="flex gap-3 items-center">
                  <FlaskConical className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">Sulfate Free</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Heart className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">100% Vegan</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Dna className="w-5 h-5 text-brand-accent" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">Non-Comedogenic</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl border border-brand-primary/5">
              <Image
                src="/images/ingredients.png"
                alt="Hyaluronic acid ingredients layout flatlay"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Active Ingredients list */}
      <SectionContainer className="bg-brand-light">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-3 block">
              Core Actives
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-brand-primary font-bold">
              Signature Ingredients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeIngredients.map((ing, i) => (
              <div key={i} className="bg-white p-8 border border-brand-primary/5 hover:shadow-lg transition-all duration-500">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 block">
                  {ing.source}
                </span>
                <h3 className="font-heading text-xl text-brand-primary mb-3 font-semibold">
                  {ing.name}
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
                  {ing.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
