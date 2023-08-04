import React, { useState } from "react";
import ProductDetails from "./ProductDetail";
import CheckoutForm from './CheckoutProcess'
import Payment from "./Payment";
const Cart = ({cartItems}) => {
 

  // function addItemToCart(selectedProduct) {
  //   // Assuming the "products" array is defined or imported from somewhere
  //   // const existingItem = products.find((item) => item.product_name.includes(selectedProduct.product_name));
  //   // setCartItems([...cartItems, existingItem]);
  // }

  return (
    <>
    <div className="card">
      <h4>Cart:</h4>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.product_name}</p>
          <p>{item.unit_price}</p>
          <p>{item.product_full_image}</p>
          <p>{item.unit_price}</p>
        </div>
      ))}
      <CheckoutForm />
      <Payment />
    </div>
    </>
    
  );
};


export default Cart;

