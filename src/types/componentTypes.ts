import { Product } from "@/models/prodcut";

export type ProductCardProps = {
    product: Product;
    onClick?: () => void;
    onAddToCart?: () => void;
};