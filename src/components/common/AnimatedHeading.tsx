// ============================================
// AD Atlas Beauty — Animated Heading Component
// ============================================

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  delay?: number;
  wordDelay?: number;
}

export function AnimatedHeading({
  text,
  className,
  tag = "h2",
  delay = 0,
  wordDelay = 0.05,
}: AnimatedHeadingProps) {
  const words = text.split(" ");
  const Tag = tag;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // easeOutCubic
      },
    },
  };

  return (
    <Tag className={cn("overflow-hidden flex flex-wrap gap-x-[0.25em]", className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block py-[0.1em] -my-[0.1em]">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export default AnimatedHeading;
