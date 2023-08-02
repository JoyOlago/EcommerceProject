import React, { useState } from "react";
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

    const menuContainerStyle={
        position: "relative",
        //marginLeft: "100",
        float: "left",
        top: "30%",
        //border: "3px solid black",
        width:"80px"
    }

    const menuIconStyle={
        width:"58px",
        height: "5px",
        backgroundColor: "white",
        margin: "6px 0"
    }

    const loginRegisterStyle={
        position:"relative",
        float: "right",
        //border: "3px solid black",
        width: "180px",
        color: "white",
        marginRight: "5%",
        top: "30%"
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
                <div class='row' style={loginRegisterStyle}>
                  <h6>Register</h6>
                </div>   
            </div>
        </nav>   
        </>
    )
}
export default NavBar
