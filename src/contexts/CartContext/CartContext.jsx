import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [paidItems, setPaidItems] = useState([]);

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

  // mark items as paid and move them to paidItems
  const markAsPaid = (cartItems) => {
    setPaidItems((prevPaidItems) => [...prevPaidItems, ...cartItems]);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, paidItems, markAsPaid }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
