// ============================================
// AD Atlas Beauty — Footer Component
// ============================================

import React from "react";
import Link from "next/link";
import { BRAND, FOOTER_LINKS } from "@/constants";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#FAF7F2] border-t border-brand-primary/10 pt-14 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Info section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-8 pb-12 md:pb-16 border-b border-white/5">
          {/* Logo & Info column */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <Link
              href="/"
              className="text-xl md:text-2xl font-heading font-black tracking-[0.3em] uppercase text-white mb-4 md:mb-6"
            >
              AD Atlas
            </Link>
            <p className="text-xs font-light text-neutral-400 leading-relaxed uppercase tracking-wider mb-6 md:mb-8 max-w-sm">
              {BRAND.description} Science-backed, luxury formulas crafted for premium skin health.
            </p>
            <div className="flex flex-col gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-3.5">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                {BRAND.email}
              </span>
              <span className="flex items-center gap-3.5">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                +91 {BRAND.phone}
              </span>
              <span className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{BRAND.address.full}</span>
              </span>
            </div>
          </div>

          {/* Links columns — 2-col grid on mobile, individual cols on lg */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:contents gap-8 md:gap-6 lg:col-span-3">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-4 md:mb-6">
                Shop Collections
              </h4>
              <ul className="flex flex-col gap-2.5 md:gap-3 text-xs text-neutral-400">
                {FOOTER_LINKS.shop.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-4 md:mb-6">
                About The Brand
              </h4>
              <ul className="flex flex-col gap-2.5 md:gap-3 text-xs text-neutral-400">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-4 md:mb-6">
                Customer Care
              </h4>
              <ul className="flex flex-col gap-2.5 md:gap-3 text-xs text-neutral-400">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <p className="text-[10px] tracking-widest text-neutral-500 uppercase">
              &copy; {new Date().getFullYear()} AD Atlas Ventures Private Limited. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-[9px] uppercase tracking-widest text-neutral-500">
              {FOOTER_LINKS.legal.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-neutral-300">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Payment Badges */}
          <div className="flex flex-col items-center md:items-end gap-2 md:gap-3">
            <span className="text-[9px] tracking-widest text-neutral-500 uppercase">
              Secure Checkout Partners
            </span>
            <div className="flex items-center gap-3 md:gap-4 text-xs font-bold text-neutral-500 select-none">
              <span>RAZORPAY</span>
              <span className="text-neutral-700">|</span>
              <span>UPI</span>
              <span className="text-neutral-700">|</span>
              <span>CARDS</span>
              <span className="text-neutral-700">|</span>
              <span>NET BANKING</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
