// Checkout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const history = useNavigate();

  const handleCheckout = () => {
    // Implement your checkout logic

    // Navigate to the cart after checkout
    history.push('/cart');
  };

  return (
    <div>
      {/* Your checkout content */}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
