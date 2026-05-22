'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCartCount } from '@/stores/useCartStore';

export default function Navbar() {
    const count = useCartCount();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 items-center">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products" className="text-white hover:text-gray-300">
                        Products
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link href="/cart" className="text-white hover:text-gray-300">
                        🛒 Cart ({hydrated ? count : 0})
                    </Link>
                </li>
            </ul>
        </nav>
    );
}