'use client';

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/products" className="text-white hover:text-gray-300">Products</Link>
                </li>
            </ul>
        </nav>
    );
}