// ============================================
// AD Atlas Beauty — Shop Page
// ============================================

"use client";

import React, { useState, useMemo } from "react";
import { products } from "@/data";
import { COMING_SOON_PRODUCTS } from "@/constants";
import { Product } from "@/types";
import { ProductCard } from "@/components/common/ProductCard";
import { ComingSoonCard } from "@/components/common/ComingSoonCard";
import { QuickViewModal } from "@/components/common/QuickViewModal";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(3000);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "lips", name: "Lips" },
    { id: "face", name: "Face" },
    { id: "skin", name: "Skin" },
    { id: "tools", name: "Tools" },
    { id: "coming-soon", name: "Coming Soon" },
  ];

  // Filtering products
  const filteredProducts = useMemo(() => {
    if (activeCategory === "coming-soon") return [];

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = (product.salePrice || product.price) <= priceRange;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [activeCategory, searchQuery, priceRange]);

  // Sorting products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-low") {
      return list.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    }
    if (sortBy === "price-high") {
      return list.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    }
    if (sortBy === "rating") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    return list; // default featured
  }, [filteredProducts, sortBy]);

  // Filter coming soon items
  const filteredComingSoon = useMemo(() => {
    if (activeCategory !== "all" && activeCategory !== "coming-soon") {
      return COMING_SOON_PRODUCTS.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    if (activeCategory === "coming-soon") {
      return COMING_SOON_PRODUCTS;
    }
    return []; // Don't show coming soon in "All Products" main list by default, keep grid clean
  }, [activeCategory]);

  return (
    <>
      <SectionContainer className="bg-brand-bg pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Header titles */}
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-3 block">
              Curated Science-Backed Beauty
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-brand-primary font-bold">
              The AD Atlas Atelier
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar filter column */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary mb-4 pb-2 border-b border-brand-primary/10">
                  Categories
                </h3>
                <div className="flex flex-col gap-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-left text-xs uppercase tracking-wider py-1.5 transition-colors cursor-pointer ${
                        activeCategory === cat.id
                          ? "text-brand-primary font-black"
                          : "text-neutral-500 hover:text-brand-primary"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {activeCategory !== "coming-soon" && (
                <>
                  {/* Price Filter range */}
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary mb-4 pb-2 border-b border-brand-primary/10">
                      Filter by Price
                    </h3>
                    <div className="flex flex-col gap-2">
                      <input
                        type="range"
                        min="1000"
                        max="3000"
                        step="100"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full accent-brand-primary bg-neutral-200"
                      />
                      <div className="flex justify-between text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
                        <span>Up to ₹{priceRange}</span>
                        <span>Max ₹3,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick search input */}
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary mb-4 pb-2 border-b border-brand-primary/10">
                      Search Collection
                    </h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="SEARCH PRODUCT..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-brand-primary/10 bg-white px-4 py-3 text-[10px] tracking-widest uppercase focus:outline-none focus:border-brand-primary placeholder:text-neutral-400"
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Products grid area */}
            <div className="lg:col-span-3">
              {activeCategory !== "coming-soon" && (
                <div className="flex justify-between items-center mb-8 border-b border-brand-primary/5 pb-4">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                    Showing {sortedProducts.length} results
                  </span>

                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-transparent border-none text-[10px] font-bold tracking-widest uppercase text-neutral-500 focus:outline-none cursor-pointer"
                    >
                      <option value="featured">Sort by: Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Products items grid */}
              {activeCategory !== "coming-soon" && sortedProducts.length === 0 ? (
                <div className="text-center py-20 bg-white/40 border border-brand-primary/5">
                  <p className="font-heading text-lg text-neutral-500 mb-2">No active products match filters</p>
                  <p className="text-xs text-neutral-400">Try adjusting your price range or search terms</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={(p) => setSelectedProduct(p)}
                    />
                  ))}
                </div>
              )}

              {/* Display coming soon products under this category if any */}
              {filteredComingSoon.length > 0 && (
                <div className="mt-20">
                  <h3 className="text-2xl font-heading text-brand-primary font-bold mb-8 pb-3 border-b border-brand-primary/5 uppercase tracking-wide">
                    Future Releases Under {activeCategory === "all" || activeCategory === "coming-soon" ? "All Categories" : activeCategory}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {filteredComingSoon.map((product) => (
                      <ComingSoonCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Quick View Drawer Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
