// ============================================
// AD Atlas Beauty — Order Tracking Page
// ============================================

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Search, Package, MapPin, Truck, CheckCircle2, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const orderIdQuery = searchParams?.get("orderId") || "";

  const [orderId, setOrderId] = useState(orderIdQuery);
  const [activeTracking, setActiveTracking] = useState<boolean>(false);

  useEffect(() => {
    if (orderIdQuery) {
      setActiveTracking(true);
    }
  }, [orderIdQuery]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) {
      toast.error("Please enter a valid Order ID", { style: { borderRadius: "0px" } });
      return;
    }
    setActiveTracking(true);
  };

  const trackingSteps = [
    { title: "Order Placed", date: "June 20, 2026", desc: "Order confirmation email sent to hello@adatlasventures.com", status: "complete" },
    { title: "Confirmed & Paid", date: "June 20, 2026", desc: "Payment verified successfully via Razorpay", status: "complete" },
    { title: "Processing & Packaged", date: "June 21, 2026", desc: "Quality checks passed. Transferred to shipping warehouse", status: "active" },
    { title: "Shipped", date: "June 22, 2026", desc: "Dispatched via BlueDart Express (Tracking ID: BD1234567)", status: "pending" },
    { title: "Delivered", date: "June 24, 2026", desc: "Delivered to Yusuf Sarai Complex, Green Park, New Delhi", status: "pending" },
  ];

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block text-center">
          Delivery Status Tracker
        </span>
        <h1 className="font-heading text-4xl text-brand-primary text-center mb-12 font-bold font-black">
          Track Your Order
        </h1>

        {/* Input box */}
        <div className="bg-white p-8 border border-brand-primary/5 mb-10 max-w-xl mx-auto">
          <form onSubmit={handleTrack} className="flex gap-2">
            <input
              type="text"
              required
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="ENTER ORDER ID (E.G. ORD-4567)"
              className="flex-grow border border-brand-primary/10 px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
            />
            <button
              type="submit"
              className="bg-brand-primary text-white text-[9px] tracking-widest uppercase font-bold px-6 py-3 flex items-center gap-2 hover:bg-brand-secondary transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" /> Track
            </button>
          </form>
        </div>

        {/* Tracking result list details */}
        {activeTracking && (
          <div className="bg-white p-8 md:p-12 border border-brand-primary/5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-primary/5 pb-6 mb-8 gap-4">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  ORDER ID
                </h4>
                <p className="text-lg font-heading text-brand-primary font-bold">{orderId}</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  ESTIMATED DELIVERY
                </h4>
                <p className="text-sm font-sans font-semibold text-brand-secondary uppercase tracking-wider">
                  June 24, 2026 (BlueDart Express)
                </p>
              </div>
            </div>

            {/* Steps tracker map timeline */}
            <div className="flex flex-col gap-8 relative pl-8 border-l border-brand-primary/10 ml-4">
              {trackingSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step status node dot */}
                  <span
                    className={`absolute -left-12 top-0.5 w-8 h-8 rounded-full flex items-center justify-center border ${
                      step.status === "complete"
                        ? "bg-brand-primary border-brand-primary text-brand-accent"
                        : step.status === "active"
                        ? "bg-white border-brand-accent text-brand-accent animate-pulse"
                        : "bg-white border-neutral-200 text-neutral-300"
                    }`}
                  >
                    {step.status === "complete" ? (
                      <CheckCircle2 className="w-5 h-5 fill-brand-primary" />
                    ) : index === 2 ? (
                      <Package className="w-4 h-4" />
                    ) : index === 3 ? (
                      <Truck className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                  </span>

                  <div>
                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                      <h4
                        className={`text-sm uppercase tracking-wider font-bold ${
                          step.status === "complete" || step.status === "active"
                            ? "text-brand-primary"
                            : "text-neutral-400"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        {step.date}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={
      <div className="text-center py-40">
        <p className="text-xs uppercase tracking-widest text-neutral-500">Loading Order Tracker...</p>
      </div>
    }>
      <TrackOrderContent />
    </Suspense>
  );
}
