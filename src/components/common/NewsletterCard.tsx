// ============================================
// AD Atlas Beauty — Newsletter Card Component
// ============================================

"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing to AD Atlas Beauty!", {
      style: {
        background: "#4B1F5E",
        color: "#ffffff",
        borderRadius: "0px",
        fontFamily: "var(--font-inter)",
        fontSize: "12px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      },
    });
    setEmail("");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-[#2B0E3B] text-white p-8 md:p-16 text-center shadow-xl">
      {/* Decorative backdrop details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4">
          Join the Circle
        </span>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-[#faf7f2] mb-6 leading-tight">
          Unlock Luxury in <br /> Your Inbox
        </h2>
        <p className="text-xs md:text-sm font-light font-sans tracking-wide text-neutral-200/90 max-w-lg mb-10 leading-relaxed">
          Subscribe to receive exclusive access to science-backed product launches, editorial tips,
          and private brand events.
        </p>

        <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-xs tracking-widest text-white uppercase placeholder:text-neutral-300 focus:outline-none focus:border-brand-accent backdrop-blur-sm"
          />
          <button
            type="submit"
            className="bg-brand-accent hover:bg-[#b0902c] text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterCard;
