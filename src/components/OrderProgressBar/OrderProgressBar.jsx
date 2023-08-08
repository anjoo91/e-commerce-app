import React from 'react';
import './OrderProgressBar.css';

function OrderProgressBar({ status }) {
  const progressStatus = ['confirmed', 'processing', 'shipped', 'out for delivery', 'delivered'];
  const progressIndex = progressStatus.indexOf(status);

  return (
    <div className="order-progress-bar">
      {progressStatus.map((step, index) => (
        <div
          key={index}
          className={`progress-step ${index <= progressIndex ? 'active' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default OrderProgressBar;
