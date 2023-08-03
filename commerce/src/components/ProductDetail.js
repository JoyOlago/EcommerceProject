import React from "react";


const ProductDetails = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details here based on your product data */}
    </div>
  );
};

export default ProductDetails