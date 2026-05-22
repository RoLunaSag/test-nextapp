'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/models/product';
import type { CartItem } from '@/models/cart';

type CartState = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    decrementItem: (productId: number) => void;
    clear: () => void;
};


export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product) =>
                set((state) => {
                    const existing = state.items.find((i) => i.product.id === product.id);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.product.id === product.id
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i
                            ),
                        };
                    }
                    return { items: [...state.items, { product, quantity: 1 }] };
                }),
            removeItem: (productId) =>
                set((state) => ({
                    items: state.items.filter((i) => i.product.id !== productId),
                })),
            clear: () => set({ items: [] }),
            decrementItem: (productId) =>
                set((state) => {
                    const existing = state.items.find((i) => i.product.id === productId);
                    if (!existing) return state;
                    if (existing.quantity <= 1) {
                        return { items: state.items.filter((i) => i.product.id !== productId) };
                    }
                    return {
                        items: state.items.map((i) =>
                            i.product.id === productId
                                ? { ...i, quantity: i.quantity - 1 }
                                : i
                        ),
                    };
                }),
        }),

        { name: 'cart-storage' }
    )
);

export const useCartCount = () =>
    useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));