'use client';
import Image from 'next/image'
import { Product } from '@/types/prodcut';

export default function Item({ product }: { product: Product }) {
    console.log(product)
    return (
        <div className='flex-row border-2 border-gray-300 rounded-lg p-4 m-4'>
            <div className='flex justify-center items-center mb-4'>
                <Image src={product.image} alt={product.title} width={200} height={200} />
            </div>
            <h2 className="text-2xl">{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
        </div>
    )
}
