'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchProduct } from '@/services/apiclient';
import type { Product } from '@/models/product';

export function useProduct(id: string) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchProduct(id);
            setProduct(data);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { product, loading, error, refetch };
}