'use client';

import ProductCard from "@/components/ProductCard";
import { getStaticProps } from "@/services/apiclient";
import { Product } from "@/models/prodcut";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const res = await getStaticProps();
    setProducts(res.props.repo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  const productListMap = () => {
    return products.map((product: Product) => (
      <button key={product.id} className="w-full" onClick={() => router.push(`/product/${product.id}`)}>
        <ProductCard product={product} />
      </button>
    ));
  };

  return (
    <div className="bg-pink-800">
      <Navbar />
      <div className="flex justify-center items-center h-2">
        <h1 className="text-2xl">Home</h1>
      </div>
      <li className="text-2x1">Lista de productos</li>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {productListMap()}
      </div>
    </div>
  );
}