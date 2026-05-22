'use client';

import { useEffect, useState } from 'react';
import { fetchProduct } from '@/services/apiclient';
import type { Product } from '@/models/product';

export function useProduct(id: string) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const data = await fetchProduct(id);
                if (!cancelled) setProduct(data);
            } catch (e) {
                if (!cancelled) setError(e instanceof Error ? e.message : 'Unknown error');
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, [id]);

    return { product, loading, error };
}