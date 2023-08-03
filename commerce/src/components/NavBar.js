import React, { useState } from "react";
import RegistrationForm from "./Register"; // Import the RegistrationForm component
<<<<<<< HEAD

import Login from "./login"; // Import the Login component
import "./NavBar.css";

<<<<<<< HEAD
function NavBar({ navBarStyle }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // Add this state for login form

  const handleRegisterClick = () => {
    setShowSignupForm(!showSignupForm);
  };

  // Function to handle the login button click
  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm); // Toggle the visibility of the login form

  };
=======
function NavBar(){

    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegistrationComplete = () => {
        setIsRegistered(true);
      };

    const navBarStyle={
        height:"120px",
        backgroundColor: '#D7BFD4'
    }
>>>>>>> cdc1e24 (Added Header, Footer and some assets)

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


=======
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
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
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
<<<<<<< HEAD


=======
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
    color: "white",
    marginRight: "5%",
    top: "30%",
  };


  const buttonStyle = {
    width: "50px",
    backgroundColor: "#D7BFD4",
    border: "none",
    color: "white",
    textAlign: "center",
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      {showSignupForm && (
        <RegistrationForm
          navBarStyle={navBarStyle}
          handleRegisterClick={handleRegisterClick}
        />
      )}

=======
  return (
    <>
    {showSignupForm && <RegistrationForm navBarStyle={navBarStyle} handleRegisterClick={handleRegisterClick} />}
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
      <nav className="navbar-custom" style={navBarStyle}>
        <div className="container" id="menuContainer" style={menuContainerStyle}>
          {/* ... */}
        </div>

<<<<<<< HEAD

        <h1
          style={{
            paddingLeft: "20px",
            fontSize: "60px",
            fontFamily: "Franklin-Gothic-Medium",
            position: "relative",
            color: "white",
            float: "left",
            top: "18%",
          }}
        >
          BossShop
        </h1>

        <div className="row" style={loginRegisterStyle}>
          <div
            className="col"
            style={{ border: "3px solid white", borderRadius: "20px" }}
          >
            <button style={buttonStyle} onClick={handleLoginButtonClick}>
              {showLoginForm ? "Close Login" : "Login"}
            </button>
          </div>
          <div
            className="col"
            style={{ border: "3px solid white", borderRadius: "20px" }}
          >
            <button style={buttonStyle} onClick={handleRegisterClick}>
              Register
            </button>
          </div>
          {/* Toggle visibility of the signup form on click */}
        </div>
      </nav>
      {/* Pass handleRegisterClick as a prop to RegistrationForm */}
      {showLoginForm && (
        <Login showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
      )}

    </>
  );
}
<<<<<<< HEAD


export default NavBar;



  
  
=======
export default NavBar
=======
>>>>>>> 6eb5651 (Feat: Registration Functionality and conditional rendering of Login)
    return(
        <>
         <nav className="navbar-custom" style={navBarStyle}>
            <div className="container" id="menuContainer" style={menuContainerStyle}>
             <div style={menuIconStyle}></div>
                <div style={menuIconStyle}></div>
                <div style={menuIconStyle}></div>
=======
        <h1 style={{ paddingLeft:"20px", fontSize:"60px", fontFamily: "Franklin-Gothic-Medium", position:"relative", color:"white", float:"left", top:"18%"}}>BossShop</h1>

        <div className="row" style={loginRegisterStyle}>
          <div className="col" style={{border: "3px solid white",borderRadius: "20px"}}>
            <button style={buttonStyle}>Login</button>
          </div>
          <div className="col" style={{border: "3px solid white",borderRadius: "20px"}}>
              <button style={buttonStyle} onClick={handleRegisterClick}>Register</button>
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
            </div>
            {/* Toggle visibility of the signup form on click */}

        
        </div>
      </nav>

      {/* Pass handleRegisterClick as a prop to RegistrationForm */}
      
    </>
  );
}
<<<<<<< HEAD
export default NavBar
>>>>>>> cdc1e24 (Added Header, Footer and some assets)
=======

export default NavBar;


  
  
>>>>>>> 8627ede (Chore:Reverting to c4d541034f37c411d4cfd89ff815727f95259190 before merge conflict)
