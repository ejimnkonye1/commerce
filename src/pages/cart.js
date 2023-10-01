// Cart.js

import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.name === product.name);

    if (existingProduct) {
      // If the product exists in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <section>
      {/* Your JSX code here */}
      {/* ... */}
      
      {/* Cart Icon */}
      <div className="cart-icon">
        {/* Assume you have a CartIcon component */}
        number:
        {/* Display the number of items in the cart */}
        <span className="cart-count">{cartItems.length}</span>
      </div>

      {/* Render the Cart component outside the product loop */}
      <Cart cartItems={cartItems} />

      {/* ... (rest of your code) */}
    </section>

    </div>
  );
};

export default Cart;
