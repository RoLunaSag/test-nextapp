'use client';

import Image from 'next/image';
import type { CartItemRowProps } from '@/types/componentTypes';

export default function CartItemRow({
    item,
    onIncrement,
    onDecrement,
    onRemove,
}: CartItemRowProps) {
    const { product, quantity } = item;

    return (
        <div className="flex items-center gap-4 border-b border-gray-300 py-4">
            <Image src={product.image} alt={product.title} width={80} height={80} />
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{product.title}</h3>
                <p className="text-sm text-gray-600">${product.price.toFixed(2)} c/u</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={onDecrement}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                    onClick={onIncrement}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    +
                </button>
            </div>
            <div className="w-20 text-right font-semibold">
                ${(product.price * quantity).toFixed(2)}
            </div>
            <button onClick={onRemove} className="text-red-600 hover:underline">
                Eliminar
            </button>
        </div>
    );
}