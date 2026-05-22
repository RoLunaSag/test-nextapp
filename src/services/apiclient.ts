import type { Product, ProductList } from '@/models/product';

const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<ProductList> {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function fetchProduct(id: string | number): Promise<Product> {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product ${id}`);
    return res.json();
}