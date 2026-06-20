// ============================================
// AD Atlas Beauty — Collaborations Page
// ============================================

"use client";

import React, { useState } from "react";
import { COLLABORATION_TYPES } from "@/constants";
import { SectionContainer } from "@/components/common/SectionContainer";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Award, Users, Share2, Camera } from "lucide-react";
import toast from "react-hot-toast";

export default function CollaborationsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [collabType, setCollabType] = useState("influencer");
  const [socialLink, setSocialLink] = useState("");
  const [followers, setFollowers] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !socialLink || !followers) {
      toast.error("Please fill out all required fields", { style: { borderRadius: "0px" } });
      return;
    }

    toast.success("Application submitted successfully! Our team will contact you.", {
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

    // Reset Form
    setName("");
    setEmail("");
    setPhone("");
    setSocialLink("");
    setFollowers("");
    setMessage("");
  };

  return (
    <>
      {/* Editorial Header */}
      <SectionContainer className="bg-brand-bg pt-32 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block">
            Co-Create Beauty
          </span>
          <AnimatedHeading
            text="Collaborate With Us"
            tag="h1"
            className="text-4xl md:text-6xl font-heading text-brand-primary mb-6 font-bold leading-tight"
          />
          <p className="text-xs md:text-sm font-sans tracking-widest text-neutral-500 uppercase leading-loose max-w-xl mx-auto">
            Join the AD Atlas Beauty network of influencers, makeup artists, and brand ambassadors.
          </p>
        </div>
      </SectionContainer>

      {/* Program Pillars */}
      <SectionContainer className="bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {COLLABORATION_TYPES.map((prog, i) => (
              <div key={i} className="bg-brand-light/50 p-8 border border-brand-primary/5 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center mb-6 mx-auto">
                    <Camera className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-brand-primary mb-3 font-semibold">
                    {prog.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-sans mb-6">
                    {prog.description}
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent border border-brand-accent/30 py-1.5 px-4 w-fit mx-auto">
                  Req: {prog.minFollowers}
                </span>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto bg-brand-light p-8 md:p-12 border border-brand-primary/5">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-primary text-center mb-10 font-bold">
              Submit Application
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="YOUR NAME"
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="PHONE NUMBER"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Program Type *
                  </label>
                  <select
                    value={collabType}
                    onChange={(e) => setCollabType(e.target.value)}
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary cursor-pointer"
                  >
                    <option value="influencer">Influencer Program</option>
                    <option value="makeup-artist">Makeup Artist MUA</option>
                    <option value="creator">Beauty Creator</option>
                    <option value="ambassador">Brand Ambassador</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Social Media Profile Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={socialLink}
                    onChange={(e) => setSocialLink(e.target.value)}
                    placeholder="HTTPS://INSTAGRAM.COM/YOURNAME"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                    Follower Count *
                  </label>
                  <input
                    type="text"
                    required
                    value={followers}
                    onChange={(e) => setFollowers(e.target.value)}
                    placeholder="E.G. 15K"
                    className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                  Why do you want to collaborate with AD Atlas?
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="TELL US ABOUT YOUR STYLE, YOUR MAKEUP PHILOSOPHY, AND WHAT PRODUCTS EXCITES YOU..."
                  className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-4"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
