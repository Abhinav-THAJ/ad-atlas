// ============================================
// AD Atlas Beauty — Section Container Component
// ============================================

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  animate?: boolean;
}

export function SectionContainer({
  children,
  className,
  id,
  delay = 0,
  animate = true,
}: SectionContainerProps) {
  if (!animate) {
    return (
      <section id={id} className={cn("py-20 md:py-28 relative overflow-hidden", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay }}
      className={cn("py-20 md:py-28 relative overflow-hidden", className)}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;
