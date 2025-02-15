/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import initialProducts from "../productimg";
import { useCart } from "~/context/cartcontext";

type Product = {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
}
function Products() {
  const {  addToCart } = useCart();
  const [currentProducts] = useState(initialProducts);
 
  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
  };
  return (
    <section className=" p-4 lg:p-10">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h3 className="text-gray-800 text-xl font-sans font-bold">Featured Product</h3>
        </div>
      </div>
      <section className=" p-1">
          <div className="container mt-4" id="pro">
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-y-[60px] mb-[50px]">
            {currentProducts.map((product) => (
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
                      onClick={() => addToCart(product)}
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
        </section>
      <div className="flex justify-center bg-light mt-2">
        <Link to="/Shop" className="bg-gray-500 text-white text-center py-2 px-6 rounded-lg mb-3">
          VIEW ALL
        </Link>
      </div>
    </section>
  );
}

export default Products;
