import React, { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add or increase quantity
  const addToCart = (product) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: (copy[idx].quantity || 1) + 1 };
        return copy;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove entire product by id
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // Decrease quantity by one (remove if reaches 0)
  const decrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: (p.quantity || 1) - 1 } : p
        )
        .filter((p) => (p.quantity || 1) > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const totals = useMemo(() => {
    const totalCount = cartItems.reduce((s, i) => s + (i.quantity || 1), 0);
    const totalPrice = cartItems.reduce(
      (s, i) => s + (i.quantity || 1) * Number(i.price || 0),
      0
    );
    return { totalCount, totalPrice };
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decrement,
    clearCart,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
