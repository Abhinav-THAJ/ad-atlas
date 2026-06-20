// ============================================
// AD Atlas Beauty — Admin Dashboard Ecosystem
// ============================================

"use client";

import React, { useState } from "react";
import { products as mockProducts, reviews as mockReviews } from "@/data";
import { SectionContainer } from "@/components/common/SectionContainer";
import {
  BarChart3,
  ShoppingBag,
  Users,
  Settings,
  Plus,
  Edit2,
  Trash2,
  TrendingUp,
  Percent,
  Image as ImageIcon,
  MessageSquare,
  Package
} from "lucide-react";
import toast from "react-hot-toast";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"analytics" | "products" | "orders" | "coupons" | "reviews">("analytics");

  // Mock analytical metrics
  const metrics = {
    revenue: "₹4,89,320",
    orders: 247,
    customers: 198,
    conversionRate: "4.8%",
  };

  const [products, setProducts] = useState(mockProducts);
  const [reviews, setReviews] = useState(mockReviews);

  // Inventories check update
  const handleStockUpdate = (id: string, newStock: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: Math.max(0, newStock) } : p))
    );
    toast.success("Stock inventory level updated", { style: { borderRadius: "0px" } });
  };

  const handleReviewStatus = (id: string, action: "approve" | "reject") => {
    toast.success(`Review ${action}d successfully`, { style: { borderRadius: "0px" } });
  };

  return (
    <SectionContainer className="bg-brand-bg pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-brand-primary/5 pb-8 mb-12 gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-secondary">
              AD Atlas Business Control
            </span>
            <h1 className="font-heading text-4xl text-brand-primary font-bold">
              Admin Portal
            </h1>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Logged In As</p>
            <p className="text-xs uppercase font-bold text-brand-primary">Corporate administrator</p>
          </div>
        </div>

        {/* Dashboard Tabs menu */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {(["analytics", "products", "orders", "coupons", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 border text-center uppercase tracking-widest text-[9px] font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-brand-primary"
              }`}
            >
              {tab === "analytics" && <BarChart3 className="w-4 h-4 mx-auto mb-2" />}
              {tab === "products" && <Package className="w-4 h-4 mx-auto mb-2" />}
              {tab === "orders" && <ShoppingBag className="w-4 h-4 mx-auto mb-2" />}
              {tab === "coupons" && <Percent className="w-4 h-4 mx-auto mb-2" />}
              {tab === "reviews" && <MessageSquare className="w-4 h-4 mx-auto mb-2" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab contents panels */}
        {activeTab === "analytics" && (
          <div className="flex flex-col gap-10">
            {/* KPI top metrics grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-brand-primary/5 shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Total Revenue</span>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-primary font-black mt-2">{metrics.revenue}</h3>
                <span className="text-[9px] text-emerald-600 font-semibold tracking-wider flex items-center gap-1 mt-3">
                  <TrendingUp className="w-3 h-3" /> +14.5% OVER LAST MONTH
                </span>
              </div>

              <div className="bg-white p-6 border border-brand-primary/5 shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Orders Dispatched</span>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-primary font-black mt-2">{metrics.orders}</h3>
                <span className="text-[9px] text-emerald-600 font-semibold tracking-wider flex items-center gap-1 mt-3">
                  <TrendingUp className="w-3 h-3" /> +8.2% OVER LAST MONTH
                </span>
              </div>

              <div className="bg-white p-6 border border-brand-primary/5 shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Active Customers</span>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-primary font-black mt-2">{metrics.customers}</h3>
                <span className="text-[9px] text-emerald-600 font-semibold tracking-wider flex items-center gap-1 mt-3">
                  <TrendingUp className="w-3 h-3" /> +11.1% OVER LAST MONTH
                </span>
              </div>

              <div className="bg-white p-6 border border-brand-primary/5 shadow-sm">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Conversion Rate</span>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-primary font-black mt-2">{metrics.conversionRate}</h3>
                <span className="text-[9px] text-emerald-600 font-semibold tracking-wider flex items-center gap-1 mt-3">
                  <TrendingUp className="w-3 h-3" /> +0.5% OVER LAST WEEK
                </span>
              </div>
            </div>

            {/* Sales breakdown mock grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 border border-brand-primary/5">
                <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary mb-6 pb-2 border-b border-brand-primary/5">
                  Revenue Distribution Timeline
                </h3>
                <div className="h-64 flex items-end justify-between gap-2.5 pt-6 select-none font-bold text-[9px] text-neutral-400">
                  <div className="flex flex-col items-center flex-grow gap-2">
                    <div className="w-full bg-brand-primary/10 h-28" />
                    <span>JAN</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow gap-2">
                    <div className="w-full bg-brand-primary/20 h-36" />
                    <span>FEB</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow gap-2">
                    <div className="w-full bg-brand-primary/30 h-44" />
                    <span>MAR</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow gap-2">
                    <div className="w-full bg-brand-primary/40 h-32" />
                    <span>APR</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow gap-2">
                    <div className="w-full bg-brand-primary/60 h-48" />
                    <span>MAY</span>
                  </div>
                  <div className="flex flex-col items-center flex-grow gap-2">
                    <div className="w-full bg-brand-primary h-56" />
                    <span>JUN</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border border-brand-primary/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary mb-6 pb-2 border-b border-brand-primary/5">
                    Best Sellers
                  </h3>
                  <div className="flex flex-col gap-4">
                    {products.map((p) => (
                      <div key={p.id} className="flex justify-between items-center text-xs">
                        <span className="text-neutral-700 uppercase tracking-wide font-medium">{p.title}</span>
                        <span className="font-bold text-brand-primary">124 sold</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-brand-primary/5 pt-6 text-center text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                  Top performing category: LIPS
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="bg-white p-8 border border-brand-primary/5 overflow-x-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary">Product Stock Levels</h3>
              <button
                onClick={() => toast.success("Feature coming in database integration", { style: { borderRadius: "0px" } })}
                className="bg-brand-primary text-white text-[9px] font-bold uppercase tracking-widest py-2.5 px-6 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Product
              </button>
            </div>

            <table className="w-full text-left text-xs text-neutral-600 font-sans border-collapse">
              <thead>
                <tr className="border-b border-brand-primary/10 text-[9px] uppercase tracking-widest font-bold text-neutral-400">
                  <th className="py-4">SKU</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Stock Inventory</th>
                  <th className="py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-brand-primary/5">
                    <td className="py-4 font-semibold uppercase">{product.sku}</td>
                    <td className="py-4 font-heading font-black text-brand-primary uppercase text-sm">{product.title}</td>
                    <td className="py-4 font-bold">₹{product.salePrice || product.price}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={product.stock}
                          onChange={(e) => handleStockUpdate(product.id, Number(e.target.value))}
                          className="w-16 border border-brand-primary/10 px-2 py-1 text-center font-bold text-brand-primary"
                        />
                        <span className="text-[10px] text-neutral-400 font-bold uppercase">Units</span>
                      </div>
                    </td>
                    <td className="py-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => toast.success("Redirecting to product editor", { style: { borderRadius: "0px" } })}
                        className="p-2 text-neutral-400 hover:text-brand-primary transition-colors border border-neutral-100 hover:border-brand-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toast.success("Deleting item placeholder", { style: { borderRadius: "0px" } })}
                        className="p-2 text-neutral-400 hover:text-red-600 transition-colors border border-neutral-100 hover:border-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white p-8 border border-brand-primary/5">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary mb-6">Recent Customer Orders</h3>
            <div className="flex flex-col gap-6">
              {[
                { id: "ORD-9874", customer: "Ananya Patel", total: "₹3,498", items: "2 items", status: "processing" },
                { id: "ORD-9856", customer: "Priya Sharma", total: "₹1,599", items: "1 item", status: "shipped" },
                { id: "ORD-9781", customer: "Meera Nair", total: "₹2,199", items: "1 item", status: "delivered" },
              ].map((ord) => (
                <div key={ord.id} className="border border-brand-primary/5 p-4 flex justify-between items-center text-xs flex-wrap gap-4">
                  <div>
                    <span className="font-semibold text-brand-primary uppercase font-bold">{ord.id}</span>
                    <p className="text-neutral-500 uppercase tracking-wide mt-1">Customer: {ord.customer}</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5 uppercase tracking-wide">Breakdown: {ord.items}</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-right">{ord.total}</p>
                    <span className={`inline-block px-3 py-1 text-[8px] font-bold uppercase tracking-wider mt-1 text-white ${
                      ord.status === "processing" ? "bg-amber-600" : ord.status === "shipped" ? "bg-blue-600" : "bg-emerald-600"
                    }`}>
                      {ord.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "coupons" && (
          <div className="bg-white p-8 border border-brand-primary/5">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary mb-6">Active Promotional Coupons</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { code: "ATLAS10", discount: "10% OFF", minOrder: "₹999", status: "Active" },
                { code: "LUXURY20", discount: "20% OFF", minOrder: "₹1,999", status: "Active" },
                { code: "WELCOME15", discount: "15% OFF", minOrder: "₹1,499", status: "Active" },
              ].map((c) => (
                <div key={c.code} className="border border-brand-primary/5 p-6 bg-brand-light/50 flex flex-col justify-between text-center">
                  <h4 className="font-heading font-black text-xl text-brand-primary mb-2 tracking-widest">{c.code}</h4>
                  <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-2">{c.discount}</p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-4">Min Spend: {c.minOrder}</p>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-600 border border-emerald-600/30 px-3 py-1 w-fit mx-auto">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white p-8 border border-brand-primary/5">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-primary mb-6">Review Approvals</h3>
            <div className="flex flex-col gap-6">
              {reviews.map((rev) => (
                <div key={rev.id} className="border border-brand-primary/5 p-6 flex flex-col gap-4 text-xs font-sans">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-brand-primary uppercase">{rev.userName}</span>
                      <div className="flex text-brand-accent">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-bold">{rev.createdAt}</span>
                  </div>

                  <div>
                    <h5 className="font-semibold text-neutral-700 italic mb-1">&ldquo;{rev.title}&rdquo;</h5>
                    <p className="text-neutral-500 leading-relaxed uppercase tracking-wider text-[11px]">{rev.content}</p>
                  </div>

                  <div className="flex justify-end gap-3 border-t border-brand-primary/5 pt-4">
                    <button
                      onClick={() => handleReviewStatus(rev.id, "approve")}
                      className="bg-brand-primary text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-brand-secondary cursor-pointer"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReviewStatus(rev.id, "reject")}
                      className="border border-brand-primary text-brand-primary text-[9px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-brand-primary hover:text-white cursor-pointer"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
