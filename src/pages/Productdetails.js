// ProductDetails.js
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import initialProducts from "./productimg";
import StarRating from "./star";

function ProductDetails({ cartItems, setCartItems }) {
  const [selectedSize, setSelectedSize] = useState("select");
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const { id } = useParams(); // Get the product ID from the route params
  const product = initialProducts[Number(id)]; // Access the product based on the ID

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.name === product.name);

    if (existingProduct) {
      // If the product exists in the cart, update its quantity
      existingProduct.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      // If the product is not in the cart, add it with the selected size and quantity
      const newItem = {
        ...product,
        size: selectedSize,
        quantity: quantity,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

 

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6  border">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ height: "", width: "400px" }}
        />
      </div>
      <div className="col-md-6  border">
        <div className="" style={{ marginLeft: "20px" }}>
          <h2 className="mt-4">{product.name}</h2>
          <p>
            <StarRating />
          </p>
          <p className="text-primary">
            <strong>NGN{product.price}</strong>
          </p>
          {/* Add more product details here */}
          <p>{product.description}</p>
          <p className="border-bottom"></p>
          <p>
            <strong>Select Size</strong>
          </p>
          <div>
            <select
              name="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="select">Select</option>
              <option value="1MP">1MP</option>
              <option value="2MP">2MP</option>
            </select>
          </div>

          <p className="border-bottom mt-3"></p>

          <div>
            <p>
              <strong>Quantity</strong>
            </p>
            <button
              className="btn btn-light"
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-light"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <p className="border-bottom mt-3"></p>

          <button className="btn btn-success mb-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductDetails;
