// ============================================
// AD Atlas Beauty — Loading Screen Component
// ============================================

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if session storage has loaded already to avoid repeat loads
    const hasLoaded = sessionStorage.getItem("ad-atlas-loaded");
    if (hasLoaded) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("ad-atlas-loaded", "true");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 bg-brand-primary z-[9999] flex flex-col items-center justify-center text-white"
        >
          {/* Logo container */}
          <div className="relative overflow-hidden mb-6 text-center">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
              className="text-4xl md:text-6xl font-heading tracking-[0.25em] uppercase font-bold text-[#faf7f2]"
            >
              AD Atlas
            </motion.h1>
          </div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
            className="w-24 h-[1px] bg-brand-accent origin-center mb-6"
          />

          {/* Tagline */}
          <div className="relative overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 1 }}
              className="text-xs md:text-sm font-light tracking-[0.4em] uppercase text-[#F7F3EE]/80"
            >
              Luxury. Science. You.
            </motion.p>
          </div>

          {/* Bottom circular spinner or aesthetic dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-16 w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
