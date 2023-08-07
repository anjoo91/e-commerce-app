import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
