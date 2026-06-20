// ============================================
// AD Atlas Beauty — Checkout Page
// ============================================

"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { useAuthStore } from "@/store/auth";
import { SectionContainer } from "@/components/common/SectionContainer";
import { ShieldCheck, CreditCard, Landmark, Wallet, Check } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const router = useRouter();

  // Address inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "wallet" | "netbanking">("upi");
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const discount = useCartStore((state) => state.couponDiscount);
  const total = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);

  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal >= 999 ? 0 : 99;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !addressLine1 || !city || !pincode) {
      toast.error("Please fill out all required address fields", { style: { borderRadius: "0px" } });
      return;
    }

    setIsProcessing(true);
    toast.loading("Simulating Razorpay payment gateway connection...", { id: "payment-toast" });

    // Simulate Payment gateway processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("Payment Received! Order placed successfully.", {
        id: "payment-toast",
        style: {
          background: "#4B1F5E",
          color: "#ffffff",
          borderRadius: "0px",
        },
      });

      // Generate a mock tracking order segment
      const mockOrderId = `ORD-${Date.now().toString().slice(-6)}`;
      router.push(`/track-order?orderId=${mockOrderId}`);
    }, 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-6 py-40 text-center">
        <h2 className="font-heading text-2xl text-brand-primary mb-4 font-bold">Your Bag is Empty</h2>
        <p className="text-neutral-500 mb-8">Please add items to your shopping cart to complete checkout.</p>
        <button
          onClick={() => router.push("/shop")}
          className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-8 py-3"
        >
          Browse Atelier
        </button>
      </div>
    );
  }

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <h1 className="font-heading text-4xl text-brand-primary font-bold mb-12 text-center">
          Secure Checkout
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Shipping Address Inputs column */}
          <div className="lg:col-span-2 flex flex-col gap-8 bg-white p-8 border border-brand-primary/5">
            <div>
              <h3 className="text-lg font-heading text-brand-primary font-bold mb-6 pb-2 border-b border-brand-primary/5 uppercase tracking-wide">
                1. Delivery Address
              </h3>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="YOUR FULL NAME"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-DIGIT NUMBER"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Address Line 1 *
                  </label>
                  <input
                    type="text"
                    required
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    placeholder="HOUSE / FLAT NO., STREET, COLONY"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    placeholder="LANDMARK, APARTMENT DETAILS"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="CITY"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="STATE"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="6 DIGITS"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method section */}
            <div>
              <h3 className="text-lg font-heading text-brand-primary font-bold mb-6 pb-2 border-b border-brand-primary/5 uppercase tracking-wide">
                2. Razorpay Payment Methods
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {(["upi", "card", "wallet", "netbanking"] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`flex flex-col items-center justify-center p-5 border text-center transition-all cursor-pointer ${
                      paymentMethod === method
                        ? "border-brand-primary bg-brand-light"
                        : "border-brand-primary/10 bg-white hover:border-brand-primary/45"
                    }`}
                  >
                    {method === "upi" ? (
                      <Check className="w-5 h-5 text-brand-primary mb-2" />
                    ) : method === "card" ? (
                      <CreditCard className="w-5 h-5 text-brand-primary mb-2" />
                    ) : method === "wallet" ? (
                      <Wallet className="w-5 h-5 text-brand-primary mb-2" />
                    ) : (
                      <Landmark className="w-5 h-5 text-brand-primary mb-2" />
                    )}
                    <span className="text-[9px] font-bold uppercase tracking-wider">
                      {method === "netbanking" ? "Net Banking" : method}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart review order totals column */}
          <div className="bg-white p-8 border border-brand-primary/5 h-fit flex flex-col gap-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary pb-3 border-b border-brand-primary/5">
              Review Your Order
            </h3>

            {/* Items display */}
            <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4 justify-between items-center text-xs">
                  <div className="flex gap-3 items-center">
                    <span className="font-semibold text-brand-primary">{item.quantity} x</span>
                    <span className="text-neutral-600 line-clamp-1 uppercase tracking-wide">{item.product.title}</span>
                  </div>
                  <span className="font-bold text-brand-primary">
                    ₹{(item.product.salePrice || item.product.price) * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary details */}
            <div className="flex flex-col gap-3.5 border-t border-b border-brand-primary/5 py-6 text-xs uppercase tracking-wider text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-brand-accent font-semibold">
                  <span>Discount</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Total Due</span>
              <span className="font-heading font-black text-2xl text-brand-primary">₹{total}</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              {isProcessing ? "PROCESSING..." : `PAY SECURELY ₹${total}`}
            </button>

            <span className="text-[9px] uppercase tracking-widest text-center text-neutral-400 font-semibold leading-relaxed">
              Payments are secured by Razorpay. SSL encrypted transactions.
            </span>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
