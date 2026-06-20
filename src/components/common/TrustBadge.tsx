// ============================================
// AD Atlas Beauty — Trust Badge Component
// ============================================

import React from "react";
import { Leaf, ShieldCheck, Flag, FlaskConical, Gem, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: "leaf" | "shield-check" | "flag" | "flask-conical" | "gem" | "heart-handshake";
  title: string;
  description?: string;
  className?: string;
}

export function TrustBadge({ icon, title, description, className }: TrustBadgeProps) {
  const IconMap = {
    leaf: Leaf,
    "shield-check": ShieldCheck,
    flag: Flag,
    "flask-conical": FlaskConical,
    gem: Gem,
    "heart-handshake": HeartHandshake,
  };

  const IconComponent = IconMap[icon];

  return (
    <div className={cn("flex flex-col items-center text-center p-4 group", className)}>
      <div className="w-16 h-16 rounded-full border border-brand-accent/20 flex items-center justify-center mb-4 bg-brand-light/50 group-hover:bg-brand-primary group-hover:text-white transition-all duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)]">
        <IconComponent className="w-6 h-6 text-brand-primary group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1.5} />
      </div>
      <h4 className="font-heading text-lg text-brand-primary mb-1.5">{title}</h4>
      {description && (
        <p className="text-[11px] font-sans tracking-wide text-neutral-500 max-w-[150px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default TrustBadge;
