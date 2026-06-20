// ============================================
// AD Atlas Beauty — 404 Not Found Page
// ============================================

import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/common/SectionContainer";
import { LuxuryButton } from "@/components/common/LuxuryButton";

export default function NotFound() {
  return (
    <SectionContainer className="bg-brand-bg pt-40 pb-28 text-center flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-md mx-auto">
        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-accent mb-6 block">
          Error Code: 404
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-brand-primary font-black mb-6">
          Lost in Beauty
        </h1>
        <p className="text-xs md:text-sm font-sans tracking-wide text-neutral-500 uppercase leading-relaxed mb-10 max-w-sm mx-auto">
          The editorial page or cosmetic shade you are searching for does not exist or has been relocated to another collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-block">
            <LuxuryButton variant="primary">Return Home</LuxuryButton>
          </Link>
          <Link href="/shop" className="inline-block">
            <LuxuryButton variant="outline">Browse Atelier</LuxuryButton>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
