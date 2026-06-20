// ============================================
// AD Atlas Beauty — Privacy Policy
// ============================================

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { BRAND } from "@/constants";

export default function PrivacyPolicyPage() {
  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-8 md:p-16 border border-brand-primary/5">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block text-center">
          Legal Statement
        </span>
        <h1 className="font-heading text-4xl text-brand-primary text-center mb-12 font-bold">
          Privacy Policy
        </h1>

        <div className="prose max-w-none text-xs md:text-sm text-neutral-600 leading-relaxed font-sans flex flex-col gap-6 uppercase tracking-wider">
          <p className="font-bold">Last Updated: June 20, 2026</p>
          <p>
            AD Atlas Ventures Private Limited (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the AD Atlas Beauty
            e-commerce store. We are committed to protecting your personal information and your privacy.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            1. Information We Collect
          </h3>
          <p>
            We collect personal information that you voluntarily provide to us when registering, making a purchase,
            or expressing interest in obtaining information about our brand products. This includes email addresses,
            names, billing/shipping addresses, contact phone numbers, and payment details.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            2. How We Use Your Information
          </h3>
          <p>
            We process your information for purposes based on legitimate business interests, the fulfillment of
            our contract with you, compliance with our legal obligations, and/or your consent. This includes sending
            order confirmations, billing statements, organizing deliveries, and sending brand newsletters.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            3. Sharing Your Information
          </h3>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services (e.g.
            shipping carriers like BlueDart, Delhivery), to protect your rights, or to fulfill business obligations.
            We do not sell user data to third-party brokers.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            4. Security of Information
          </h3>
          <p>
            We implement appropriate technical and organizational security measures designed to protect the security of
            any personal information we process. Payments are processed through secure gateways like Razorpay with SSL
            encryption, ensuring credit card details are never stored on our servers.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            5. Contact Us
          </h3>
          <p>
            If you have questions or comments about this policy, you may contact our data protection officer at:
            <br />
            Email: {BRAND.email} | Phone: +91 {BRAND.phone}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
