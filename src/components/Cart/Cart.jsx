import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext/CartContext';
import PaymentForm from '../../components/PaymentForm/PaymentForm'; // Import the PaymentForm component
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, markAsPaid } = useContext(CartContext); // Updated context

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handlePaymentSuccess = () => {
    // Simulation of a successful payment.
    // Real integration would involve an API call.
    console.log(cart);
    markAsPaid(cart);
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item._id}>
                <img src={item.image} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item._id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <PaymentForm 
        handlePaymentSuccess = { handlePaymentSuccess }
      />
    </div>
  );
}

export default Cart;
