import React, { useState } from "react";
import product1 from "../images/came1.jpeg";
import product2 from "../images/came2.jpeg";
import product3 from "../images/came3.jpeg";

import product5 from "../images/4g.jpg";
import product6 from "../images/2mp survillance square.jpg";
import product7 from "../images/360 degree rotation.jpg";
import product8 from "../images/4g car gps tracker.jpg";
import product4 from "../images/5mp 360 degree cctv.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Shop from "./Shop";
import { Link } from "react-router-dom";
const initialProducts = [
  { image: product1, name: "V380 MINI WIFI", price: "NGN6500.00" },
  { image: product2, name: "1MP SURVEILLANCE", price: "NGN10000.00" },
  { image: product3, name: "A9 MiNI CAMERA", price: "NGN8000.00" },
  { image: product4, name: "360 DEGREE CCTV", price: "NGN1800.00" },
  { image: product5, name: "4G CAMERA", price: "NGN8000.00" },
  { image: product6, name: "2MP SURVILLANCE", price: "NGN1800.00" },
  { image: product7, name: "360 DEGREE ROTATION", price: "NGN86000.00"},
  { image: product8, name: "CAR GPS TRACKER", price: "NGN6500.00" },

];

const camera = [
  { image: product8, name: "CAR GPS TRACKER", price: "NGN6500.00" },
  { image: product6, name: "2MP SURVILLANCE", price: "NGN1800.00" },
  { image: product4, name: "360 DEGREE CCTV", price: "NGN1800.00" },
  { image: product2, name: "1MP SURVEILLANCE", price: "NGN10000.00" },
  { image: product7, name: "360 DEGREE ROTATION", price: "NGN86000.00"},
  { image: product5, name: "4G CAMERA", price: "NGN 8000.00" },
  { image: product3, name: "A9 MiNI CAMERA", price: "NGN8000.00" },
  { image: product1, name: "V380 MINI WIFI", price: "NGN6500.00" },
];

function Products() {
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousProducts, setPreviousProducts] = useState([]);

  const handleImageChange = () => {
    const newProducts = currentProducts === initialProducts ? camera : initialProducts;
    setPreviousProducts(currentProducts);
    setCurrentProducts(newProducts);

    setCurrentIndex(0); 
  };

  const handleGoBack = () => {
    if (previousProducts.length > 0) {
    setCurrentProducts(previousProducts);
    setPreviousProducts(previousProducts);
    setCurrentIndex(0);
    }
  };
  const handleCheckboxChange = (index) => {
    setCurrentIndex(index);
  };
  const currentProduct = currentProducts[currentIndex];

  return (
    <section className="">
      
    <div className="container mt-5 bg-white ">
      
    <div className="">
           <div className="d-flex justify-content-between">
             <h3 className="" >Featured product</h3>
             
           
         
             <div className="d-flex justify-content-end">
               <a className="btn btn-white" onClick={handleGoBack}>
                <div className="icon-wrapper">
                 <FontAwesomeIcon icon={faAngleLeft} />
                 </div>
               </a>
             
             
             <a className="btn btn-white" onClick={handleImageChange}>
              <div className="icon-wrapper">
               <FontAwesomeIcon icon={faAngleRight} /> 
               </div>
             </a>
             </div>
           </div>
   </div>
         </div>
       <section className="bg-light p-1">
       <div className="container mt-5 " id="pro">
        <div className="row">
          {currentProducts.map((product, index) => (
            <div className="col-md-4 mb-4 col-lg-3 col-sm-6 d-flex" key={index}>
              <div className="card border-1 shadow-sm d-flex flex-column h-100 product-card" > 
              <div className="border-bottom pb-2 d-flex justify-content-center">
                  <img
                    src={product.image}
                    className="card-img-top"
                    style={{width: "70%"}}
                    alt={product.name}
                  />
                  </div>
                <div className="card-body">
                  
                <p className="card-title">{product.name}</p>
                <p className="card-text text-success">{product.price}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      
      <div className="pagination d-flex justify-content-center mt-2">
        {currentProducts.map((_, index) => (
          <label className="checkbox-container" key={index}>
            <input
              type="radio"
              checked={index === currentIndex}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="checkmark"></span>
          </label>

          
        ))}
      </div>
      <div className="d-flex justify-content-center">
      <Link  to="/Shop" className="btn text-white text-center bg-success" >
        
        VIEW ALL
        
      </Link>
      </div>
    </section>
  
  );
}

export default Products;
