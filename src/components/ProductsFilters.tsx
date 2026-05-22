'use client';

import type { ProductsFiltersProps } from '@/types/componentTypes';

export default function ProductsFilters({
    q,
    category,
    categories,
    onQueryChange,
    onCategoryChange,
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
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="px-4 py-2 rounded border border-gray-300 bg-white text-gray-900"
            >
                <option value="">Todas las categorías</option>
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>
    );
}