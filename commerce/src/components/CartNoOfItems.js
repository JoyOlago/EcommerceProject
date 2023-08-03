import React from 'react';

const CartNoOfItems = ({ cartItems }) => {
  const getTotalItems = () => {
    // Calculate the total number of items in the cart.
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <span>Cart Items: {getTotalItems()}</span>
    </div>
  );
};

export default CartNoOfItems;
