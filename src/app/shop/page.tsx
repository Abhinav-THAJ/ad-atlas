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
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(3000);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

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
    return [];
  }, [activeCategory]);

  const FilterPanel = () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-primary mb-4 pb-2 border-b border-brand-primary/10">
          Categories
        </h3>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setFiltersOpen(false);
              }}
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
  );

  return (
    <>
      <SectionContainer className="bg-brand-bg pt-28 md:pt-32">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          {/* Header titles */}
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary mb-3 block">
              Curated Science-Backed Beauty
            </span>
            <h1 className="text-3xl md:text-6xl font-heading text-brand-primary font-bold">
              The AD Atlas Atelier
            </h1>
          </div>

          {/* Mobile filter toggle bar */}
          <div className="flex items-center justify-between mb-6 lg:hidden border-b border-brand-primary/5 pb-4">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
              {sortedProducts.length} Products
            </span>
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary border border-brand-primary/20 px-4 py-2.5 hover:bg-brand-primary hover:text-white transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter & Search
            </button>
          </div>

          {/* Mobile filter drawer overlay */}
          {filtersOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-bg p-6 rounded-t-2xl max-h-[85vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6 border-b border-brand-primary/10 pb-4">
                  <h3 className="font-heading text-lg text-brand-primary font-bold">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Desktop Sidebar filter column */}
            <div className="hidden lg:flex flex-col gap-8">
              <FilterPanel />
            </div>

            {/* Products grid area */}
            <div className="lg:col-span-3">
              {activeCategory !== "coming-soon" && (
                <div className="hidden lg:flex justify-between items-center mb-8 border-b border-brand-primary/5 pb-4">
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

              {/* Mobile sort bar */}
              {activeCategory !== "coming-soon" && (
                <div className="flex lg:hidden justify-end mb-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-brand-primary/10 text-[10px] font-bold tracking-widest uppercase text-neutral-500 focus:outline-none cursor-pointer px-3 py-2"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price ↑</option>
                    <option value="price-high">Price ↓</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              )}

              {/* Products items grid */}
              {activeCategory !== "coming-soon" && sortedProducts.length === 0 ? (
                <div className="text-center py-20 bg-white/40 border border-brand-primary/5">
                  <p className="font-heading text-lg text-neutral-500 mb-2">No active products match filters</p>
                  <p className="text-xs text-neutral-400">Try adjusting your price range or search terms</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
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
                <div className="mt-16 md:mt-20">
                  <h3 className="text-xl md:text-2xl font-heading text-brand-primary font-bold mb-6 md:mb-8 pb-3 border-b border-brand-primary/5 uppercase tracking-wide">
                    Future Releases Under {activeCategory === "all" || activeCategory === "coming-soon" ? "All Categories" : activeCategory}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
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
