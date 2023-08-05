 import React, { useState } from 'react';
import Payment from './Payment';
import {Router, BrowserRouter, Routes, Route, NavLink} from "react-router-dom"

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other input fields for email, address, city, zip code, card number, expiry date, and CVV */}
         <button type="submit">Checkout</button>
        {/* <NavLink to="/Checkout">Checkout</NavLink> */}
      </form>
      <Payment />
    </>
  );
};

export default CheckoutForm;
