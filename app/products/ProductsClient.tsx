'use client';

import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import ErrorBanner from '@/components/ErrorBanner';
import Navbar from '@/components/Navbar';
import ProductsFilters from '@/components/ProductsFilters';
import { useFilteredProducts } from '@/viewmodels/useFilteredProducts';
import { useCartStore } from '@/stores/useCartStore';

export default function ProductsClient() {
    const {
        products,
        loading,
        error,
        refetch,
        q,
        sort,
        setQuery,
        setSort,
    } = useFilteredProducts();
    const router = useRouter();
    const addItem = useCartStore((s) => s.addItem);

    return (
        <div className="bg-pink-800 min-h-screen">
            <Navbar />
            <div className="flex justify-center items-center p-4">
                <h1 className="text-2xl text-white">Productos</h1>
            </div>

            <ProductsFilters
                q={q}
                sort={sort}
                onQueryChange={setQuery}
                onSortChange={setSort}
            />

            {error && <ErrorBanner message={error} onRetry={refetch} />}

            {loading && !error && (
                <div className="flex flex-wrap justify-center items-center gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            )}

            {!loading && !error && (
                <>
                    {products.length === 0 ? (
                        <p className="text-white text-center mt-8">
                            No se encontraron productos con esos filtros.
                        </p>
                    ) : (
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onClick={() => router.push(`/product/${product.id}`)}
                                    onAddToCart={() => addItem(product)}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}