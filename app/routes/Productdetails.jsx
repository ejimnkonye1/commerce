// ProductDetails.js
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import initialProducts from "../productimg";
// import StarRating from "./src/pages/star";
import ColorAlerts from "../components/alert";
function ProductDetails({ cartItems, setCartItems }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const { id } = useParams(); // Get the product ID from the route params
  const product = initialProducts[Number(id)]; // Access the product based on the ID
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
          // Check if a size is selected
          if (!selectedSize) {
            alert("Please select a size");
            
          
        
            return;
         
          }
    
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
    setShowToast(true);

    // Hide the toast after a delay (adjust as needed)
    setTimeout(() => {
      setShowToast(false);
    }, 1000);

  };

 

  return (
    <div className="container mt-5">
         {showToast && (
     <div className="custom-toast">
      <ColorAlerts />

   </div>
  )} 
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
              <option value="1MP" className={`list-inline-item size-item ${selectedSize === '1mp' ? 'selected' : ''}`} onClick={() => setSelectedSize('1mp')}>1MP</option>
              <option value="2MP" className={`list-inline-item size-item ${selectedSize === '2mp' ? 'selected' : ''}`} onClick={() => setSelectedSize('2mp')}>2MP</option>
            </select>
          </div>

          <p className="border-bottom mt-3"></p>

          <div>
            <p>
              <strong>Quantity</strong>
            </p>
            <button
              className="btn btn-light"
                 onClick={() => setQuantity(quantity + 1)}
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

          <button className="btn btn-success mb-3" onClick={handleAddToCart} id="liveToastBtn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductDetails;
