<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import customAsset from '../Assets/Home/Asset 1.svg';
import 'reactjs-popup/dist/index.css';

import ProductDetails from './ProductDetail';


function DisplayProductList({cartItems, setCartItems}) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayProductDetail, setDisplayProductDetail] = useState(false);


  const BASE_URL= "http://ecommerce.muersolutions.com/api/v1/products"
/* 
  let object=
    [ {product_name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",product_description:"Your Perfect Pack For Everyday Use And Walks In The Forest. Stash Your Laptop (Up To 15 Inches) In The Padded Sleeve, Your Everyday",unit_price:109,product_full_image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",product_thumbnail:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",ranking:3,created:"2023-08-02T07:04:33.516785Z",updated:null},
      {product_name:"Mens Cotton Jacket",product_description:"Great Outerwear Jackets For Spring/Autumn/Winter, Suitable For Many Occasions, Such As Working, Hiking, Camping, Mountain/Rock Climbing, Cycling, Traveling Or Other Outdoors",unit_price:5500,product_full_image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",product_thumbnail:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",ranking:5,created:"2023-08-02T07:32:48.887065Z",updated:null},
      {product_name:"Mens Casual Premium Slim Fit T-Shirts",product_description:"Slim-Fitting Style, Contrast Raglan Long Sleeve, Three-Button Henley Placket, Light Weight & Soft Fabric For Breathable And Comfortable Wearing.",unit_price:2200,product_full_image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",product_thumbnail:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",ranking:4,created:"2023-08-02T07:36:04.592644Z",updated:null}
    ] */

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
=======

import React, { useState, useEffect } from 'react';


function DisplayProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL= "http://ecommerce.muersolutions.com/api/v1/products"
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)

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

<<<<<<< HEAD
  function toggleLogin(){
    setIsLoggedIn(true)
  }


=======
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
{/* <div class="card" style="width: 18rem;"> */}
<<<<<<< HEAD

<div className="container" style={containerStyle}>
  <h1 style={{color:"#1D7773", fontSize:"72px"}}>Product List</h1>
  <div className="container" style={customAssetContainer}>
                <img src={customAsset}></img>
            </div>
</div>

<SearchBar/>

<div className='card'>
  {cartItems.map(item=>(
    <>
      <p>{item.product_name}</p>
      <p> {item.unit_price}</p>
    </>

  ))}
</div>
<div className='container-fluid' style={{backgroundColor:'#E6E6E6'}}>
  <div className="container" style={{backgroundColor:'#E6E6E6'}}>

  {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <div className="row">
          {products.map(product => (
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
                  <div className='col'>
                    <button name={product.product_name.slice(0,3)} className='btn' style={{backgroundColor:"#1D7773"}} onClick={showMore}>Show More</button>
                  </div>
                  <div className='col'>
                    <button name={product.product_name.slice(0,7)} className='btn btn-primary' onClick={addItemToCart}>Add to Cart</button>
                  </div>
                </div>
                </div>

            </div>
          </div>
          ))}
        </div>
      )}

  </div>
</div>

{/*       {product.map(product=>(
        <div key={product.product_name}>{product.product_name}</div>
      ))} */}
      {displayProductDetail == true ? ( <ProductDetails selectedProduct={selectedProduct} addItemToCart={addItemToCart} hideMore={hideMore} /> ) : ('')}
<<<<<<< HEAD

=======
=======
      <h2>Product List</h2>
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.product_name}>
              <h3>{product.product_name}</h3>
              <p>{product.product_description}</p>
              <p>Price: {product.unit_price}</p>
              <img alt="Product" src={product.product_full_image} />
            </li>
          ))}
        </ul>
      )}
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
>>>>>>> a7cf9fc (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
    </div>
  );
};

<<<<<<< HEAD
export default DisplayProductList;
=======
export default DisplayProductList;
>>>>>>> 0302945 (Feat:used displayProduct component to fetch data to display list of items and appended to App.js)
