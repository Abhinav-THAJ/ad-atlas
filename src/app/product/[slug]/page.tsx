// ============================================
// AD Atlas Beauty — Product Details Page
// ============================================

"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, Share2, ChevronRight, Award, MessageSquare } from "lucide-react";
import { products, reviews as mockReviews } from "@/data";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { Product, Review } from "@/types";
import { SectionContainer } from "@/components/common/SectionContainer";
import { LuxuryButton } from "@/components/common/LuxuryButton";
import { ProductCard } from "@/components/common/ProductCard";
import toast from "react-hot-toast";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"desc" | "ingredients" | "benefits" | "how">("desc");
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [deliveryEstimate, setDeliveryEstimate] = useState<string | null>(null);

  // Review Form state
  const [reviewName, setReviewName] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [localReviews, setLocalReviews] = useState<Review[]>([]);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  // Pull items array so we don't reference `product` before it is assigned
  const wishlistItems = useWishlistStore((state) => state.items);

  // Find target product
  const product = useMemo(() => {
    return products.find((p) => p.slug === slug);
  }, [slug]);

  // Derive wishlist membership AFTER product is resolved
  const hasWishlist = product ? wishlistItems.some((p) => p.id === product.id) : false;

  // Load reviews matching this product
  const productReviews = useMemo(() => {
    if (!product) return [];
    const baseReviews = mockReviews.filter((r) => r.productId === product.id);
    return [...localReviews, ...baseReviews];
  }, [product, localReviews]);

  // Related products (from same category/other products)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.id !== product.id).slice(0, 3);
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, quantity);
    toast.success(`${quantity} x ${product.title} added to cart!`, {
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
  };

  const handleWishlist = () => {
    if (!product) return;
    toggleWishlist(product);
    if (!hasWishlist) {
      toast.success("Added to wishlist", {
        icon: "❤️",
        style: {
          background: "#4B1F5E",
          color: "#ffffff",
          borderRadius: "0px",
        },
      });
    } else {
      toast.success("Removed from wishlist", {
        style: {
          background: "#1c1c1c",
          color: "#ffffff",
          borderRadius: "0px",
        },
      });
    }
  };

  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length !== 6 || isNaN(Number(pincode))) {
      toast.error("Please enter a valid 6-digit PIN code", {
        style: { borderRadius: "0px" },
      });
      return;
    }
    // Simulate estimate response
    setDeliveryEstimate("Delivering in 3-5 business days. Eligible for Cash on Delivery.");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Product link copied to clipboard!", {
      style: { borderRadius: "0px" },
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    if (!reviewName || !reviewTitle || !reviewContent) {
      toast.error("Please fill out all review fields", {
        style: { borderRadius: "0px" },
      });
      return;
    }

    const newReview: Review = {
      id: `rev-local-${Date.now()}`,
      productId: product.id,
      userId: `user-local-${Date.now()}`,
      userName: reviewName,
      rating: reviewRating,
      title: reviewTitle,
      content: reviewContent,
      isVerified: true,
      createdAt: new Date().toISOString().split("T")[0],
      helpful: 0,
    };

    setLocalReviews((prev) => [newReview, ...prev]);
    toast.success("Thank you for your review! It is now active.", {
      style: {
        background: "#4B1F5E",
        color: "#ffffff",
        borderRadius: "0px",
      },
    });

    // Reset review inputs
    setReviewName("");
    setReviewTitle("");
    setReviewContent("");
    setReviewRating(5);
  };

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-40 text-center">
        <h2 className="font-heading text-3xl text-brand-primary font-bold mb-4">Product Not Found</h2>
        <p className="text-neutral-500 mb-8">The requested product could not be found.</p>
        <Link href="/shop" className="bg-brand-primary text-white px-8 py-3 uppercase tracking-widest text-xs font-bold">
          Back to Shop
        </Link>
      </div>
    );
  }

  const isSale = product.salePrice && product.salePrice < product.price;

  return (
    <>
      {/* Breadcrumb navigation */}
      <div className="bg-brand-light py-4 border-b border-brand-primary/5 pt-28">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center gap-2 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-brand-primary">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-primary">{product.title}</span>
        </div>
      </div>

      <SectionContainer className="bg-brand-bg pt-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery images left column */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] bg-white border border-brand-primary/5 w-full overflow-hidden">
                <Image
                  src={product.images[activeImage]}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Grid of thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-[4/5] bg-white border transition-all duration-300 ${
                      activeImage === index ? "border-brand-primary opacity-100" : "border-brand-primary/10 opacity-70"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product details info right column */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block mb-3">
                  {product.category}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl text-brand-primary font-bold mb-4">
                  {product.title}
                </h1>

                {/* Rating stats */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-brand-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-brand-accent" : "text-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                    {product.rating} ({productReviews.length} reviews)
                  </span>
                </div>

                {/* Pricing info */}
                <div className="flex items-center gap-4 mb-6">
                  {isSale ? (
                    <>
                      <span className="text-neutral-400 line-through text-base">₹{product.price}</span>
                      <span className="text-brand-primary font-black text-2xl">₹{product.salePrice}</span>
                      <span className="text-[9px] font-bold tracking-widest uppercase bg-brand-accent text-white px-2 py-0.5">
                        Save ₹{product.price - (product.salePrice || 0)}
                      </span>
                    </>
                  ) : (
                    <span className="text-brand-primary font-black text-2xl">₹{product.price}</span>
                  )}
                </div>

                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans mb-8">
                  {product.description}
                </p>

                {/* Shipping Delivery estimate tool */}
                <div className="border-t border-b border-brand-primary/5 py-6 mb-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-3 flex items-center gap-2">
                    <Truck className="w-4 h-4" /> Check Shipping Availability
                  </h3>
                  <form onSubmit={handleCheckDelivery} className="flex gap-2 max-w-sm">
                    <input
                      type="text"
                      placeholder="ENTER 6-DIGIT PINCODE"
                      maxLength={6}
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="flex-grow border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest focus:outline-none focus:border-brand-primary"
                    />
                    <button
                      type="submit"
                      className="bg-brand-primary text-white text-[9px] tracking-widest uppercase font-bold px-6 py-2.5 hover:bg-brand-secondary transition-colors"
                    >
                      Check
                    </button>
                  </form>
                  {deliveryEstimate && (
                    <p className="text-[11px] text-brand-secondary font-semibold uppercase tracking-wider mt-3">
                      {deliveryEstimate}
                    </p>
                  )}
                </div>

                {/* Quantity and Checkout action panel — stacks on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                  <div className="flex gap-3">
                    {/* Qty selector */}
                    <div className="flex items-center border border-brand-primary/10 bg-white flex-shrink-0">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="px-3 md:px-4 py-3 text-neutral-500 hover:bg-brand-light font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 md:px-4 font-semibold text-sm">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="px-3 md:px-4 py-3 text-neutral-500 hover:bg-brand-light font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Wishlist */}
                    <button
                      onClick={handleWishlist}
                      className={`border border-brand-primary px-4 md:px-5 hover:bg-brand-primary hover:text-white transition-all duration-300 flex-shrink-0 ${
                        hasWishlist ? "bg-brand-primary text-white" : "text-brand-primary"
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart className={`w-4 h-4 ${hasWishlist ? "fill-brand-accent stroke-brand-accent" : ""}`} />
                    </button>

                    {/* Share */}
                    <button
                      onClick={handleShare}
                      className="border border-brand-primary/10 px-3 md:p-4 text-neutral-600 hover:border-brand-primary transition-colors flex-shrink-0 flex items-center justify-center"
                      aria-label="Share product"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to cart — full width */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-grow bg-brand-primary hover:bg-brand-secondary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Safety Badges certificates */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 border-t border-brand-primary/5 pt-5 md:pt-6 text-[10px] uppercase tracking-wider text-neutral-500">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  100% Secure Payments
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  Certified Authentic
                </span>
              </div>
            </div>
          </div>

          {/* Product Tabs information section */}
          <div className="mt-16 md:mt-24">
            {/* Horizontally scrollable tabs on mobile */}
            <div className="flex border-b border-brand-primary/10 pb-0 gap-0 overflow-x-auto scrollbar-none">
              {(["desc", "ingredients", "benefits", "how"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] pb-3 px-3 md:px-6 transition-colors relative cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab ? "text-brand-primary font-black" : "text-neutral-400 hover:text-brand-primary"
                  }`}
                >
                  {tab === "desc"
                    ? "Description"
                    : tab === "ingredients"
                    ? "Ingredients"
                    : tab === "benefits"
                    ? "Benefits"
                    : "How to Use"}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="max-w-3xl mx-auto py-10">
              {activeTab === "desc" && (
                <p className="text-sm text-neutral-600 leading-relaxed font-sans text-center">
                  {product.description}
                </p>
              )}
              {activeTab === "ingredients" && (
                <div className="flex flex-wrap justify-center gap-2">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="bg-white border border-brand-primary/10 px-4 py-2 text-[10px] tracking-wider uppercase font-bold text-brand-primary">
                      {ing}
                    </span>
                  ))}
                </div>
              )}
              {activeTab === "benefits" && (
                <ul className="flex flex-col gap-3 max-w-md mx-auto">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-wider text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === "how" && (
                <ol className="flex flex-col gap-4 max-w-lg mx-auto">
                  {product.howToUse.map((step, i) => (
                    <li key={i} className="flex gap-4 items-start text-xs text-neutral-600 font-sans leading-relaxed">
                      <span className="font-heading font-black text-lg text-brand-accent leading-none">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>

          {/* Related products recommendation section */}
          {relatedProducts.length > 0 && (
            <div className="mt-32">
              <h2 className="font-heading text-3xl text-brand-primary text-center mb-16 font-bold">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-4xl mx-auto">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {/* Customer Reviews & Submit Review Form Section */}
          <div className="mt-32 border-t border-brand-primary/5 pt-20">
            <h2 className="font-heading text-3xl text-brand-primary text-center mb-16 font-bold flex items-center justify-center gap-3">
              <MessageSquare className="w-6 h-6 text-brand-accent" />
              Verified Reviews & Ratings
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Product Review Submission Form */}
              <div className="lg:col-span-1 bg-brand-light/60 p-6 border border-brand-primary/5 h-fit">
                <h3 className="font-heading text-xl text-brand-primary font-bold mb-6">Write a Review</h3>
                <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Rating Stars
                    </label>
                    <div className="flex gap-1 text-brand-accent">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="cursor-pointer"
                        >
                          <Star className={`w-5 h-5 ${star <= reviewRating ? "fill-brand-accent" : "text-neutral-200"}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="E.G. PRIYA SHARMA"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Review Title
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      placeholder="E.G. ABSOLUTELY GORGEOUS FINISH!"
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Review Content
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      placeholder="SHARE YOUR HONEST FEEDBACK ABOUT TEXTURE, WEAR TIME, AND SHADE PAYOFF..."
                      className="w-full border border-brand-primary/10 bg-white px-4 py-2.5 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3 text-xs font-bold uppercase tracking-widest transition-colors mt-2"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              {/* Reviews List column */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {productReviews.length === 0 ? (
                  <div className="text-center py-10 bg-white/40 border border-brand-primary/5">
                    <p className="text-xs uppercase tracking-wider text-neutral-400">No reviews yet. Be the first to share your thoughts!</p>
                  </div>
                ) : (
                  productReviews.map((rev) => (
                    <div key={rev.id} className="bg-white border border-brand-primary/5 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-1 text-brand-accent">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < rev.rating ? "fill-brand-accent" : "text-neutral-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-neutral-400 font-bold uppercase">
                          {rev.createdAt}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg text-brand-primary mb-2 italic">
                        &ldquo;{rev.title}&rdquo;
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed mb-4">
                        {rev.content}
                      </p>
                      <div className="flex items-center justify-between border-t border-brand-primary/5 pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-heading font-semibold text-brand-primary uppercase">
                            {rev.userName}
                          </span>
                          {rev.isVerified && (
                            <span className="text-[9px] font-bold text-brand-secondary tracking-widest uppercase flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-brand-accent" /> Verified Buyer
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
