// ============================================
// AD Atlas Beauty — Product Badge Component
// ============================================

import React from "react";
import { cn } from "@/lib/utils";

interface ProductBadgeProps {
  status: "active" | "coming-soon" | "out-of-stock" | "sale" | "best-seller";
  className?: string;
}

export function ProductBadge({ status, className }: ProductBadgeProps) {
  const styles = {
    active: "hidden",
    "coming-soon": "bg-brand-primary text-white border border-brand-accent/20",
    "out-of-stock": "bg-neutral-800 text-neutral-400 border border-neutral-700",
    sale: "bg-brand-accent text-white",
    "best-seller": "bg-brand-secondary text-white",
  };

  const label = {
    active: "",
    "coming-soon": "Coming Soon",
    "out-of-stock": "Sold Out",
    sale: "Special Offer",
    "best-seller": "Best Seller",
  };

  if (status === "active") return null;

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase rounded-none select-none z-10",
        styles[status],
        className
      )}
    >
      {label[status]}
    </span>
  );
}

export default ProductBadge;
