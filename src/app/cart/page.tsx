// ============================================
// AD Atlas Beauty — Shopping Cart Page
// ============================================

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { SectionContainer } from "@/components/common/SectionContainer";
import { ShoppingBag, Trash2, ArrowRight, Ticket, Percent } from "lucide-react";
import toast from "react-hot-toast";

export default function CartPage() {
  const [couponInput, setCouponInput] = useState("");

  const cartItems = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const couponCode = useCartStore((state) => state.couponCode);
  const couponDiscount = useCartStore((state) => state.couponDiscount);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const removeCoupon = useCartStore((state) => state.removeCoupon);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const total = useCartStore((state) => state.getTotal());

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    
    // Simulate coupons
    const validCoupons = ["ATLAS10", "LUXURY20", "WELCOME15"];
    if (validCoupons.includes(couponInput.toUpperCase())) {
      applyCoupon(couponInput);
      toast.success(`Coupon ${couponInput.toUpperCase()} applied successfully!`, {
        style: { borderRadius: "0px" },
      });
      setCouponInput("");
    } else {
      toast.error("Invalid coupon code. Try 'ATLAS10' or 'LUXURY20'", {
        style: { borderRadius: "0px" },
      });
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    toast.success("Coupon removed", { style: { borderRadius: "0px" } });
  };

  const shipping = subtotal >= 999 ? 0 : 99;
  const discountAmount = (subtotal * couponDiscount) / 100;

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h1 className="font-heading text-4xl text-brand-primary font-bold mb-12 text-center">
          Shopping Bag
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-24 bg-white p-8 border border-brand-primary/5 max-w-lg mx-auto">
            <ShoppingBag className="w-16 h-16 text-neutral-300 mx-auto mb-6" strokeWidth={1} />
            <h3 className="font-heading text-xl text-neutral-700 mb-2">Your Shopping Bag is Empty</h3>
            <p className="text-xs text-neutral-400 mb-8 uppercase tracking-wider">
              Add some science-backed luxury products to begin
            </p>
            <Link
              href="/shop"
              className="bg-brand-primary text-white text-[10px] tracking-widest uppercase font-bold py-4 px-10 hover:bg-brand-secondary transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items list column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white border border-brand-primary/5 p-6 flex flex-col sm:flex-row justify-between items-center gap-6"
                >
                  <div className="flex items-center gap-6 w-full sm:w-auto">
                    <div className="relative w-20 h-24 bg-brand-light flex-shrink-0 border border-brand-primary/5">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-brand-primary font-semibold">
                        {item.product.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-2">
                        Category: {item.product.category}
                      </span>
                      <span className="text-xs font-bold text-brand-secondary">
                        ₹{item.product.salePrice || item.product.price}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Actions panel */}
                  <div className="flex justify-between items-center w-full sm:w-auto gap-8 border-t sm:border-t-0 pt-4 sm:pt-0">
                    <div className="flex items-center border border-brand-primary/10 bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-neutral-500 hover:bg-brand-light font-bold"
                      >
                        -
                      </button>
                      <span className="px-4 text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-neutral-500 hover:bg-brand-light font-bold"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-sm font-bold text-brand-primary w-20 text-right">
                      ₹{(item.product.salePrice || item.product.price) * item.quantity}
                    </span>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-neutral-300 hover:text-brand-primary cursor-pointer p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals panel column */}
            <div className="bg-white p-8 border border-brand-primary/5 h-fit flex flex-col gap-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary pb-3 border-b border-brand-primary/5">
                Order Summary
              </h3>

              {/* Coupon Form input */}
              {couponCode ? (
                <div className="bg-brand-light p-4 border border-brand-accent/20 flex justify-between items-center">
                  <div className="flex gap-2.5 items-center">
                    <Percent className="w-4 h-4 text-brand-accent" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-brand-primary uppercase">
                        {couponCode} APPLIED
                      </p>
                      <p className="text-[9px] text-neutral-400 uppercase">{couponDiscount}% discount active</p>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-[9px] font-bold tracking-widest uppercase text-brand-accent hover:text-brand-primary"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="ENTER COUPON CODE"
                    className="flex-grow border border-brand-primary/10 px-4 py-2.5 text-[9px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                  <button
                    type="submit"
                    className="bg-brand-primary text-white text-[9px] tracking-widest uppercase font-bold px-4 py-2.5 flex items-center gap-1.5 hover:bg-brand-secondary transition-colors"
                  >
                    <Ticket className="w-3.5 h-3.5" /> Apply
                  </button>
                </form>
              )}

              {/* Price item breakdown lines */}
              <div className="flex flex-col gap-3.5 border-b border-brand-primary/5 pb-6 text-xs uppercase tracking-wider text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-brand-primary">₹{subtotal}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-brand-accent font-semibold">
                    <span>Discount ({couponDiscount}%)</span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[9px] text-neutral-400 text-right uppercase normal-case tracking-wide">
                    Add ₹{999 - subtotal} more for free shipping
                  </p>
                )}
              </div>

              {/* Total final */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Total</span>
                <span className="font-heading font-black text-2xl text-brand-primary">₹{total}</span>
              </div>

              <Link href="/checkout" className="w-full">
                <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link
                href="/shop"
                className="text-center text-[9px] uppercase tracking-widest text-neutral-400 hover:text-brand-primary font-bold mt-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
