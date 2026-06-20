// ============================================
// AD Atlas Beauty — Terms & Conditions
// ============================================

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { BRAND } from "@/constants";

export default function TermsPage() {
  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-8 md:p-16 border border-brand-primary/5">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block text-center">
          Terms of Service
        </span>
        <h1 className="font-heading text-4xl text-brand-primary text-center mb-12 font-bold">
          Terms & Conditions
        </h1>

        <div className="prose max-w-none text-xs md:text-sm text-neutral-600 leading-relaxed font-sans flex flex-col gap-6 uppercase tracking-wider">
          <p className="font-bold">Last Updated: June 20, 2026</p>
          <p>
            Welcome to the AD Atlas Beauty e-commerce platform. These terms and conditions outline the rules and
            regulations for the use of AD Atlas Ventures Private Limited&apos;s Website.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            1. Intellectual Property Rights
          </h3>
          <p>
            Other than the content you own, under these Terms, AD Atlas Ventures Private Limited and/or its licensors
            own all the intellectual property rights and materials contained in this Website. You are granted limited
            license only for purposes of viewing the material contained on this Website.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            2. Customer Account Responsibility
          </h3>
          <p>
            If you create an account on our platform, you are responsible for maintaining the confidentiality of your
            account credentials and restricting access to your devices. You agree to accept responsibility for all
            activities that occur under your user account.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            3. Accuracy of Billing and Account Details
          </h3>
          <p>
            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or
            cancel quantities purchased per person or per order. You agree to provide current, complete, and accurate
            purchase and account information for all purchases made at our store.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            4. Limitation of Liability
          </h3>
          <p>
            In no event shall AD Atlas Ventures Private Limited, nor any of its officers, directors, and employees,
            be held liable for anything arising out of or in any way connected with your use of this Website. Our
            total liability is limited strictly to the product purchase price.
          </p>

          <h3 className="font-heading text-lg text-brand-primary font-bold mt-4 lowercase first-letter:uppercase">
            5. Governing Law & Jurisdiction
          </h3>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the
            non-exclusive jurisdiction of the state and federal courts located in New Delhi for the resolution of
            any disputes.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
