import React from "react";

function Checkout({cartItems}){
    const cardStyle={
    }
  
    const buttonStyle={
      width:"70px",
      fontSize:'12px'
    }
    return(
        <>
        {cartItems.map(product => (
            <div className="col" style={{padding:"10px"}}>
            <div key={product.product_name} className="card" style={cardStyle}>
              <img style={{position:"relative", marginLeft:"15%", width:"200px", height:"200px"}} class="card-img-top" src={product.product_full_image} alt="Card image cap"></img>
              <div className='card-header' style={{height:"10rem"}}>
                <p style={{fontFamily:"Franklin-Gothic-Medium",fontSize:"20px", color:"black"}} className='card-text'>{product.product_name.slice(0,20)}</p>
              </div>
              <div className='card-header'>
                <h5 style={{color:"black"}}>Price: {product.unit_price}</h5>
              </div>
              <div className='card-header'>
              <div className='row'>
              </div>
              </div>
          </div>
        </div>
        ))}
        </>
    )
}
export default Checkout;