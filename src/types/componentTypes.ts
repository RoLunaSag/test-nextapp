import { Product } from "@/models/product";
import { CartItem } from "@/models/cart";
import type { SortOption } from "@/viewmodels/useFilteredProducts";

export type ProductCardProps = {
    product: Product;
    onClick?: () => void;
    onAddToCart?: () => void;
};

export type CartItemRowProps = {
    item: CartItem;
    onIncrement: () => void;
    onDecrement: () => void;
    onRemove: () => void;
};

export type ErrorBannerProps = {
    message: string;
    onRetry?: () => void;
};


export type ProductsFiltersProps = {
    q: string;
    sort: SortOption;
    onQueryChange: (value: string) => void;
    onSortChange: (value: SortOption) => void;
};