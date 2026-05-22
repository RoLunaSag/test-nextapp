'use client';

import Item from "@/src/components/item";
import { getStaticProps } from "@/src/services/apiclient";
import { Product } from "@/src/types/prodcut";
import { useEffect, useState } from "react";
import Navbar from "@/src/components/navbar";
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
        <Item product={product} />
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
