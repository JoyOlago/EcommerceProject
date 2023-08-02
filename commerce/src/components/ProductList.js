
import React, { useState, useEffect } from 'react';


function DisplayProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //add state to handle display when product is clicked
  const [selectProduct, setSelectedProduct] = useState(null)
  const BASE_URL= "http://ecommerce.muersolutions.com/api/v1/products"

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
//add function to handleProduct click 

  function handleProductClick(product){
    setSelectedProduct(product)
    
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
{/* <div class="card" style="width: 18rem;"> */}
      <h2>Product List</h2>
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id} onClick={() => handleProductClick(product)}>
              <h3>{product.product_name}</h3>
              <p>{product.product_description}</p>
              <p>Price: {product.unit_price}</p>
              <img alt="Product" src={product.product_full_image} />
              {/* <p>{product.product_thumbnail}</p> */}
              <p>Ranking: {product.ranking}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayProductList;
