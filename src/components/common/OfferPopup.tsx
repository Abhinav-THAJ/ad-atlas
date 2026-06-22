// ============================================
// AD Atlas Beauty — Offer Popup Component
// ============================================

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const hasSeenPopup = sessionStorage.getItem("ad-atlas-offer-popup");
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("ad-atlas-offer-popup", "true");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("ATLAS10");
    setIsOpen(false);
    sessionStorage.setItem("ad-atlas-offer-popup", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white max-w-lg w-full relative overflow-hidden shadow-2xl border border-brand-primary/10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-brand-primary z-10 transition-colors"
              aria-label="Close offer popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row">
              {/* Image side (hidden on small mobile) */}
              <div className="hidden md:block w-1/3 bg-brand-primary/5 relative border-r border-brand-primary/5">
                <div className="absolute inset-0 bg-[url('/images/brand-editorial.png')] bg-cover bg-center opacity-90 mix-blend-multiply" />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/3 p-8 md:p-10 text-center flex flex-col justify-center items-center">
                <Gift className="w-8 h-8 text-brand-accent mb-4" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-2 block">
                  Exclusive Welcome Offer
                </span>
                <h2 className="text-3xl font-heading text-brand-primary mb-4 font-black leading-tight">
                  Unlock 10% Off Your First Order
                </h2>
                <p className="text-xs text-neutral-500 font-sans tracking-wide leading-relaxed mb-8 uppercase">
                  Experience science-backed luxury cosmetics. Use this exclusive code at checkout.
                </p>
                
                <div className="w-full border-2 border-dashed border-brand-primary/20 bg-brand-light/50 p-4 mb-6">
                  <span className="font-heading text-2xl tracking-[0.2em] font-black text-brand-primary">
                    ATLAS10
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  Copy Code & Shop
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OfferPopup;
