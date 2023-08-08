import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import OrderProgressBar from '../OrderProgressBar/OrderProgressBar';
import './OrderHistory.css';

function OrderHistory() {
  const { paidItems } = useContext(CartContext);

  return (
    <div className="order-history">
      <h2>Order History</h2>
      {paidItems.length === 0 ? (
        <p>No orders in history.</p>
      ) : (
        <ul>
          {paidItems.map((item) => (
            <li key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <OrderProgressBar status="processing" /> {/* Render the OrderProgressBar with a processing status */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
