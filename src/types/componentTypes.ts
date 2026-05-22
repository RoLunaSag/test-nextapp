import { Product } from "@/models/prodcut";
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