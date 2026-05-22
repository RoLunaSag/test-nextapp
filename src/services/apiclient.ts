import type { ProductList } from '@/models/prodcut';

const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<ProductList> {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}