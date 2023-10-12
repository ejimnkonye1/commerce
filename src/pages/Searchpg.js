import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import initialProducts from "./productimg";
import { Link } from "react-router-dom";
import '../styles/search.css'
function SearchPage() {
  const { query } = useParams();
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setCurrentProducts(filteredProducts);
  }, [query]);

  return (
    <div>
      <Link to={'/search'} >
      <div className="container mt-5">
        <h3 className="serach-result mb-4"> Search Results for: "{query}" </h3> 
        <div className="row">
          {currentProducts.map((product, index) => (
            <div className="col-md-4 mb-4 col-lg-3 col-sm-6" key={index}>
              {/* Display product details here */}
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
                    <strong>NGN{product.price}</strong>
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default SearchPage;
