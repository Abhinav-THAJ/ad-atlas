// ============================================
// AD Atlas Beauty — Refund Policy
// ============================================

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { BRAND } from "@/constants";

export default function RefundPolicyPage() {
  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-8 md:p-16 border border-brand-primary/5">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block text-center">
          Customer Care
        </span>
        <h1 className="font-heading text-4xl text-brand-primary text-center mb-12 font-bold">
          Refund & Return Policy
        </h1>

        <div className="prose max-w-none text-xs md:text-sm text-neutral-600 leading-relaxed font-sans flex flex-col gap-6 uppercase tracking-wider">
          <p className="font-bold">Last Updated: June 20, 2026</p>
          <p>
            Due to the hygienic nature of our luxury cosmetic products (such as lipsticks, serums, and liners), we
            maintain a strict return and exchange policy to ensure customer health and safety.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            1. Damaged or Defective Items
          </h3>
          <p>
            If you receive a product that is damaged during shipping or contains a manufacturing defect, you are
            eligible for a free replacement or full refund. You must email our support team at {BRAND.email}
            within 48 hours of delivery with photos and/or videos of the damaged item.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            2. Product Returns & Exchanges
          </h3>
          <p>
            We do not offer return pick-up or product exchanges for opened or used items. If a product is unopened,
            in its original premium packaging and sealed, you may request a return within 7 days of delivery. The
            shipping cost for returning the product to our New Delhi office must be covered by the customer.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            3. Refund Process
          </h3>
          <p>
            Once your returned item is received and inspected at our complex, we will notify you of the status.
            Approved refunds will be processed within 5-7 business days back to your original payment method
            (Razorpay, UPI, or card account).
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            4. Cancellation Policy
          </h3>
          <p>
            Orders can only be cancelled before they are processed and dispatched by our logistics facility. Once
            shipped, we cannot cancel or stop delivery.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            5. Help & Assistance
          </h3>
          <p>
            If you need help or have any questions about return eligibility, please reach out to us at:
            <br />
            Email: {BRAND.email} | Phone: +91 {BRAND.phone}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
