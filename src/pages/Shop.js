import React from 'react';

import product1 from "../images/came1.jpeg";
import product2 from "../images/came2.jpeg";
import product3 from "../images/came3.jpeg";

import product5 from "../images/4g.jpg";
import product6 from "../images/2mp survillance square.jpg";
import product7 from "../images/360 degree rotation.jpg";
import product8 from "../images/4g car gps tracker.jpg";
import product4 from "../images/5mp 360 degree cctv.jpg";
import ShopCard from './shopcard';

function Shop() {
  // Dummy product data (replace with your actual data)
  const products = [
    // ... your product objects ...
    { image: product1, name: "V380 MINI WIFI", price: "NGN6500.00" },
    { image: product2, name: "1MP SURVEILLANCE", price: "NGN10000.00" },
    { image: product3, name: "A9 MiNI CAMERA", price: "NGN8000.00" },
    { image: product4, name: "360 DEGREE CCTV", price: "NGN1800.00" },
    { image: product5, name: "4G CAMERA", price: "NGN8000.00" },
    { image: product6, name: "2MP SURVILLANCE", price: "NGN1800.00" },
    { image: product7, name: "360 DEGREE ROTATION", price: "NGN86000.00"},
    { image: product8, name: "CAR GPS TRACKER", price: "NGN6500.00" }, 
  
  ];

  // Dummy pagination data (replace with your actual pagination logic)
  const currentPage = 1;
  const totalPages = 5;

  return (
    <div className="container bg-light" style={{marginLeft: ""}}>
      
      <div className="row p-5" style={{marginLeft: ""}}>
      <h5 className='p-2'>SHOP</h5>
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4 col-lg-3 col-sm-5 d-flex">
            
            <ShopCard product={product} />
          </div>
        ))}
      </div>
      <div className="text-center">
        {/* Pagination */}
        {/* ... render pagination component or logic ... */}




        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
      </div>
    </div>
  );
}

export default Shop;
