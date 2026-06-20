// ============================================
// AD Atlas Beauty — Luxury Button Component
// ============================================

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ href, variant = "primary", size = "md", children, icon, iconPosition = "right", className, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans tracking-[0.18em] uppercase transition-all duration-500 select-none cursor-pointer relative overflow-hidden";

    const variantStyles = {
      primary: "bg-brand-primary text-white hover:bg-brand-secondary",
      secondary: "bg-brand-secondary text-white hover:bg-brand-primary",
      accent: "bg-brand-accent text-white hover:bg-[#b59223] shadow-md",
      outline: "border border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white",
      text: "bg-transparent text-brand-primary tracking-[0.25em] p-0 border-b border-brand-primary/30 hover:border-brand-primary hover:text-brand-secondary",
    };

    const sizeStyles = {
      sm: "px-6 py-2.5 text-[10px] font-semibold",
      md: "px-8 py-3.5 text-xs font-semibold",
      lg: "px-10 py-4.5 text-sm font-bold",
    };

    const buttonContent = (
      <>
        {/* Glow Hover Layer */}
        {variant !== "text" && (
          <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 z-0" />
        )}
        
        <span className="relative z-10 flex items-center justify-center gap-2">
          {icon && iconPosition === "left" && <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        </span>
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            baseStyles,
            variantStyles[variant],
            variantStyles[variant] === "text" ? "" : sizeStyles[size],
            "group",
            className
          )}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variantStyles[variant] === "text" ? "" : sizeStyles[size],
          "group",
          className
        )}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";
export default LuxuryButton;
