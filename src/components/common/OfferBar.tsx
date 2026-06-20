// ============================================
// AD Atlas Beauty — Offer Bar Component
// ============================================

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OFFER_MESSAGES } from "@/constants";

export function OfferBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % OFFER_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brand-primary text-[#faf7f2] border-b border-brand-accent/10 py-2.5 overflow-hidden relative z-[51]">
      <div className="container mx-auto px-6 h-5 flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="text-[9px] md:text-xs font-bold tracking-[0.25em] uppercase font-sans select-none"
          >
            {OFFER_MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default OfferBar;
