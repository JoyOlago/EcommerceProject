import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstnameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate server-side processing using fetch
    fetch('/api/register_stub', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Simulate successful registration (you would need to set up your backend)
        console.log('Registration successful!', data);
        // Redirect the user to the login page or do something else after successful registration
      })
      .catch((error) => {
        console.error('Registration failed!', error);
        // Handle registration errors here (e.g., show error messages to the user)
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="firstname">firstName:</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={handleFirstnameChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">lastName:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastnameChange}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;




