import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

type Item = {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
}
export default function Cart() {
  const [cart, setCart] = useState<Item[]>([]);


  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as Item[];

  //   console.log("Loaded cart from localStorage:", storedCart);
  //   setCart(storedCart);
  // }, []);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
  
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart) as Item[];
        console.log("Loaded cart from localStorage:", parsedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCart([]); // Fallback to an empty cart if parsing fails
      }
    }
  }, []);
  const removeFromCart = (id:number) => {
    console.log("Removing item with ID:", id);

    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Updated cart after removal:", updatedCart);
  };
  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) => {
      // Update the cart items with the new quantity
      const updatedCart = prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) } // Ensure quantity doesn't go below 1
            : item
        )
        .filter((item) => item.quantity > 0); // Remove products with quantity 0
  
      // If the updated cart is empty, clear the cart from localStorage
      if (updatedCart.length === 0) {
        localStorage.removeItem("cart");
      } else {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
  
      return updatedCart;
    });
  };
  
  const totalPrice = cart.reduce((total, item) => total + (item.price) * item.quantity, 0);


  return (
 

    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link to="#" className="shrink-0 md:order-1">
                        <img className="h-20 w-20 dark:hidden" src={item.image} alt={item.name} />
                        <img className="hidden h-20 w-20 dark:block" src={item.image} alt={item.name} />
                      </Link>

                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button type="button" onClick={() => updateQuantity(item.id, -1)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                          </button>
                          <input type="text" className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" value={item.quantity} readOnly />
                          <button type="button" onClick={() => updateQuantity(item.id, 1)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link to="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}</Link>
                        <div className="flex items-center gap-4">
                          <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            Add to Favorites
                          </button>

                          <button type="button" onClick={() => removeFromCart(item.id)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div className="space-y-4">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd className="text-base font-medium text-green-600">-$299.00</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                <dd className="text-base font-bold text-gray-900 dark:text-white">${(totalPrice + 99 + 799 - 299).toFixed(2)}</dd>
              </dl>

              <Link to="/checkout" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Continue Shopping
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                  <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                </div>
                <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
