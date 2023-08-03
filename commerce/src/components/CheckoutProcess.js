import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate the checkout process here, e.g., sending data to the server or external payment gateway
    console.log('Form data:', formData);
  };

  return (
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
    </form>
  );
};

export default CheckoutForm;
