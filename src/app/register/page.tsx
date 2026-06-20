// ============================================
// AD Atlas Beauty — Customer Registration Page
// ============================================

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { SectionContainer } from "@/components/common/SectionContainer";
import { User } from "@/types";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill out all required fields", { style: { borderRadius: "0px" } });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { style: { borderRadius: "0px" } });
      return;
    }

    // Mock successful signup & auto-login
    const mockUser: User = {
      id: `usr-${Date.now()}`,
      name: name,
      email: email,
      phone: phone,
      addresses: [],
      createdAt: new Date().toISOString(),
    };

    login(mockUser, "mock-jwt-token-12345");
    toast.success("Account created successfully! Welcome to AD Atlas Beauty.", {
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

    router.push("/");
  };

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-md bg-white p-8 md:p-12 border border-brand-primary/5">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block text-center">
          Join the Circle
        </span>
        <h1 className="font-heading text-3xl text-brand-primary text-center mb-8 font-bold">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-6">
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
              Password *
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="CREATE PASSWORD"
              className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
            />
          </div>

          <div>
            <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
              Confirm Password *
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="RE-ENTER PASSWORD"
              className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-2"
          >
            Register
          </button>
        </form>

        <div className="flex flex-col gap-3 text-center border-t border-brand-primary/5 pt-6 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
          <span>
            Already have an account?{" "}
            <Link href="/login" className="text-brand-primary hover:text-brand-secondary">
              Login here
            </Link>
          </span>
        </div>
      </div>
    </SectionContainer>
  );
}
