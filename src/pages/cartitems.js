import React, { useState } from 'react';

const CartLogic = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItemFromCart = (itemIndex) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
  };

  return { cartItems, addItemToCart, removeItemFromCart };
};

export default CartLogic;
