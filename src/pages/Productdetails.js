// ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import initialProducts from "./productimg";

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the route params
  const product = initialProducts[Number(id)]; // Access the product based on the ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6  border">
          <img src={product.image}
           alt={product.name}
            className="img-fluid" 
            style={{height:"", width:'400px'}}
            />
        </div>
        <div className="col-md-6  border">
          <div className="" style={{marginLeft:'20px'}}>
          <h2 className="mt-4">{product.name}</h2>
          <p><strong>{product.price}</strong></p>
          {/* Add more product details here */}
          <p>{product.description}</p>
          <p className="border-bottom"></p>
          <p><strong>Select Size</strong></p>
          <div>
    <select  name="size">
        <option value="select">select</option>
        <option value="1MP">1MP</option>
        <option value="2MP">2MP</option>

       
    </select>
          </div>
          <p className="border-bottom mt-3"></p>
          <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDetails;
