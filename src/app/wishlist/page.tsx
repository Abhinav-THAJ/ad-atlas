// ============================================
// AD Atlas Beauty — Wishlist Page
// ============================================

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWishlistStore } from "@/store/wishlist";
import { useCartStore } from "@/store/cart";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const wishlistItems = useWishlistStore((state) => state.items);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    toast.success(`${product.title} added to cart!`, {
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
  };

  const handleRemove = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
    toast.success("Removed from wishlist", {
      style: {
        background: "#1c1c1c",
        color: "#ffffff",
        borderRadius: "0px",
      },
    });
  };

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h1 className="font-heading text-4xl text-brand-primary font-bold mb-12 text-center">
          My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-24 bg-white p-8 border border-brand-primary/5 max-w-lg mx-auto">
            <Heart className="w-16 h-16 text-neutral-300 mx-auto mb-6" strokeWidth={1} />
            <h3 className="font-heading text-xl text-neutral-700 mb-2">Your Wishlist is Empty</h3>
            <p className="text-xs text-neutral-400 mb-8 uppercase tracking-wider">
              Save your favorite cosmetics here to buy later
            </p>
            <Link
              href="/shop"
              className="bg-brand-primary text-white text-[10px] tracking-widest uppercase font-bold py-4 px-10 hover:bg-brand-secondary transition-colors"
            >
              Browse Atelier
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-brand-primary/5 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/5] bg-brand-light w-full mb-6 overflow-hidden border border-brand-primary/5">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-brand-secondary font-bold block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-heading text-lg text-brand-primary mb-2 uppercase line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs font-bold text-brand-primary mb-6">
                    ₹{product.salePrice || product.price}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="flex-grow bg-brand-primary hover:bg-brand-secondary text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3 px-4 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add
                  </button>
                  <button
                    onClick={(e) => handleRemove(product, e)}
                    className="border border-brand-primary/10 hover:border-brand-primary p-3 text-neutral-400 hover:text-brand-primary transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
