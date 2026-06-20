// ============================================
// AD Atlas Beauty — Auth Store (Zustand)
// ============================================

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, Address } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  addAddress: (address: Address) => void;
  removeAddress: (addressId: string) => void;
  setDefaultAddress: (addressId: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (user, token) => set({ user, token, isAuthenticated: true }),
      
      logout: () => set({ user: null, token: null, isAuthenticated: false }),

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),

      addAddress: (address) =>
        set((state) => {
          if (!state.user) return {};
          const addresses = [...state.user.addresses];
          if (address.isDefault) {
            addresses.forEach((addr) => (addr.isDefault = false));
          }
          addresses.push(address);
          return { user: { ...state.user, addresses } };
        }),

      removeAddress: (addressId) =>
        set((state) => {
          if (!state.user) return {};
          const addresses = state.user.addresses.filter((addr) => addr.id !== addressId);
          // If default was removed, make the first one default
          if (addresses.length > 0 && !addresses.some((addr) => addr.isDefault)) {
            addresses[0].isDefault = true;
          }
          return { user: { ...state.user, addresses } };
        }),

      setDefaultAddress: (addressId) =>
        set((state) => {
          if (!state.user) return {};
          const addresses = state.user.addresses.map((addr) => ({
            ...addr,
            isDefault: addr.id === addressId,
          }));
          return { user: { ...state.user, addresses } };
        }),
    }),
    { name: "ad-atlas-auth" }
  )
);
