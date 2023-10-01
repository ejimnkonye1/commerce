import React, { useState } from "react";
import { Link } from "react-router-dom";
import initialProducts from "./productimg";

function SearchResult() {
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    // Filter the products based on the search query
    const filteredProducts = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setCurrentProducts(filteredProducts);
    setSearchQuery(query);
  };

  return (
    <div>
      <div className="container mt-5" id="pro">
        <div className="row">
          <div className="col-md-12 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
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
    </div>
  );
}

export default SearchResult;
