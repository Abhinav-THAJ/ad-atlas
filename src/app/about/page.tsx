// ============================================
// AD Atlas Beauty — About Page
// ============================================

"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Award, Leaf, ShieldAlert, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Editorial Header */}
      <SectionContainer className="bg-brand-bg pt-32 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block">
            Our Purpose & Vision
          </span>
          <AnimatedHeading
            text="Where Opulence Meets Scientific Precision"
            tag="h1"
            className="text-4xl md:text-6xl font-heading text-brand-primary mb-6 font-bold leading-tight"
          />
          <p className="text-xs md:text-sm font-sans tracking-widest text-neutral-500 uppercase leading-loose">
            AD Atlas Ventures Private Limited — Redefining Indian Luxury Beauty.
          </p>
        </div>
      </SectionContainer>

      {/* Philosophy Editorial Split Section */}
      <SectionContainer className="bg-brand-light">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl border border-brand-primary/5">
              <Image
                src="/images/brand-editorial.png"
                alt="Formulation science laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
                The Heritage
              </span>
              <h2 className="text-3xl md:text-5xl font-heading text-brand-primary mb-6 font-bold leading-tight">
                Our Editorial Approach to Cosmetics
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed mb-6 uppercase tracking-wider">
                We believe that true beauty shouldn&apos;t compromise on clean ingredients or high-performance pigments. 
                Our research team collaborates with leading global labs to combine pure botanicals with clinical actives.
              </p>
              <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed mb-8 uppercase tracking-wider">
                Every shade is formulated specifically to suit Indian skin tones, providing transfer-proof, hydrating, 
                and weightless wears that elevate self-confidence from daily routines to runway profiles.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Core values block */}
      <SectionContainer className="bg-brand-primary text-white text-center py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading text-[#faf7f2] font-semibold mb-16">
            Our Brand Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="font-heading text-xl mb-2">Uncompromised Luxury</h3>
              <p className="text-[11px] text-neutral-300 max-w-[200px]">Premium packaging, rich textures, and elegant finishes.</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="font-heading text-xl mb-2">Science Driven</h3>
              <p className="text-[11px] text-neutral-300 max-w-[200px]">Clinically validated actives that protect and treat skin cells.</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="font-heading text-xl mb-2">Cruelty Free</h3>
              <p className="text-[11px] text-neutral-300 max-w-[200px]">Strictly vegan and cruelty-free sourcing methods.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldAlert className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="font-heading text-xl mb-2">Dermatologically Safe</h3>
              <p className="text-[11px] text-neutral-300 max-w-[200px]">Every formula undergoes intensive allergy patch-tests.</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
