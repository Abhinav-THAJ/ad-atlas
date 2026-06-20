// ============================================
// AD Atlas Beauty — Brand Constants
// ============================================

export const BRAND = {
  name: "AD Atlas",
  fullName: "AD Atlas Ventures Private Limited",
  tagline: "Luxury. Science. You.",
  description:
    "Premium beauty products crafted with science-backed formulations designed for modern beauty.",
  email: "hello@adatlasventures.com",
  phone: "8606630088",
  whatsapp: "918606630088",
  address: {
    line1: "Unit-400A, 4th Floor",
    line2: "12 Ajit Singh House, Yusuf Sarai Commercial Complex",
    area: "Green Park",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110016",
    country: "India",
    full: "Unit-400A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex, Green Park, New Delhi – 110016",
  },
  social: {
    instagram: "https://instagram.com/adatlasbeauty",
    facebook: "https://facebook.com/adatlasbeauty",
    twitter: "https://twitter.com/adatlasbeauty",
    youtube: "https://youtube.com/@adatlasbeauty",
    pinterest: "https://pinterest.com/adatlasbeauty",
  },
} as const;

export const NAV_LINKS = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "Reviews", href: "/reviews" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  shop: [
    { name: "Matte Lipstick", href: "/shop/matte-lipstick" },
    { name: "Liquid Lipstick", href: "/shop/liquid-lipstick" },
    { name: "Coming Soon", href: "/shop?filter=coming-soon" },
    { name: "Best Sellers", href: "/shop?sort=best-sellers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Ingredients", href: "/ingredients" },
    { name: "Reviews", href: "/reviews" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "Track Order", href: "/track-order" },
    { name: "Shipping & Delivery", href: "/shipping" },
    { name: "Returns & Refunds", href: "/refund-policy" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
} as const;

export const OFFER_MESSAGES = [
  "Free Shipping Above ₹999 ✨",
  "Flat 10% Off On First Order — Use Code: ATLAS10",
  "Limited Time Luxury Launch Offer 💜",
  "Cruelty-Free & Dermatologically Tested",
] as const;

export const TRUST_BADGES = [
  {
    icon: "leaf",
    title: "Cruelty Free",
    description: "No animal testing, ever",
  },
  {
    icon: "shield-check",
    title: "Dermatologically Tested",
    description: "Clinically proven safe",
  },
  {
    icon: "flag",
    title: "Made In India",
    description: "Proudly crafted in India",
  },
  {
    icon: "flask-conical",
    title: "Science Backed",
    description: "Research-driven formulas",
  },
  {
    icon: "gem",
    title: "Premium Ingredients",
    description: "Only the finest materials",
  },
  {
    icon: "heart-handshake",
    title: "Safe & Effective",
    description: "Gentle yet powerful",
  },
] as const;

export const COMING_SOON_PRODUCTS = [
  { id: "cs-1", name: "Lip Polish", category: "Lips" },
  { id: "cs-2", name: "Lip Serum", category: "Lips" },
  { id: "cs-3", name: "Lip Balm", category: "Lips" },
  { id: "cs-4", name: "Lip Pigment", category: "Lips" },
  { id: "cs-5", name: "Foundation", category: "Face" },
  { id: "cs-6", name: "Concealer", category: "Face" },
  { id: "cs-7", name: "Sunscreen", category: "Skin" },
  { id: "cs-8", name: "Moisturizer", category: "Skin" },
  { id: "cs-9", name: "Primer", category: "Face" },
  { id: "cs-10", name: "Perfume", category: "Fragrance" },
  { id: "cs-11", name: "Makeup Fixer", category: "Face" },
  { id: "cs-12", name: "Face Masks", category: "Skin" },
  { id: "cs-13", name: "Pimple Cream", category: "Skin" },
  { id: "cs-14", name: "Cleansing Tissues", category: "Skin" },
  { id: "cs-15", name: "Brushes", category: "Tools" },
  { id: "cs-16", name: "Beauty Blender", category: "Tools" },
] as const;

export const COLLABORATION_TYPES = [
  {
    type: "influencer" as const,
    title: "Influencers",
    description: "Join our network of beauty influencers",
    minFollowers: "10K+",
  },
  {
    type: "makeup-artist" as const,
    title: "Makeup Artists",
    description: "Partner with us as a professional MUA",
    minFollowers: "5K+",
  },
  {
    type: "creator" as const,
    title: "Beauty Creators",
    description: "Create content with our products",
    minFollowers: "5K+",
  },
  {
    type: "ambassador" as const,
    title: "Brand Ambassadors",
    description: "Represent AD Atlas in your community",
    minFollowers: "1K+",
  },
] as const;

export const SHIPPING_CONFIG = {
  freeShippingThreshold: 999,
  standardShipping: 99,
  expressShipping: 199,
  estimatedDays: {
    standard: "5-7 business days",
    express: "2-3 business days",
  },
} as const;
