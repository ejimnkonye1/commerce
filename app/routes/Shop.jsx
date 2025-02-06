import { useState} from 'react';
import initialProducts from '../productimg';
import { Link } from 'react-router-dom';
import ProductDetails from './Productdetails';
import CustomPagination from '../components/pagination';
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
            <div className="container"style={{marginTop:'90px'}} id="pro">
          
              <div className="row ">
                   <h5 className="shop">SHOP</h5>
                {currentProductsPage.map((product, index) => (
                  <div className="col-6 col-md-4 mt-5 mb-4 col-lg-3 col-sm-6 d-flex" key={index}>
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
                          <strong>NGN{product.price}</strong>
                        </p>
                        <div className="detil text-center">
                          <Link to={`/product/${index}`}>
                            <p className="detil btn btn-danger">View Details</p>
                          </Link>
                          
                        </div>
                        {/* <button className='btn btn-primary ' onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="d-flex justify-content-center">
  <CustomPagination 
    currentPage={currentPage}
    totalPages={Math.ceil(currentProducts.length / productsPerPage)}
    prevPage={prevPage}
    nextPage={nextPage}
  />
</div>


      
    </section>
  );
}

export default Shop;
