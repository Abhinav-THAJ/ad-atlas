// ============================================
// AD Atlas Beauty — Animation Variants Library
// ============================================

import { Variants } from "framer-motion";

type CubicBezier = [number, number, number, number];

export const fadeUp = (delay = 0, duration = 0.8): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.215, 0.61, 0.355, 1] as CubicBezier, // easeOutCubic
      delay,
    },
  },
});

export const fadeLeft = (delay = 0, duration = 0.8): Variants => ({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: [0.215, 0.61, 0.355, 1] as CubicBezier,
      delay,
    },
  },
});

export const fadeRight = (delay = 0, duration = 0.8): Variants => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: [0.215, 0.61, 0.355, 1] as CubicBezier,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerText = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as CubicBezier,
    },
  },
};

export const revealMask = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1] as CubicBezier, // easeInOutQuart
    },
  },
};

export const imageZoom = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.25, 1, 0.5, 1] as CubicBezier,
    },
  },
};

export const hoverLift = {
  hover: {
    y: -8,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1] as CubicBezier,
    },
  },
};
