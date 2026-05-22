'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CartItemRow from '@/components/CartItemRow';
import { useCart } from '@/viewmodels/useCart';

export default function CartPage() {
    const { items, total, isEmpty, addItem, decrementItem, removeItem, clear } = useCart();

    const [hydrated, setHydrated] = useState(false);
    useEffect(() => setHydrated(true), []);

    return (
        <div className="bg-pink-800 min-h-screen">
            <Navbar />
            <div className="max-w-3xl mx-auto p-6 bg-amber-50 mt-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>

                {!hydrated ? (
                    <p>Cargando carrito...</p>
                ) : isEmpty ? (
                    <div>
                        <p>Tu carrito está vacío.</p>
                        <Link
                            href="/"
                            className="text-pink-700 underline mt-4 inline-block"
                        >
                            Ir a comprar
                        </Link>
                    </div>
                ) : (
                    <>
                        {items.map((item) => (
                            <CartItemRow
                                key={item.product.id}
                                item={item}
                                onIncrement={() => addItem(item.product)}
                                onDecrement={() => decrementItem(item.product.id)}
                                onRemove={() => removeItem(item.product.id)}
                            />
                        ))}

                        <div className="flex justify-between items-center mt-6 pt-4 border-t-2 border-gray-300">
                            <button
                                onClick={clear}
                                className="text-red-600 hover:underline"
                            >
                                Vaciar carrito
                            </button>
                            <div className="text-2xl font-bold">
                                Total: ${total.toFixed(2)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}