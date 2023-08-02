
import React, { useState, useEffect } from 'react';
import customAsset from '../Assets/Home/Asset 1.svg'


function DisplayProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false)
  const BASE_URL= "http://ecommerce.muersolutions.com/api/v1/products"

  let cardStyle={
    width:"18rem",
    height:"28rem",
    
  }

  const containerStyle={
    fontFamily: "Franklin-Gothic-Medium",
    height:"250px",
    textAlign: "center",
    paddingTop:"20px"
  }

  const customAssetContainer={
    position:"relative",
    width: "80%",
    height: "auto"
}

  useEffect(() => {
    // Fetch the product data from the API
    fetch (BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  function isShowDescription(){
    setShowDescription(true)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
{/* <div class="card" style="width: 18rem;"> */}

<div className="container" style={containerStyle}>
  <h1 style={{color:"#1D7773", fontSize:"72px"}}>Product List</h1>
  <div className="container" style={customAssetContainer}>
                <img src={customAsset}></img>
            </div>
</div>

<div className="container">
  {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <div className="row">
          {products.map(product => (
              <div className="col" style={{padding:"10px"}}>
              <div key={product.product_name} className="card" style={cardStyle} onClick={isShowDescription}>
                <img style={{position:"relative", marginLeft:"15%", width:"200px", height:"300px"}} class="card-img-top" src={product.product_full_image} alt="Card image cap"></img>
                <div className='card-header' style={{backgroundColor:"#D7BFD4", height:"10rem"}}>
                  <p style={{fontSize:"14px", color:"black"}} className='card-text'>{product.product_name}</p>
                  <h5 style={{color:"black"}}>Price: {product.unit_price}</h5>
                </div>
                {/* {showDescription == true ? (<p style={{fontSize:"12px"}}>{product.product_description}</p>):(<p></p> )} */}
            </div>
          </div>
          ))}
        </div>
      )}
</div>

    </div>
  );
};

export default DisplayProductList;
