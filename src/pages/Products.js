import React, { useState } from "react";
import { Link } from "react-router-dom";
import initialProducts from "./productimg";


function Products() {
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  




  return (
    <section className="">
      
    <div className="container mt-5 bg-white ">
      
    <div className="">
           <div className="d-flex justify-content-between">
             <h3 className="" >Featured product</h3>
             
           
         
           
             <div className="d-flex justify-content-center">
      <Link  to="/Shop" className="btn text-white text-center bg-success" >
        
        VIEW ALL
        
      </Link>
      </div>

           </div>
   </div>
         </div>
       <section className="bg-light p-1">
       <div className="container mt-5  " id="pro"  >
        <div className="row">
        {currentProducts.map((product, index) => (
            <div className="col-md-4 mb-4 col-lg-3 col-sm-6 d-flex" key={index}>
              <div className="card border-1 shadow-sm d-flex flex-column h-100 product-card">
                <div className="border-bottom pb-2 d-flex justify-content-center">
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
                  <p className="card-text text-success">
                    <strong>{product.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      
   
    </section>
  
  );
}

export default Products;
