// ============================================
// AD Atlas Beauty — Customer Login Page
// ============================================

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { SectionContainer } from "@/components/common/SectionContainer";
import { User } from "@/types";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password", { style: { borderRadius: "0px" } });
      return;
    }

    // Mock successful authentication
    const mockUser: User = {
      id: "usr-01",
      name: "Priya Sharma",
      email: email,
      addresses: [
        {
          id: "addr-01",
          name: "Priya Sharma",
          phone: "8606630088",
          line1: "Unit-400A, 4th Floor, 12 Ajit Singh House",
          line2: "Yusuf Sarai Commercial Complex, Green Park",
          city: "New Delhi",
          state: "Delhi",
          pincode: "110016",
          isDefault: true,
        },
      ],
      createdAt: new Date().toISOString(),
    };

    login(mockUser, "mock-jwt-token-12345");
    toast.success("Welcome back to AD Atlas Beauty!", {
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

    // Check if admin log-in credentials to route to admin panel, or standard home
    if (email.toLowerCase().includes("admin")) {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-md bg-white p-8 md:p-12 border border-brand-primary/5">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-4 block text-center">
          Access Your Account
        </span>
        <h1 className="font-heading text-3xl text-brand-primary text-center mb-8 font-bold">
          Customer Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-6">
          <div>
            <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL"
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
              placeholder="ENTER PASSWORD"
              className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="flex flex-col gap-3 text-center border-t border-brand-primary/5 pt-6 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
          <span>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-brand-primary hover:text-brand-secondary">
              Register Here
            </Link>
          </span>
          <span className="text-neutral-300">
            For admin demo: use email &ldquo;admin@adatlasventures.com&rdquo;
          </span>
        </div>
      </div>
    </SectionContainer>
  );
}
