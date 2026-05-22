'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useProductList } from './useProductList';

export function useFilteredProducts() {
    const { products, loading, error, refetch } = useProductList();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const q = searchParams.get('q') ?? '';
    const category = searchParams.get('category') ?? '';

    const setParam = useCallback(
        (key: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value) params.set(key, value);
            else params.delete(key);
            const qs = params.toString();
            router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
        },
        [searchParams, router, pathname]
    );

    const setQuery = useCallback((value: string) => setParam('q', value), [setParam]);
    const setCategory = useCallback((value: string) => setParam('category', value), [setParam]);

    const categories = useMemo(
        () => Array.from(new Set(products.map((p) => p.category))).sort(),
        [products]
    );

    const filtered = useMemo(() => {
        const qLower = q.trim().toLowerCase();
        return products.filter((p) => {
            const matchesCategory = !category || p.category === category;
            const matchesQuery = !qLower || p.title.toLowerCase().includes(qLower);
            return matchesCategory && matchesQuery;
        });
    }, [products, q, category]);

    return {
        products: filtered,
        loading,
        error,
        refetch,
        q,
        category,
        categories,
        setQuery,
        setCategory,
    };
}