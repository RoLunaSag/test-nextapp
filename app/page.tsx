import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="bg-pink-800 min-h-screen">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenido a lp-web
        </h1>
        <p className="text-lg md:text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
          Una tienda demo construida con Next.js, MVVM y Zustand.
          Explora el catálogo y arma tu carrito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-amber-50 text-pink-800 font-semibold px-8 py-3 rounded-lg hover:bg-amber-100 transition"
          >
            Ver productos
          </Link>
          <Link
            href="/cart"
            className="border-2 border-amber-50 text-amber-50 font-semibold px-8 py-3 rounded-lg hover:bg-amber-50 hover:text-pink-800 transition"
          >
            Ir al carrito
          </Link>
        </div>
      </section>
    </div>
  );
}