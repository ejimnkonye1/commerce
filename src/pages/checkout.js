import React, { useState, useEffect } from 'react';
import { RaveProvider, RavePaymentButton } from 'react-flutterwave-rave';

function Checkout() {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  // Handle successful payment
  const handleSuccess = (response) => {
    setPaymentSuccessful(true);
    // You can perform additional actions here, e.g., update order status
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Your cart items here */}
      {/* ... */}

 

      {paymentSuccessful && (
        <div className="alert alert-success">
          Payment was successful!
        </div>
      )}
    </div>
  );
}

export default Checkout;
