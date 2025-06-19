import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Custom hook for easier usage
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantityToAdd = 1) => {
  setCart(prevCart => {
    const exists = prevCart.find(cartItem => cartItem.id === item.id);
    if (exists) {
      const newQty = Math.min(exists.quantity + quantityToAdd, exists.stock || Infinity);
      return prevCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQty }
          : cartItem
      );
    }
    return [...prevCart, { ...item, quantity: quantityToAdd }];
  });
};


  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      // Remove item if quantity is less than 1 (used for Delete too)
      removeFromCart(id);
      return;
    }

    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: Math.min(newQuantity, cartItem.stock || newQuantity),
            }
          : cartItem
      )
    );
  };


  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getTotalQuantity = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalQuantity,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
