import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import initialProducts from "./productimg";
import Aos from "aos";
import 'aos/dist/aos.css';
import StarRating from "./star";
function Products({ cartItems, setCartItems }) {
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.name === product.name);
  
    if (existingProduct) {
      // If the product exists in the cart, increase its quantity by 1
      existingProduct.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      product.quantity = 1;
      setCartItems([...cartItems, product]);
    }
  };
  
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  
useEffect(() =>{
  Aos.init(1000);
}, [])



  return (
    <section className="">
      
    <div className="container mt-5 bg-white ">
        <div className="d-flex justify-content-between">
             <h3 className="fea" >Featured product</h3>
           </div>
   
         </div>
       <section className="bg-light p-1">
       <div className="container mt-4" id="pro"  >
        <div className="row">
        {currentProducts.map((product, index) => (
            <div className="col-6 col-md-4 mb-4 col-lg-3 col-sm-6 d-flex pro-1" key={index}>
              <div className="card border-1 shadow-sm d-flex flex-column h-100 product-card" data-aos='fade-down' >
                <div className="border-bottom pb-2 d-flex justify-content-center" >
                  {/* Use Link to navigate to the product details page */}
                  <Link to={`/product/${index}`}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      style={{ width: "70%" }}
                      alt={product.name}
                    />
                  </Link>
                </div>
              
                <div className="card-body">
                  <p className="card-title">{product.name}</p>
                  <p className="star">  <StarRating /></p>
                  <p className="card-text text-success">
                    <strong>NGN{product.price}</strong>
                  </p>
                        <div className="btn-1">
                        <button className="btn btn-success" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      <div className="d-flex justify-content-center bg-light">
      <Link  to="/Shop" className="btn text-white text-center bg-success mb-3" >
        
        VIEW ALL
        
      </Link>
      </div>
   
    </section>
  
  );
}

export default Products;
