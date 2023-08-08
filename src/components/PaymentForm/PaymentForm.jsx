import React, { useState } from 'react';
import './PaymentForm.css';

function PaymentForm({handlePaymentSuccess}) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handlePaymentSuccess();

    // Simulate payment processing and show a success alert
    setTimeout(() => {
        alert('Payment submitted successfully!');
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
      }, 2000);
    };

    return (
      <div className="payment-form">
        <h2>Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    );
  }

export default PaymentForm;
