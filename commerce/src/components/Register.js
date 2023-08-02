import React, { useState } from 'react';

const RegistrationForm = ({ navBarStyle, menuContainerStyle, loginRegisterStyle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleRegisterClick = () => {
    setShowSignupForm(!showSignupForm);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://ecommerce.muersolutions.com/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful!', data);
        // You can handle successful registration here, e.g., redirect to a new page, show a success message, etc.
      } else {
        console.error('Registration failed!');
        // You can handle registration failure here, e.g., show an error message.
      }
    } catch (error) {
      console.error('Error during registration!', error);
    }
  };

  return (
    <>
      <nav className="navbar-custom" style={navBarStyle}>
        <div className="container" id="menuContainer" style={menuContainerStyle}>
          {/* ... */}
        </div>
  
        <div className="row" style={loginRegisterStyle}>
          <div className="col" style={{ borderRight: "2px solid white" }}>
            <h6>Login</h6>
          </div>
          <div className="row" style={loginRegisterStyle}>
            {/* Toggle visibility of the signup form on click */}
            <h6 onClick={handleRegisterClick}>Register</h6>
          </div>
        </div>
      </nav>

      {showSignupForm && (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </>
  );
}

export default RegistrationForm;


















