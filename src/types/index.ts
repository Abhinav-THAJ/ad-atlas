// ============================================
// AD Atlas Beauty — Type Definitions
// ============================================

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  images: string[];
  video?: string;
  category: ProductCategory;
  tags: string[];
  ingredients: string[];
  benefits: string[];
  howToUse: string[];
  sku: string;
  stock: number;
  status: "active" | "coming-soon" | "out-of-stock";
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  createdAt: string;
}

export type ProductCategory =
  | "lips"
  | "face"
  | "skin"
  | "tools"
  | "fragrance";

export interface CartItem {
  product: Product;
  quantity: number;
  shade?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  video?: string;
  isVerified: boolean;
  createdAt: string;
  helpful: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
  createdAt: string;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentId?: string;
  address: Address;
  coupon?: string;
  trackingId?: string;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: "percentage" | "fixed";
  minOrder: number;
  maxDiscount?: number;
  validFrom: string;
  validTo: string;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
  position: "hero" | "offer" | "section";
  isActive: boolean;
  order: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface CollaborationForm {
  name: string;
  email: string;
  phone: string;
  type: "influencer" | "makeup-artist" | "creator" | "ambassador";
  socialMedia: string;
  followers: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

export interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

export interface ComingSoonProduct {
  id: string;
  name: string;
  category: string;
  image: string;
}
