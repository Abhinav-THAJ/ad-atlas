// ============================================
// AD Atlas Beauty — Header Component
// ============================================

"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, User, Menu, X, Heart, Trash2, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { products } from "@/data";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();

  // Zustand Store states
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = useCartStore((state) => state.getItemCount());
  const cartSubtotal = useCartStore((state) => state.getSubtotal());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const wishlistCount = useWishlistStore((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter products by search query
  const searchResults = searchQuery
    ? products.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <header
        className={`fixed top-11 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-bg/95 backdrop-blur-md py-4 shadow-sm border-b border-brand-primary/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Left Nav items */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <NextLink
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors relative group ${
                    pathname === link.href ? "text-brand-primary" : "text-neutral-700 hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
                </NextLink>
              ))}
            </nav>

            {/* Mobile Menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-neutral-800 hover:text-brand-primary transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Brand Logo Center */}
            <NextLink
              href="/"
              className="text-xl md:text-2xl font-heading font-black tracking-[0.3em] text-brand-primary uppercase transition-transform hover:scale-102"
            >
              AD Atlas
            </NextLink>

            {/* Right Nav actions */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-neutral-800 hover:text-brand-primary transition-colors cursor-pointer"
                aria-label="Open search searchbar"
              >
                <Search className="w-4 h-4" />
              </button>

              <NextLink
                href="/wishlist"
                className="hidden md:flex items-center text-neutral-800 hover:text-brand-primary transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </NextLink>

              <NextLink
                href="/login"
                className="hidden md:flex items-center text-neutral-800 hover:text-brand-primary transition-colors"
                aria-label="User Account"
              >
                <User className="w-4 h-4" />
              </NextLink>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-neutral-800 hover:text-brand-primary transition-colors relative cursor-pointer"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="w-4/5 max-w-sm h-full bg-brand-bg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="font-heading font-black tracking-widest text-brand-primary uppercase text-lg">
                    AD Atlas
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-neutral-800 hover:text-brand-primary"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <NextLink
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                        pathname === link.href ? "text-brand-primary" : "text-neutral-700"
                      }`}
                    >
                      {link.name}
                    </NextLink>
                  ))}
                  <NextLink
                    href="/wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold tracking-widest uppercase text-neutral-700 flex items-center gap-2"
                  >
                    Wishlist ({wishlistCount})
                  </NextLink>
                  <NextLink
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold tracking-widest uppercase text-neutral-700"
                  >
                    Account
                  </NextLink>
                </nav>
              </div>

              <div className="border-t border-brand-primary/10 pt-6">
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-loose">
                  AD Atlas Ventures Private Limited <br /> hello@adatlasventures.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          >
            <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white p-6 shadow-2xl flex flex-col justify-between z-10"
            >
              <div>
                <div className="flex justify-between items-center border-b border-brand-primary/5 pb-4 mb-6">
                  <h3 className="font-heading text-xl text-brand-primary font-bold">Shopping Bag</h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-neutral-800 hover:text-brand-primary cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <div className="text-center py-20 flex flex-col items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-neutral-300 mb-4" strokeWidth={1} />
                    <p className="font-heading text-lg text-neutral-600 mb-2">Your bag is empty</p>
                    <p className="text-xs text-neutral-400 mb-6">Explore our curated collections</p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                      }}
                      className="bg-brand-primary text-white text-[10px] tracking-widest uppercase font-bold py-3 px-8 hover:bg-brand-secondary transition-colors"
                    >
                      Shop Collection
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] pr-2">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 border-b border-brand-primary/5 pb-4"
                      >
                        <div className="relative w-16 h-20 bg-brand-light flex-shrink-0">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary leading-snug">
                            {item.product.title}
                          </h4>
                          <span className="text-[9px] uppercase tracking-widest text-neutral-400">
                            {item.product.category}
                          </span>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-brand-primary/10">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 py-0.5 text-xs text-neutral-500 hover:bg-brand-light"
                              >
                                -
                              </button>
                              <span className="px-3 text-xs font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs text-neutral-500 hover:bg-brand-light"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-xs font-bold text-brand-primary">
                              ₹{item.product.salePrice || item.product.price}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-neutral-300 hover:text-brand-primary self-center"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-brand-primary/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold">
                      Subtotal
                    </span>
                    <span className="font-heading font-black text-xl text-brand-primary">
                      ₹{cartSubtotal}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-400 mb-6 uppercase tracking-wider">
                    Shipping & taxes calculated at checkout
                  </p>
                  <NextLink
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-brand-primary text-white text-center py-4 text-xs font-bold uppercase tracking-[0.2em] block hover:bg-brand-secondary transition-colors mb-2.5"
                  >
                    View Shopping Bag
                  </NextLink>
                  <NextLink
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full border border-brand-primary text-brand-primary text-center py-4 text-xs font-bold uppercase tracking-[0.2em] block hover:bg-brand-primary hover:text-white transition-all duration-300"
                  >
                    Checkout Securely
                  </NextLink>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay slider overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-md flex flex-col justify-start"
          >
            <div className="absolute inset-0" onClick={() => setIsSearchOpen(false)} />
            <motion.div
              initial={{ y: "-10%" }}
              animate={{ y: 0 }}
              exit={{ y: "-10%" }}
              className="bg-white px-6 py-12 md:py-20 shadow-2xl relative z-10 w-full"
            >
              <div className="max-w-4xl mx-auto flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">
                    Explore Brand Collection
                  </span>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-neutral-800 hover:text-brand-primary cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative border-b border-brand-primary/10 pb-4">
                  <input
                    type="text"
                    placeholder="WHAT SHADE OR PRODUCT ARE YOU SEARCHING FOR?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full text-lg md:text-2xl tracking-[0.1em] font-heading text-brand-primary uppercase focus:outline-none placeholder:text-neutral-300"
                  />
                  <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-neutral-400" />
                </div>

                {searchResults.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {searchResults.map((product) => (
                      <NextLink
                        href={`/product/${product.slug}`}
                        key={product.id}
                        onClick={() => setIsSearchOpen(false)}
                        className="group flex flex-col items-center text-center"
                      >
                        <div className="relative aspect-[4/5] bg-brand-light w-full mb-4 overflow-hidden border border-brand-primary/5">
                          <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h4 className="font-heading text-sm text-brand-primary group-hover:text-brand-secondary transition-colors line-clamp-1">
                          {product.title}
                        </h4>
                        <span className="text-[10px] text-brand-accent font-bold mt-1">
                          ₹{product.salePrice || product.price}
                        </span>
                      </NextLink>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-sm text-neutral-500 uppercase tracking-widest">
                      No search results matching &ldquo;{searchQuery}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
