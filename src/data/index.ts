// ============================================
// AD Atlas Beauty — Product Data (Mock)
// ============================================

import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "velvet-matte-lipstick",
    title: "Velvet Matte Lipstick",
    description:
      "Experience the pinnacle of luxury lip color with our Velvet Matte Lipstick. Formulated with science-backed ingredients including Vitamin E, Jojoba Oil, and Hyaluronic Acid, this lipstick delivers intense, full-coverage color while keeping your lips hydrated and nourished throughout the day. The velvety matte finish provides a sophisticated look that lasts up to 12 hours without feathering or fading.",
    shortDescription:
      "Ultra-luxurious matte finish lipstick with 12-hour wear and hydrating formula.",
    price: 1899,
    salePrice: 1599,
    images: [
      "/images/matte-lipstick.png",
      "/images/matte-lipstick.png",
      "/images/matte-lipstick.png",
    ],
    category: "lips",
    tags: ["matte", "lipstick", "long-lasting", "hydrating", "best-seller"],
    ingredients: [
      "Vitamin E",
      "Jojoba Oil",
      "Hyaluronic Acid",
      "Shea Butter",
      "Natural Pigments",
      "Candelilla Wax",
      "Coconut Oil Derivative",
    ],
    benefits: [
      "12-hour long-lasting wear",
      "Intense full-coverage pigmentation",
      "Hydrating matte formula",
      "Non-feathering & non-fading",
      "Dermatologically tested",
      "Cruelty-free formulation",
    ],
    howToUse: [
      "Exfoliate lips gently before application",
      "Line lips with a matching lip liner for precision",
      "Apply directly from the bullet starting from the center",
      "Build color intensity with a second coat if desired",
      "Blot with tissue for an ultra-matte finish",
    ],
    sku: "ATLM-001",
    stock: 150,
    status: "active",
    rating: 4.8,
    reviewCount: 247,
    isFeatured: true,
    isBestSeller: true,
    createdAt: "2024-01-15",
  },
  {
    id: "prod-002",
    slug: "luminous-liquid-lipstick",
    title: "Luminous Liquid Lipstick",
    description:
      "Indulge in the ultimate liquid lip luxury. Our Luminous Liquid Lipstick combines cutting-edge cosmetic science with premium ingredients to deliver a weightless, high-impact color that sets to a beautiful satin-matte finish. Infused with Rose Hip Oil and Vitamin C, it nourishes your lips while providing stunning, transfer-proof color that stays flawless from morning to night.",
    shortDescription:
      "Weightless liquid lipstick with satin-matte finish and transfer-proof formula.",
    price: 2199,
    salePrice: 1899,
    images: [
      "/images/liquid-lipstick.png",
      "/images/liquid-lipstick.png",
      "/images/liquid-lipstick.png",
    ],
    category: "lips",
    tags: [
      "liquid",
      "lipstick",
      "transfer-proof",
      "satin-matte",
      "best-seller",
    ],
    ingredients: [
      "Rose Hip Oil",
      "Vitamin C",
      "Argan Oil",
      "Natural Pigments",
      "Dimethicone",
      "Isododecane",
      "Kaolin Clay",
    ],
    benefits: [
      "Transfer-proof formula",
      "Weightless satin-matte finish",
      "Nourishing lip care ingredients",
      "Precision doe-foot applicator",
      "Buildable coverage",
      "Dermatologically tested",
    ],
    howToUse: [
      "Shake well before use",
      "Use the doe-foot applicator to outline the lips",
      "Fill in with smooth, even strokes",
      "Allow 30 seconds to set",
      "Apply a second coat for deeper intensity",
    ],
    sku: "ATLL-001",
    stock: 120,
    status: "active",
    rating: 4.9,
    reviewCount: 189,
    isFeatured: true,
    isBestSeller: true,
    createdAt: "2024-01-15",
  },
];

export const reviews = [
  {
    id: "rev-001",
    productId: "prod-001",
    userId: "user-001",
    userName: "Priya Sharma",
    rating: 5,
    title: "Absolutely stunning color!",
    content:
      "I've tried dozens of luxury lipsticks and this is by far the best I've used. The color payoff is incredible, and it actually lasts the full 12 hours they promise. My lips feel moisturized even after wearing it all day. Worth every rupee!",
    isVerified: true,
    createdAt: "2024-03-15",
    helpful: 34,
  },
  {
    id: "rev-002",
    productId: "prod-001",
    userId: "user-002",
    userName: "Ananya Patel",
    rating: 5,
    title: "Best matte lipstick in India!",
    content:
      "The formula is so smooth and the shade range is gorgeous. I love that it's cruelty-free and actually uses good ingredients. Finally, a premium Indian brand that delivers international quality!",
    isVerified: true,
    createdAt: "2024-03-20",
    helpful: 28,
  },
  {
    id: "rev-003",
    productId: "prod-002",
    userId: "user-003",
    userName: "Meera Krishnan",
    rating: 5,
    title: "The liquid lipstick of my dreams",
    content:
      "Lightweight, comfortable, and the most beautiful finish I've seen in a liquid lipstick. I wore it to my sister's wedding and got so many compliments. It didn't transfer onto anything — not even my champagne glass!",
    isVerified: true,
    createdAt: "2024-04-01",
    helpful: 42,
  },
  {
    id: "rev-004",
    productId: "prod-001",
    userId: "user-004",
    userName: "Riya Deshmukh",
    rating: 4,
    title: "Luxurious feel, great packaging",
    content:
      "The packaging itself feels so premium — the weight, the gold accents, everything screams luxury. The shade I got is perfect for everyday wear. Only reason for 4 stars is I wish there were more nude shades.",
    isVerified: true,
    createdAt: "2024-04-10",
    helpful: 19,
  },
  {
    id: "rev-005",
    productId: "prod-002",
    userId: "user-005",
    userName: "Kavya Reddy",
    rating: 5,
    title: "Convert from Charlotte Tilbury",
    content:
      "I used to swear by international brands only, but AD Atlas has completely changed my mind. The quality is on par with Charlotte Tilbury and Rare Beauty, but at a much better price point. The science-backed formula really shows!",
    isVerified: true,
    createdAt: "2024-04-15",
    helpful: 56,
  },
  {
    id: "rev-006",
    productId: "prod-002",
    userId: "user-006",
    userName: "Divya Nair",
    rating: 5,
    title: "Perfect for Indian skin tones",
    content:
      "As someone with a medium-deep skin tone, finding the perfect lipstick shade has always been a challenge. AD Atlas nailed it! The shades are clearly designed with Indian beauty in mind. The berry shade is absolutely gorgeous on me.",
    isVerified: true,
    createdAt: "2024-05-01",
    helpful: 38,
  },
];

export const instagramPosts = [
  { id: "ig-1", image: "/images/matte-lipstick.png", likes: 2340 },
  { id: "ig-2", image: "/images/liquid-lipstick.png", likes: 1856 },
  { id: "ig-3", image: "/images/hero-campaign.png", likes: 3120 },
  { id: "ig-4", image: "/images/brand-editorial.png", likes: 2678 },
  { id: "ig-5", image: "/images/ingredients.png", likes: 1432 },
  { id: "ig-6", image: "/images/collaboration.png", likes: 2890 },
];
