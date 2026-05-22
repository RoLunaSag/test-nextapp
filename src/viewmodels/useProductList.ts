'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchProducts } from '@/services/apiclient';
import type { ProductList } from '@/models/product';

export function useProductList() {
    const [products, setProducts] = useState<ProductList>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchProducts();
            setProducts(data);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { products, loading, error, refetch };
}