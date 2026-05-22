'use client';

import { use } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ProductDetailSkeleton from '@/components/ProductDetailSkeleton';
import ErrorBanner from '@/components/ErrorBanner';
import { useProduct } from '@/viewmodels/useProduct';
import { useCartStore } from '@/stores/useCartStore';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { product, loading, error, refetch } = useProduct(id);
    const addItem = useCartStore((s) => s.addItem);

    return (
        <div className="bg-pink-800 min-h-screen">
            <Navbar />
            <div className="flex justify-center items-center p-8">
                {error && <ErrorBanner message={error} onRetry={refetch} />}

                {loading && !error && <ProductDetailSkeleton />}

                {!loading && !error && product && (
                    <div className="flex-row border-2 border-gray-800 rounded-lg p-4 m-4 bg-amber-50 max-w-xl">
                        <div className="flex justify-center items-center mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={300}
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 bg-gray-100 rounded-md p-2">{product.title}</h1>
                        <p className="text-lg text-red-800 font-bold mt-4 mb-4 ">${product.price}</p>
                        <p className="text-sm text-gray-700">{product.category}</p>
                        <p className=" text-gray-600 mt-4 mb-4">{product.description}</p>
                        <div className="flex items-center justify-between mt-1">
                            <p className="text-sm text-yellow-600 mt-4 mb-4">
                                ★ {product.rating.rate.toFixed(1)}
                                <span className="text-gray-500">({product.rating.count})</span>
                            </p>
                        </div>
                        <button
                            onClick={() => addItem(product)}
                            className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}