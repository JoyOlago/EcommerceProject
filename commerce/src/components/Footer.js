import React from "react";
import facebooklogo from '../Assets/Footer/facebooklinkimage.png'
import instagramlogo from '../Assets/Footer/instagramlinkimage.png'
function Footer(){

    const footerStyle={
        height:"auto",
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
        <footer className="bottom" style={footerStyle}>
            <div className="row">
                <div className="col">
                    <div className="container" style={footerInfoStyle}>
                    <h4>Find Us</h4>
                    <address>1 Koinange Street
                        Nairobi City Centre
                    </address>
                    <p>Open 9AM - 6PM</p>
                    <h6>Contact Us</h6>
                    <p>0792 000 000 </p>
                    
                </div>
            </div>
                <div className="col" style={{color:"white"}}>
                    <h4>Social Media</h4>
                    <img src={facebooklogo} style={socialMediaLinksStyle}></img>
                    <img src={instagramlogo} style={socialMediaLinksStyle}></img>
                </div>


            </div>
        </footer>
    )
}

export default Footer