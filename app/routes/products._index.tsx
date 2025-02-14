/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import initialProducts from '../productimg';
import { Form, Link } from '@remix-run/react';
import { CartContext, useCart } from '~/context/cartcontext';

type Product = {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
}
export default function Products() {
  // const [cart, setCart] = useState<Product[]>([]);
  const {  addToCart } = useCart();
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
  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <>
      <section className="lg:p-10 p-4">
        <div className="container mx-auto">
          <h5 className="text-center text-2xl text-gray-800 font-bold mb-6">Products</h5>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  lg:gap-y-[50px] lg:p-4">
            {currentProductsPage.map((product) => (
              <div
                className="max-w-sm bg-white lg:w-[250px] rounded-lg border border-gray-100 bg-gray-50  dark:border-gray-700 dark:bg-gray-800"
                key={product.id}
              >
                <div className="flex justify-center border-b ">
                  <Link to={`/products/${product.id}`}>
                    <img
                      className=" rounded-t-lg lg:w-[250px] object-cover lg:h-[250px]"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div className="px-5 pb-2 mt-4">
                  <Link to={`/products/${product.id}`}>
                    <h5 className="lg:text-md text-sm lg:font-semibold tracking-tight dark:text-white">
                      {product.name.toUpperCase()}
                    </h5>
                  </Link>
                  <div className="flex items-center flex-col lg:flex-row lg:justify-between hidden lg:flex">
                    <span className="text-sm font-semibold text-gray-300">₦{product.price}</span>
                    <button
                      onClick={handleAddToCart}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-2 py-2 text-lg mt-0"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="lg:hidden block flex-grow">
                    <p className="text-gray-300 lg:font-semibold text-sm">
                      <strong>₦{product.price}</strong>
                    </p>
                    <div className="text-center mt-4">
                      <button className="bg-blue-700 text-white text-sm py-2 px-4 rounded">Add to cart</button>
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
    </>
  );
}
