import { Product } from "@/models/product";
import { CartItem } from "@/models/cart";

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
    category: string;
    categories: string[];
    onQueryChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
};