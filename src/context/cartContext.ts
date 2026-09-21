import { createContext } from "react";
import type { CartItemType, Product } from "../types/product";

export interface CartContextValue {
  items: CartItemType[];
  addToCart: (product: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);

export const CART_STORAGE_KEY = "qpick_cart";
