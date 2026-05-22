'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useProductList } from './useProductList';
import type { ProductList } from '@/models/product';

export type SortOption =
    | ''
    | 'price-asc'
    | 'price-desc'
    | 'rating-asc'
    | 'rating-desc';

export function useFilteredProducts() {
    const { products, loading, error, refetch } = useProductList();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const q = searchParams.get('q') ?? '';
    const sort = (searchParams.get('sort') ?? '') as SortOption;

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
    const setSort = useCallback((value: SortOption) => setParam('sort', value), [setParam]);

    const result = useMemo<ProductList>(() => {
        const qLower = q.trim().toLowerCase();
        const filtered = products.filter(
            (p) => !qLower || p.title.toLowerCase().includes(qLower)
        );

        if (!sort) return filtered;

        const sorted = [...filtered];
        switch (sort) {
            case 'price-asc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating-asc':
                sorted.sort((a, b) => a.rating.rate - b.rating.rate);
                break;
            case 'rating-desc':
                sorted.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
        }
        return sorted;
    }, [products, q, sort]);

    return {
        products: result,
        loading,
        error,
        refetch,
        q,
        sort,
        setQuery,
        setSort,
    };
}