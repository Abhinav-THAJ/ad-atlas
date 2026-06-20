// ============================================
// AD Atlas Beauty — Coming Soon Card Component
// ============================================

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";

interface ComingSoonCardProps {
  product: {
    id: string;
    name: string;
    category: string;
  };
}

export function ComingSoonCard({ product }: ComingSoonCardProps) {
  const [email, setEmail] = useState("");

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success(`We will notify you when ${product.name} launches!`, {
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
    <div className="group relative flex flex-col justify-between p-6 bg-brand-light/40 border border-brand-primary/5 hover:border-brand-primary/20 transition-all duration-500 min-h-[320px]">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-[9px] uppercase tracking-[0.25em] text-brand-secondary font-bold">
            {product.category}
          </span>
          <span className="text-[8px] font-bold tracking-widest text-brand-accent uppercase border border-brand-accent/30 px-2 py-0.5">
            Coming Soon
          </span>
        </div>

        {/* Abstract product outline illustration */}
        <div className="relative h-28 w-full flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent rounded-sm flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-heading italic text-5xl text-brand-primary/10 select-none">
              CS
            </span>
          </div>
          {/* Packaging wireframe mock */}
          <div className="relative w-10 h-20 border border-brand-primary/10 group-hover:border-brand-primary/20 rounded-t-lg transition-colors duration-500 flex items-center justify-center">
            <div className="w-8 h-8 border border-brand-accent/10 rounded-full animate-pulse" />
          </div>
        </div>

        <h3 className="font-heading text-xl text-brand-primary mb-2 text-center">
          {product.name}
        </h3>
        <p className="text-[11px] font-sans tracking-wide text-neutral-500 text-center mb-6 max-w-[200px] mx-auto">
          Crafting a bespoke scientific blend for your skin routine.
        </p>
      </div>

      <form onSubmit={handleNotifyMe} className="relative flex items-center">
        <input
          type="email"
          placeholder="ENTER EMAIL FOR EARLY ACCESS"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white border border-brand-primary/10 px-4 py-2.5 text-[9px] tracking-widest uppercase focus:outline-none focus:border-brand-primary placeholder:text-neutral-400 pr-10"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 bottom-0 px-3 bg-brand-primary text-white hover:bg-brand-secondary transition-colors flex items-center justify-center"
          aria-label="Notify me"
        >
          <Mail className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

export default ComingSoonCard;
