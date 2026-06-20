// ============================================
// AD Atlas Beauty — Contact Page
// ============================================

"use client";

import React, { useState } from "react";
import { BRAND } from "@/constants";
import { SectionContainer } from "@/components/common/SectionContainer";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out required fields", { style: { borderRadius: "0px" } });
      return;
    }

    toast.success("Message sent successfully! Our customer support team will write back.", {
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

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${BRAND.whatsapp}?text=Hi%20AD%20Atlas%20Beauty!%20I%20have%20a%20query%20about%20your%20products.`, "_blank");
  };

  return (
    <>
      {/* Editorial Header */}
      <SectionContainer className="bg-brand-bg pt-32 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block">
            Customer Care Support
          </span>
          <AnimatedHeading
            text="Get in Touch"
            tag="h1"
            className="text-4xl md:text-6xl font-heading text-brand-primary mb-6 font-bold leading-tight"
          />
          <p className="text-xs md:text-sm font-sans tracking-widest text-neutral-500 uppercase leading-loose max-w-xl mx-auto">
            Our luxury beauty support team is here to assist you with order status, shade matching, or product formulations.
          </p>
        </div>
      </SectionContainer>

      {/* Main contact area */}
      <SectionContainer className="bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact details left column */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 block">
                  Corporate Head Office
                </span>
                <h2 className="text-3xl font-heading text-brand-primary mb-10 font-bold leading-tight">
                  Reach Out Directly
                </h2>

                <div className="flex flex-col gap-8 mb-12">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                        Call Support
                      </h4>
                      <p className="text-sm font-bold text-brand-primary">+91 {BRAND.phone}</p>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Mon - Sat, 10 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                        Email Inquiry
                      </h4>
                      <p className="text-sm font-bold text-brand-primary">{BRAND.email}</p>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Estimated reply inside 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                        Office Location
                      </h4>
                      <p className="text-sm font-sans font-semibold text-brand-primary leading-relaxed">
                        {BRAND.address.full}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp CTA banner */}
              <div className="bg-brand-light p-6 border border-brand-primary/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1">
                    Need Instant Assistance?
                  </h4>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider">
                    Chat with our cosmetics expert on WhatsApp
                  </p>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Chat
                </button>
              </div>
            </div>

            {/* Submission Form right column */}
            <div className="bg-brand-light p-8 md:p-12 border border-brand-primary/5">
              <h3 className="font-heading text-2xl text-brand-primary mb-8 font-bold">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="FULL NAME"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="E.G. ORDER INQUIRY, FORMULATION QUERY"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Message Content *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="WRITE YOUR MESSAGE..."
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Google Map iframe mock */}
          <div className="mt-20 h-[400px] w-full border border-brand-primary/5 bg-brand-light relative flex items-center justify-center text-center">
            {/* Visual clean Map mock */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent flex flex-col items-center justify-center p-6">
              <MapPin className="w-8 h-8 text-brand-accent mb-4" />
              <h4 className="font-heading text-lg text-brand-primary font-bold mb-2">Google Maps Integration</h4>
              <p className="text-xs text-neutral-500 max-w-sm uppercase tracking-wide leading-relaxed">
                Yusuf Sarai Commercial Complex, Green Park, New Delhi – 110016
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
