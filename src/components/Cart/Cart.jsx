import React, { useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <span>{item.name}</span> - <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
