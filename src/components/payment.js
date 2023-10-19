import React, { useState } from 'react';

function Payment({cartItems,}) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send payment data to a payment gateway
    // You would typically integrate with a payment gateway library to securely process payments.
  };

  return (
    <div className="container mt-5">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
          <input
            type="text"
            className="form-control"
            id="expirationDate"
            name="expirationDate"
            value={paymentData.expirationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardHolderName" className="form-label">Card Holder Name</label>
          <input
            type="text"
            className="form-control"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentData.cardHolderName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Payment</button>
      </form>
      <div>
        <h3>Cart Summary</h3>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>Price: NGN{item.price}</p>
            <p>Quantity: {item.quantity}</p>
        
          </div>
        ))}

        <p>Total Price: NGN</p>
      </div>
    </div>
  );
}

export default Payment;
