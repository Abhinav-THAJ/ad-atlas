// ============================================
// AD Atlas Beauty — Quick View Modal Component
// ============================================

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, Heart, Star, Check } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const hasWishlist = useWishlistStore((state) => product ? state.hasItem(product.id) : false);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${quantity} x ${product.title} added to cart!`, {
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
    onClose();
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    if (!hasWishlist) {
      toast.success("Added to wishlist", {
        icon: "❤️",
        style: {
          background: "#4B1F5E",
          color: "#ffffff",
          borderRadius: "0px",
        },
      });
    } else {
      toast.success("Removed from wishlist", {
        style: {
          background: "#1c1c1c",
          color: "#ffffff",
          borderRadius: "0px",
        },
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-md flex items-center justify-center p-4 md:p-6"
      >
        {/* Backdrop click closer */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-white max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-neutral-800 hover:text-brand-primary p-1 bg-white/80 rounded-none shadow-sm cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Gallery (Left side) */}
          <div className="relative aspect-[4/5] bg-brand-light w-full">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Information (Right side) */}
          <div className="p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-secondary font-bold mb-2 block">
                {product.category}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl text-brand-primary font-bold mb-3">
                {product.title}
              </h2>

              {/* Star ratings */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="flex text-brand-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? "fill-brand-accent" : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                  {product.rating} Star Rating ({product.reviewCount} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-neutral-400 line-through text-sm">₹{product.price}</span>
                    <span className="text-brand-primary font-black text-xl">₹{product.salePrice}</span>
                  </>
                ) : (
                  <span className="text-brand-primary font-black text-xl">₹{product.price}</span>
                )}
              </div>

              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans mb-8">
                {product.shortDescription}
              </p>

              {/* Trust Badge bullets */}
              <div className="flex flex-col gap-2 mb-8 border-t border-brand-primary/5 pt-6">
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-600">
                  <Check className="w-3.5 h-3.5 text-brand-accent" />
                  Cruelty Free & Vegan
                </span>
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-600">
                  <Check className="w-3.5 h-3.5 text-brand-accent" />
                  Dermatologically Approved
                </span>
              </div>
            </div>

            <div>
              {/* Controls */}
              <div className="flex gap-4 mb-4">
                <div className="flex items-center border border-brand-primary/10">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-neutral-500 hover:bg-brand-light font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-neutral-500 hover:bg-brand-light font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleWishlist}
                  className={`border border-brand-primary px-4 hover:bg-brand-primary hover:text-white transition-all duration-300 ${
                    hasWishlist ? "bg-brand-primary text-white" : "text-brand-primary"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-4 h-4 ${hasWishlist ? "fill-brand-accent stroke-brand-accent" : ""}`} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ₹{(product.salePrice || product.price) * quantity}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default QuickViewModal;
