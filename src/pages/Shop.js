import {React, useState} from 'react';
import initialProducts from './productimg';
import { Link } from 'react-router-dom';
import ProductDetails from './Productdetails';

function Shop() {
 
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsPage = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < Math.ceil(currentProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    
  };

 
  
  return (


    <section>
      <div className="container-fluid bg-light">
        <h5 className="p-5 m-0">SHOP</h5>
      </div>
      <div className="container">
        <div className="row p-5">
          <section className="bg-white d-flex justify-content-end">
            {/* Apply the 'container' class directly to the product container */}
            <div className="container" id="pro">
              <div className="row">
                {currentProductsPage.map((product, index) => (
                  <div className="col-md-4 mb-4 col-lg-4 col-sm-6 d-flex" key={index}>
                    <div className="card border-1 shadow-sm d-flex flex-column h-100 product-card">
                      <div className="border-bottom pb-2 d-flex justify-content-center">
                        {/* Use Link to navigate to the product details page */}
                        <Link to={`/product/${index}`}>
                          <img
                            src={product.image}
                            className="card-img-top"
                            style={{ width: '70%' }}
                            alt={product.name}
                          />
                        </Link>
                      </div>
                      <div className="card-body">
                        <p className="card-title">{product.name}</p>
                        <p className="card-text text-success">
                          <strong>{product.price}</strong>
                        </p>
                        <div className="text-center">
                          <Link to={`/product/${index}`}>
                            <p className="btn btn-success">View Details</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={prevPage}>
              Previous
            </button>
          </li>
          {/* Create page number buttons */}
          {Array.from({ length: Math.ceil(currentProducts.length / productsPerPage) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(currentProducts.length / productsPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Shop;
