import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const exist = cart.find((item) => item.id === product.id);

        if (exist) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart
                .map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, increaseQty, decreaseQty }}
        >
            {children}
        </CartContext.Provider>
    );
}