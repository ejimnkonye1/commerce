import {React, useState} from 'react';
import initialProducts from './productimg';
import { Link } from 'react-router-dom';
import ProductDetails from './Productdetails';

function Shop({ cartItems, setCartItems }) {

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
    
      <div className=" ">
   
        <div className="">
          <section className="">
            {/* Apply the 'container' class directly to the product container */}
            <div className="container" id="pro">
          <div className='mb-4'>
          <h5 className="  mt-5">SHOP</h5>
          </div>
              <div className="row mt-4">
                {currentProductsPage.map((product, index) => (
                  <div className="col-6 col-md-4 mb-4 col-lg-4 col-sm-6 d-flex" key={index}>
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
                        <p className="card-text text-primary">
                          <strong>NGN{product.price}</strong>
                        </p>
                        <div className="text-center">
                          <Link to={`/product/${index}`}>
                            <p className="btn btn-success">View Details</p>
                          </Link>
                          
                        </div>
                        <button className='btn btn-primary ' onClick={() => handleAddToCart(product)}>Add to Cart</button>
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
