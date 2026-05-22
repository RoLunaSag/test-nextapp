'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '@/services/apiclient';
import type { ProductList } from '@/models/product';

export function useProductList() {
    const [products, setProducts] = useState<ProductList>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const data = await fetchProducts();
                if (!cancelled) setProducts(data);
            } catch (e) {
                if (!cancelled) setError(e instanceof Error ? e.message : 'Unknown error');
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, []);

    return { products, loading, error };
}