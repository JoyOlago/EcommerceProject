import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
  const [error, setError] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPaymentLoading(true);

    const cardElement = elements.getElement(CardElement);

    try {
      if (!stripe || !cardElement) {
        throw new Error('Stripe is not ready or card element is missing.');
      }

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('Payment Method ID:', paymentMethod.id);

      // Show a success message or redirect to a thank you page
      // Handle the successful payment completion here

    } catch (error) {
      setError(error.message);
    }

    setPaymentLoading(false);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-element">Credit or Debit Card:</label>
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="error-message">{error}</div>
        <button type="submit" disabled={!stripe || paymentLoading}>
          {paymentLoading ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
