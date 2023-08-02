import React, { useState } from "react";
import RegistrationForm from "./Register"; // Import the RegistrationForm component
import "./NavBar.css";

function NavBar({ navBarStyle }) { // Receive navBarStyle as a prop
  const [isRegistered, setIsRegistered] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false); // Add this state

  const handleRegisterClick = () => {
    setShowSignupForm(!showSignupForm); // Toggle the visibility of the signup form
  };

  const menuContainerStyle = {
    position: "relative",
    //marginLeft: "100",
    float: "left",
    top: "30%",
    //border: "3px solid black",
    width: "80px",
  };

  const menuIconStyle = {
    width: "58px",
    height: "5px",
    backgroundColor: "white",
    margin: "6px 0",
  };

  const loginRegisterStyle = {
    position: "relative",
    float: "right",
    //border: "3px solid black",
    width: "180px",
    color: "white",
    marginRight: "5%",
    top: "30%",
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

      {/* Pass handleRegisterClick as a prop to RegistrationForm */}
      {showSignupForm && <RegistrationForm navBarStyle={navBarStyle} handleRegisterClick={handleRegisterClick} />}
    </>
  );
}

export default NavBar;


  
  