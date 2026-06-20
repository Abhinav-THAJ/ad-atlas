// ============================================
// AD Atlas Beauty — Product Card Component
// ============================================

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { ProductBadge } from "./ProductBadge";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
  className?: string;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, className, onQuickView }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const hasWishlist = useWishlistStore((state) => state.hasItem(product.id));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (!hasWishlist) {
      toast.success("Added to wishlist", {
        icon: "❤️",
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
    } else {
      toast.success("Removed from wishlist", {
        style: {
          background: "#1c1c1c",
          color: "#ffffff",
          borderRadius: "0px",
          fontFamily: "var(--font-inter)",
          fontSize: "12px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        },
      });
    }
  };

  const isSale = product.salePrice && product.salePrice < product.price;

  return (
    <div
      className="group relative flex flex-col w-full h-full cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/5] bg-brand-light w-full overflow-hidden border border-brand-primary/5">
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.status === "coming-soon" ? (
            <ProductBadge status="coming-soon" />
          ) : isSale ? (
            <ProductBadge status="sale" />
          ) : product.isBestSeller ? (
            <ProductBadge status="best-seller" />
          ) : null}
        </div>

        {/* Wishlist Trigger */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-none text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-transform duration-300 ${
              hasWishlist ? "fill-brand-accent stroke-brand-accent scale-110" : ""
            }`}
          />
        </button>

        {/* Hover Quick Actions overlay */}
        {product.status !== "coming-soon" && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20 flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-brand-primary hover:bg-brand-secondary text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3 px-4 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
            {onQuickView && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="bg-white hover:bg-brand-primary hover:text-white text-brand-primary p-3 transition-colors flex items-center justify-center"
                aria-label="Quick view"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Coming soon cover click/preview button */}
        {product.status === "coming-soon" && (
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
            <Link
              href={`/product/${product.slug}`}
              className="w-full block text-center bg-white hover:bg-brand-primary hover:text-white text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] py-3"
            >
              Learn More
            </Link>
          </div>
        )}

        {/* Product Image */}
        <Link href={`/product/${product.slug}`} className="absolute inset-0 block">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      {/* Product Details info panel */}
      <div className="pt-5 pb-2 flex flex-col items-center text-center flex-grow">
        <span className="text-[9px] uppercase tracking-[0.25em] text-brand-secondary font-bold mb-1.5">
          {product.category}
        </span>
        <h3 className="font-heading text-lg text-brand-primary mb-1 hover:text-brand-secondary transition-colors line-clamp-1">
          <Link href={`/product/${product.slug}`}>{product.title}</Link>
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? "fill-brand-accent text-brand-accent"
                  : "text-neutral-300"
              }`}
            />
          ))}
          <span className="text-[10px] text-neutral-500 ml-1">({product.reviewCount})</span>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-3">
          {product.status === "coming-soon" ? (
            <span className="text-[11px] font-bold tracking-widest text-brand-accent uppercase">
              Coming Soon
            </span>
          ) : (
            <>
              {isSale ? (
                <>
                  <span className="text-neutral-400 line-through text-xs">₹{product.price}</span>
                  <span className="text-brand-primary font-bold text-sm">₹{product.salePrice}</span>
                </>
              ) : (
                <span className="text-brand-primary font-semibold text-sm">₹{product.price}</span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
