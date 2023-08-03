import React from "react";
import facebooklogo from '../Assets/Footer/facebooklinkimage.png'
import instagramlogo from '../Assets/Footer/instagramlinkimage.png'
function Footer(){

    const footerStyle={
<<<<<<< HEAD
        height:"auto",
=======
        height:"190px",
>>>>>>> dba8d43 (Chore:Renaming Cart no of items to products, updating delivery form code)
        backgroundColor: '#1D7773'
    }

    const footerInfoStyle={
        float:"left",
        color:"white"
    }

    const socialMediaLinksStyle={
        width:"50px",
        height: "50px",
        padding: "5px"
    }

    return(
<<<<<<< HEAD
        <footer className="bottom" style={footerStyle}>
            <div className="row">
                <div className="col">
                    <div className="container" style={footerInfoStyle}>
                    <h4>Find Us</h4>
=======
        <footer className="fixed-bottom" style={footerStyle}>
            <div className="row">
                <div className="col">
                    <div className="container" style={footerInfoStyle}>
                    <h2>Find Us</h2>
>>>>>>> dba8d43 (Chore:Renaming Cart no of items to products, updating delivery form code)
                    <address>1 Koinange Street
                        Nairobi City Centre
                    </address>
                    <p>Open 9AM - 6PM</p>
<<<<<<< HEAD
                    <h6>Contact Us</h6>
                    <p>0792 000 000 </p>
                    
                </div>
            </div>
                <div className="col" style={{color:"white"}}>
                    <h4>Social Media</h4>
=======
                </div>
            </div>
                <div className="col" style={{color:"white"}}>
                    <h2>Contact Us</h2>
                    <p>0792 000 000 </p>
                    <h3>Social Media</h3>
>>>>>>> dba8d43 (Chore:Renaming Cart no of items to products, updating delivery form code)
                    <img src={facebooklogo} style={socialMediaLinksStyle}></img>
                    <img src={instagramlogo} style={socialMediaLinksStyle}></img>
                </div>


            </div>
        </footer>
    )
}

export default Footer