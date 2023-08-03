import React, { useState } from "react";
import RegistrationForm from "./Register"; // Import the RegistrationForm component
import Login from "./login";
import "./NavBar.css";

function NavBar(){

    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegistrationComplete = () => {
        setIsRegistered(true);
      };

    const navBarStyle={
        height:"120px",
        backgroundColor: '#D7BFD4'
    }

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

    return(
        <>
         <nav className="navbar-custom" style={navBarStyle}>
            <div className="container" id="menuContainer" style={menuContainerStyle}>
             <div style={menuIconStyle}></div>
                <div style={menuIconStyle}></div>
                <div style={menuIconStyle}></div>
            </div>
            <div class="row" style={loginRegisterStyle}>
                <div className="col" style={{borderRight: "2px solid white"}}>
                    <h6>Login</h6>
                </div>
                <div className="col">
                   {/* Show different content based on registration status  */}
                  {isRegistered ? (
                 <h6>Registered Successfully!</h6>) : (
                  <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
                   )}
                </div>
            </div>
        </nav>   
        </>
    )
}
export default NavBar