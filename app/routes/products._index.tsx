
import { useState } from 'react';
import initialProducts from '../productimg';
import { Link } from 'react-router-dom';

import Second from '../components/s'
import Footer from '../components/Footer'
import Test from '../components/test'


export default function Products({ cartItems, setCartItems }) {
  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      product.quantity = 1;
      setCartItems([...cartItems, product]);
    }
  };

  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsPage = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
    <>
    <section>

  <Second />
<Test />
    </section>
    <section className="mt-24 pt-[150px] p-10">
        <div className="container mx-auto">
          <h5 className="text-center text-2xl text-gray-400 font-bold mb-6">Products</h5>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-[100px] p-4">
            {currentProductsPage.map((product) => (
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
                key={product.id}
                
              >
                <div className="flex justify-center border-b pb-4">
                  <Link to={`/products/${product.id}`}> {/* Link to dynamic product details */}
                    <img
                      className="p-8 rounded-t-lg w-full object-cover lg:h-[250px]"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div className="px-5 pb-2 mt-4">
                  {/* <Link to={`/products/${index}`}> */}
                 < Link to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h5 className="lg:text-md text-sm font-semibold tracking-tight text-black">
                      {product.name}
                    </h5>
                  </Link>
                  <div className="flex items-center flex-col lg:flex-row lg:justify-between hidden lg:flex">
                    <span className="text-sm font-semibold text-red-600">₦{product.price}</span>
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-2 py-2 text-lg mt-0"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="lg:hidden block flex-grow">
                    <p className="text-red-600 font-semibold text-sm">
                      <strong>₦{product.price}</strong>
                    </p>
                    <div className="text-center mt-4">
                      <Link to={`/products/${product.id}`}>
                        <button className="bg-blue-700 text-white text-sm py-2 px-4 rounded">Add to cart</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <nav aria-label="Page navigation example flex justify-center">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <Link
                  to="#"
                  onClick={prevPage}
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-[#615c61] hover:bg-gray-300 rounded-s-lg hover:text-gray-700"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                  </svg>
                </Link>
              </li>

              {/* Pagination buttons */}
              {Array.from({ length: Math.ceil(currentProducts.length / productsPerPage) }, (_, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    onClick={() => setCurrentPage(index + 1)}
                    className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === index + 1 ? 'bg-gray-700 text-[#FEA116]' : 'bg-white text-gray-500'} border border-[#615c61] hover:bg-gray-300 hover:text-gray-700`}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="#"
                  onClick={nextPage}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#615c61] rounded-e-lg hover:bg-gray-300 hover:text-gray-700"
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    <section>
        <Footer />
    </section>
    </>
 
  );
}

