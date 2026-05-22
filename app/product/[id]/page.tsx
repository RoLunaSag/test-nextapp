'use client';

import { use } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useProduct } from '@/viewmodels/useProduct';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { product, loading, error } = useProduct(id);

    return (
        <div className="bg-pink-800 min-h-screen">
            <Navbar />
            <div className="flex justify-center items-center p-8">
                {loading && <p>Cargando...</p>}
                {error && <p>Error: {error}</p>}
                {product && (
                    <div className="flex-row border-2 border-pink-200 rounded-lg p-4 m-4 bg-amber-50 max-w-xl">
                        <div className="flex justify-center items-center mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={300}
                            />
                        </div>
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <p className="text-lg">${product.price}</p>
                        <p className="text-sm text-gray-700">{product.category}</p>
                        <p className="mt-2">{product.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}