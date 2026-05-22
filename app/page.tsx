'use client';

import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import { useProductList } from '@/viewmodels/useProductList';

export default function Home() {
  const { products, loading, error } = useProductList();
  const router = useRouter();

  return (
    <div className="bg-pink-800">
      <Navbar />
      <div className="flex justify-center items-center h-2">
        <h1 className="text-2xl">Home</h1>
      </div>
      <li className="text-2x1">Lista de productos</li>

      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      <div className="flex flex-wrap justify-center items-center gap-2">
        {products.map((product) => (
          <button
            key={product.id}
            className="w-full"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <ProductCard product={product} />
          </button>
        ))}
      </div>
    </div>
  );
}