'use client';

import Image from 'next/image';
import { ProductCardProps } from '@/types/componentTypes';

export default function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
    return (
        <div className="flex-row border-2 border-gray-300 rounded-lg p-4 m-4 bg-white">
            <div onClick={onClick} className="cursor-pointer">
                <div className="flex justify-center items-center mb-4">
                    <Image src={product.image} alt={product.title} width={200} height={200} />
                </div>
                <h2 className="text-2xl">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="font-bold">${product.price}</p>
                <p className="text-xs text-gray-500">{product.category}</p>
            </div>
            {onAddToCart && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart();
                    }}
                    className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                >
                    Add to cart
                </button>
            )}
        </div>
    );
}