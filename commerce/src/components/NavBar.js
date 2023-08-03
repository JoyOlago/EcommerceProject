import React, { useState } from "react";
import RegistrationForm from "./Register"; // Import the RegistrationForm component
import "./NavBar.css";

function NavBar({ navBarStyle }) { // Receive navBarStyle as a prop
  const [isRegistered, setIsRegistered] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false); // Add this state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleRegistrationComplete = (firstName) => {
    setIsLoggedIn(true);
    setFirstName(firstName);
  };

  const handleRegisterClick = () => {
    setShowSignupForm(!showSignupForm); // Toggle the visibility of the signup form
  };

  // Define the handleLogout function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setFirstName('');
  };

  const menuContainerStyle = {
    position: "relative",
    float: "left",
    top: "30%",
    width: "80px",
  };

  const loginRegisterStyle = {
    position: "relative",
    float: "right",
    width: "190px",
    color: "white",
    marginRight: "5%",
    top: "30%",
  };

  const buttonStyle = {
    width: "50px",
    backgroundColor: "#D7BFD4",
    border: "none",
    color: "white",
    textAlign: "center"
  };

  return (
    <>
      {showSignupForm && <RegistrationForm navBarStyle={navBarStyle} handleRegisterClick={handleRegisterClick} />}
      <nav className="navbar-custom" style={navBarStyle}>
        <div className="container" id="menuContainer" style={menuContainerStyle}>
          {/* ... */}
        </div>

        <h1 style={{ paddingLeft: "20px", fontSize: "60px", fontFamily: "Franklin-Gothic-Medium", position: "relative", color: "white", float: "left", top: "18%" }}>BossShop</h1>

        <div className="row" style={loginRegisterStyle}>
          {isLoggedIn ? (
            // If user is logged in, show welcome message and logout button
            <div className="col">
              <h6>Hello, {firstName}!</h6>
              <button onClick={handleLogout} style={buttonStyle}>Logout</button>
            </div>
          ) : (
            // If user is not logged in, show login and register buttons
            <div className="col">
              <button onClick={handleLogin} style={buttonStyle}>Login</button>
              <button onClick={handleRegisterClick} style={buttonStyle}>Register</button>
            </div>
          )}
        </div>

      </nav>
    </>
  );
}

export default NavBar;
