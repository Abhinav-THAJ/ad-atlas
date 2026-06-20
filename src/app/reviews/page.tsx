// ============================================
// AD Atlas Beauty — Reviews Showcase Page
// ============================================

"use client";

import React, { useState, useMemo } from "react";
import { reviews } from "@/data";
import { ReviewCard } from "@/components/common/ReviewCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Star, MessageSquare } from "lucide-react";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  const filteredReviews = useMemo(() => {
    if (filterRating === "all") return reviews;
    return reviews.filter((r) => r.rating === filterRating);
  }, [filterRating]);

  // Aggregate ratings calculations
  const stats = useMemo(() => {
    const total = reviews.length;
    const sum = reviews.reduce((s, r) => s + r.rating, 0);
    const avg = total > 0 ? (sum / total).toFixed(1) : "0.0";
    
    // Distribute rates
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      const rate = r.rating as 5|4|3|2|1;
      if (counts[rate] !== undefined) counts[rate]++;
    });

    return { total, avg, counts };
  }, []);

  return (
    <>
      <SectionContainer className="bg-brand-bg pt-32 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block">
            Customer Testimonials
          </span>
          <AnimatedHeading
            text="Verified Customer Reviews"
            tag="h1"
            className="text-4xl md:text-6xl font-heading text-brand-primary mb-6 font-bold leading-tight"
          />
          <p className="text-xs md:text-sm font-sans tracking-widest text-neutral-500 uppercase leading-loose max-w-xl mx-auto">
            Honest feedback from our luxury beauty circle.
          </p>
        </div>
      </SectionContainer>

      {/* Aggregate Overview Card panel */}
      <SectionContainer className="bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-primary/5 pb-16 items-center">
            {/* Average rating box */}
            <div className="bg-brand-light/60 p-8 border border-brand-primary/5 text-center flex flex-col items-center">
              <h3 className="text-6xl font-heading text-brand-primary font-black mb-3">{stats.avg}</h3>
              <div className="flex gap-1 text-brand-accent mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(Number(stats.avg)) ? "fill-brand-accent text-brand-accent" : "text-neutral-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                Based on {stats.total} ratings
              </span>
            </div>

            {/* Distribution bars */}
            <div className="md:col-span-2 flex flex-col gap-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stats.counts[stars as 5|4|3|2|1] || 0;
                const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
                return (
                  <div key={stars} className="flex items-center gap-4">
                    <button
                      onClick={() => setFilterRating(stars)}
                      className="w-12 text-left text-[10px] font-bold tracking-wider text-neutral-500 hover:text-brand-primary uppercase cursor-pointer"
                    >
                      {stars} Star
                    </button>
                    <div className="flex-grow h-2 bg-neutral-100 relative">
                      <div
                        style={{ width: `${pct}%` }}
                        className="absolute left-0 top-0 bottom-0 bg-brand-primary"
                      />
                    </div>
                    <span className="w-10 text-right text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter Bar options */}
          <div className="flex flex-wrap justify-between items-center my-12 gap-4">
            <div className="flex gap-4">
              {(["all", 5, 4] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRating(r)}
                  className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border cursor-pointer ${
                    filterRating === r
                      ? "bg-brand-primary text-white border-brand-primary"
                      : "bg-transparent text-neutral-500 border-neutral-200 hover:border-brand-primary hover:text-brand-primary"
                  }`}
                >
                  {r === "all" ? "All Ratings" : `${r} Star Only`}
                </button>
              ))}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
              Showing {filteredReviews.length} Reviews
            </span>
          </div>

          {/* Reviews list grid */}
          {filteredReviews.length === 0 ? (
            <div className="text-center py-20 bg-brand-light/40 border border-brand-primary/5">
              <MessageSquare className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <p className="font-heading text-lg text-neutral-600 mb-2">No reviews found under this rating</p>
              <button
                onClick={() => setFilterRating("all")}
                className="bg-brand-primary text-white px-6 py-2.5 text-[9px] font-bold tracking-widest uppercase mt-4"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </>
  );
}
