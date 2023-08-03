import React, { useState } from "react";
import RegistrationForm from "./Register"; // Import the RegistrationForm component
import Login from "./login"; // Import the Login component
import "./NavBar.css";

function NavBar({ navBarStyle }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false); // Add this state

  const handleRegisterClick = () => {
    setShowSignupForm(!showSignupForm); // Toggle the visibility of the signup form
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
          <div className="col" style={{ borderRight: "2px solid white" }}>
            <h6>Login</h6>
          </div>
          <div className="row" style={loginRegisterStyle}>
            {/* Toggle visibility of the signup form on click */}
            <h6 onClick={handleRegisterClick}>Register</h6>
          </div>
        </div>

      </nav>

      {/* Pass handleRegisterClick as a prop to RegistrationForm */}
      {showSignupForm && <RegistrationForm navBarStyle={navBarStyle} handleRegisterClick={handleRegisterClick} />}
    </>
  );
}

export default NavBar;


  
  