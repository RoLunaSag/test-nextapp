'use client';

import { useCartStore } from '@/stores/useCartStore';

export function useCart() {
    const items = useCartStore((s) => s.items);
    const addItem = useCartStore((s) => s.addItem);
    const decrementItem = useCartStore((s) => s.decrementItem);
    const removeItem = useCartStore((s) => s.removeItem);
    const clear = useCartStore((s) => s.clear);

    const count = items.reduce((n, i) => n + i.quantity, 0);
    const total = items.reduce((n, i) => n + i.product.price * i.quantity, 0);
    const isEmpty = items.length === 0;

    return { items, count, total, isEmpty, addItem, decrementItem, removeItem, clear };
}