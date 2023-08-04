import React, { useState } from 'react';
import closeIcon from '../Assets/Navbar/close.svg'

const RegistrationForm = ({ navBarStyle, menuContainerStyle, loginRegisterStyle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showSignupForm, setShowSignupForm] = useState(true);

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

  const backgroundHider={
    position: "fixed",
    width:"100%",
    height:"100%",
    backgroundColor: "rgba(50,50,50,0.9)",
    zIndex: "9"
  }

  const registrationFormStyle = {
    position: "fixed",
    top: "30%",
    left: "30%",
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "500px",
    height: "300px",
    backgroundColor: " #F5C096",
    //backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "30px",
    fontFamily: "Franklin-Gothic-Medium",
    zIndex: "9"
  }

  const inputStyle={
    width:"100px"
  }

  return (
    <>
      {showSignupForm && (
        <div className='backgroundHider' style={backgroundHider}>
                    <div className='popup' style={registrationFormStyle}>
            <div className='container' style={{padding:"10px"}}>
              <div className='row'>
                <div className='col'>
                  <h3 style={{fontSize:"25px", float: "left"}}>Register with Us</h3>
                </div>
                <div className='col'>
                  <a onClick={handleRegisterClick} style={{ position: "relative", float: "right" }}>
                  <img style={{ width: "50px", height: "50px" }} src={closeIcon}></img>
                  </a>
                </div>
              </div>
            </div>
            <div className='container'>
              <form onSubmit={handleFormSubmit}>
                <div className='container' style={{}}>
                  <div className='row'>
                    <div className='col'>
                      <p htmlFor="firstName">First Name:</p>
                    </div>
                    <div className='col'>
                      <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='container' style={{}}>
                  <div className='row'>
                    <div className='col'>
                      <p htmlFor="lastName">Last Name:</p>
                    </div>
                    <div className='col'>
                      <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='container' style={{}}>
                  <div className='row'>
                    <div className='col'>
                      <p htmlFor="email">Email:</p>
                    </div>
                    <div className='col'>
                      <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='container' style={{}}>
                  <div className='row'>
                    <div className='col'>
                      <p htmlFor="password">Password:</p>
                    </div>
                    <div className='col'>
                      <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                  />
                    </div>
                  </div>
                </div>
                <div className='container'>
                  <button className='btn btn-primary' type="submit">Register</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>

      )}
    </>
  );
}

export default RegistrationForm;


















