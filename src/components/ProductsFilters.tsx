'use client';

import type { ProductsFiltersProps } from '@/types/componentTypes';
import type { SortOption } from '@/viewmodels/useFilteredProducts';

export default function ProductsFilters({
    q,
    sort,
    onQueryChange,
    onSortChange,
}: ProductsFiltersProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto px-4 mb-6">
            <input
                type="search"
                value={q}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Buscar por título..."
                className="flex-1 px-4 py-2 rounded border border-gray-300 bg-white text-gray-900"
            />
            <select
                value={sort}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="px-4 py-2 rounded border border-gray-300 bg-white text-gray-900"
            >
                <option value="">Ordenar por...</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="rating-asc">Rating: menor a mayor</option>
                <option value="rating-desc">Rating: mayor a menor</option>
            </select>
        </div>
    );
}