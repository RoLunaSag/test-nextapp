'use client';

import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import ErrorBanner from '@/components/ErrorBanner';
import Navbar from '@/components/Navbar';
import { useProductList } from '@/viewmodels/useProductList';
import { useCartStore } from '@/stores/useCartStore';

export default function ProductsPage() {
    const { products, loading, error, refetch } = useProductList();
    const router = useRouter();
    const addItem = useCartStore((s) => s.addItem);

    return (
        <div className="bg-pink-800 min-h-screen">
            <Navbar />
            <div className="flex justify-center items-center p-4">
                <h1 className="text-2xl text-white">Productos</h1>
            </div>

            {error && <ErrorBanner message={error} onRetry={refetch} />}

            {loading && !error && (
                <div className="flex flex-wrap justify-center items-center gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            )}

            {!loading && !error && (
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
        </div>
    );
}