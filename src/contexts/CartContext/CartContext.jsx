import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      console.log('Product already in cart:', existingProduct);
    } else {
      setCart([...cart, product]);
      console.log('Adding to cart:', product);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    console.log('Removing from cart:', productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
