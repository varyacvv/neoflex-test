import { useEffect, useState, type ReactNode } from 'react';
import type { CartItemType, Product } from '../types/product';
import { CartContext, CART_STORAGE_KEY } from './cartContext';

function loadCartFromSession(): CartItemType[] {
    try {
        const raw = sessionStorage.getItem(CART_STORAGE_KEY);
        if (!raw) return [];
        const parsed: unknown = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed as CartItemType[];
    } catch {
        return [];
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItemType[]>(loadCartFromSession);

    useEffect(() => {
        sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Product) => {
        setItems(prev => {
            const existing = prev.find(i => i.product.id === product.id);
            if (existing) {
                return prev.map(i =>
                    i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const increment = (id: number) => {
        setItems(prev =>
            prev.map(i =>
                i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i,
            ),
        );
    };

    const decrement = (id: number) => {
        setItems(prev =>
            prev.flatMap(i => {
                if (i.product.id !== id) return [i];
                if (i.quantity <= 1) return [];
                return [{ ...i, quantity: i.quantity - 1 }];
            }),
        );
    };

    const removeFromCart = (id: number) => {
        setItems(prev => prev.filter(i => i.product.id !== id));
    };

    const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.product.price, 0);
    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                increment,
                decrement,
                removeFromCart,
                clearCart,
                totalCount,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}