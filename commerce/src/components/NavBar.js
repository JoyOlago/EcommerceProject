import React, { useState } from "react";
import "./NavBar.css";
import RegistrationForm from "./Register";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleRegistrationComplete = (firstName) => {
    setIsLoggedIn(true);
    setFirstName(firstName);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFirstName('');
  };

  const navBarStyle = {
    height: "120px",
    backgroundColor: '#D7BFD4'
  }

  const menuContainerStyle = {
    position: "relative",
    float: "left",
    top: "30%",
    width: "80px"
  }

  const menuIconStyle = {
    width: "58px",
    height: "5px",
    backgroundColor: "white",
    margin: "6px 0"
  }

  const loginRegisterStyle = {
    position: "relative",
    float: "right",
    width: "180px",
    color: "white",
    marginRight: "5%",
    top: "30%"
  }

  return (
    <>
      <nav className="navbar-custom" style={navBarStyle}>
        <div className="container" id="menuContainer" style={menuContainerStyle}>
          <div style={menuIconStyle}></div>
          <div style={menuIconStyle}></div>
          <div style={menuIconStyle}></div>
        </div>
        <div class="row" style={loginRegisterStyle}>
          {isLoggedIn ? (
            <div className="col">
              <h6>Hello, {firstName}!</h6>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="col">
              <h6>Login</h6>
              <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default NavBar;
