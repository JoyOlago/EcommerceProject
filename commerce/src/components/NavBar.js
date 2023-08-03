import React, { useState } from "react";
import RegistrationForm from "./Register"; // Import the RegistrationForm component
import "./NavBar.css";
<<<<<<< HEAD
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
=======

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
    width: "190px",
    color: "white",
    marginRight: "5%",
    top: "30%",
  };

  const buttonStyle={
    width:"50px",
    backgroundColor: "#D7BFD4",
    border: "none",
    color: "white",
    textAlign: "center"
  }

  return (
    <>
    {showSignupForm && <RegistrationForm navBarStyle={navBarStyle} handleRegisterClick={handleRegisterClick} />}
      <nav className="navbar-custom" style={navBarStyle}>
        <div className="container" id="menuContainer" style={menuContainerStyle}>
          {/* ... */}
        </div>

        <h1 style={{ paddingLeft:"20px", fontSize:"60px", fontFamily: "Franklin-Gothic-Medium", position:"relative", color:"white", float:"left", top:"18%"}}>BossShop</h1>

        <div className="row" style={loginRegisterStyle}>
          <div className="col" style={{border: "3px solid white",borderRadius: "20px"}}>
            <button style={buttonStyle}>Login</button>
          </div>
          <div className="col" style={{border: "3px solid white",borderRadius: "20px"}}>
              <button style={buttonStyle} onClick={handleRegisterClick}>Register</button>
            </div>
            {/* Toggle visibility of the signup form on click */}

        
        </div>
      </nav>

      {/* Pass handleRegisterClick as a prop to RegistrationForm */}
      
    </>
  );
}

export default NavBar;


  
  
>>>>>>> c4d541034f37c411d4cfd89ff815727f95259190
