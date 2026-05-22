'use client';

import Image from 'next/image';
import { ProductCardProps } from '@/types/componentTypes';

export default function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
    return (
        <div className="flex-row border-2 border-gray-800 rounded-lg p-4 m-4 bg-white w-80 min-h-100">
            <div onClick={onClick} className="cursor-pointer">
                <div className="flex justify-center items-center mb-4">
                    <Image src={product.image} alt={product.title} width={200} height={200} />
                </div>
                <h2 className="text-lg text-gray-800 bg-gray-100 rounded-md p-2">{product.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-1">
                    <p className="font-bold text-red-800">${product.price}</p>
                    <p className="text-sm text-yellow-600">
                        ★ {product.rating.rate.toFixed(1)}
                        <span className="text-gray-500">({product.rating.count})</span>
                    </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
            </div>
            {onAddToCart && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart();
                    }}
                    className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                >
                    Agregar al carrito
                </button>
            )}
        </div>
    );
}