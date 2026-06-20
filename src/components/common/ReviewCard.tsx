// ============================================
// AD Atlas Beauty — Review Card Component
// ============================================

"use client";

import React, { useState } from "react";
import { Star, CheckCircle, ThumbsUp } from "lucide-react";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [likes, setLikes] = useState(review.helpful);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes((l) => l - 1);
      setLiked(false);
    } else {
      setLikes((l) => l + 1);
      setLiked(true);
    }
  };

  return (
    <div className="bg-white border border-brand-primary/5 p-6 md:p-8 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-500 rounded-none relative">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < review.rating ? "fill-brand-accent text-brand-accent" : "text-neutral-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-neutral-400 font-medium">
            {new Date(review.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <h4 className="font-heading text-lg text-brand-primary mb-2 italic">
          &ldquo;{review.title}&rdquo;
        </h4>
        <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
          {review.content}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-brand-primary/5 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-heading font-semibold text-brand-primary">
            {review.userName}
          </span>
          {review.isVerified && (
            <span className="inline-flex items-center gap-1 text-[9px] font-bold text-brand-secondary tracking-wider uppercase">
              <CheckCircle className="w-3 h-3 text-brand-accent fill-brand-accent/20" />
              Verified Buyer
            </span>
          )}
        </div>

        <button
          onClick={handleLike}
          className={`flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider transition-colors ${
            liked ? "text-brand-primary font-bold" : "text-neutral-400 hover:text-brand-primary"
          }`}
          aria-label="Mark review as helpful"
        >
          <ThumbsUp className={`w-3.5 h-3.5 ${liked ? "fill-brand-primary/10" : ""}`} />
          Helpful ({likes})
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
