/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import initialProducts from "../productimg";

function Products({ cartItems, setCartItems }) {
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

  const [currentProducts] = useState(initialProducts);

  return (
    <section className=" bg-gray-300 p-10">
      <div className="container">
        <div className="flex justify-between">
          <h3 className="text-green-500 text-xl font-sans font-bold">Featured Product</h3>
        </div>
      </div>
      <section className=" p-1">
          <div className="container mt-4" id="pro">
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-[100px]">
              {currentProducts.map((product, index) => (
                <div
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  border-b"
                  key={index}
                >
                  <Link to={`/product/${index}`}>
                    <img
                      className="p-8 rounded-t-lg w-full object-cover lg:h-[250px]"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                  <div className="px-5 pb-2 ">
                    <Link to={`/product/${index}`}>
                      <h5 className="lg:text-md text-sm font-semibold tracking-tight text-black ">
                        {product.name.toUpperCase()}
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    
                    </div>
                    <div className="flex items-center flex-col lg:flex-row lg:justify-between ">
                      <span className="text-sm font-bold text-black ">
                        NGN{product.price}
                      </span>
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-2 py-2 text- lg:mt-0 mt-2 "
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      <div className="flex justify-center bg-light mt-4">
        <Link to="/Shop" className="bg-green-500 text-white text-center py-2 px-6 rounded-lg mb-3">
          VIEW ALL
        </Link>
      </div>
    </section>
  );
}

export default Products;
