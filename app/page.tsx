'use client';

import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import { useProductList } from '@/viewmodels/useProductList';
import { useCartStore } from '@/stores/useCartStore';

export default function Home() {
  const { products, loading, error } = useProductList();
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="bg-pink-800 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center p-4">
        <h1 className="text-2xl text-white">Home</h1>
      </div>

      {loading && <p className="text-white text-center">Cargando...</p>}
      {error && <p className="text-white text-center">Error: {error}</p>}

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
    </div>
  );
}