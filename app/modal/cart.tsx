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
type CartModalProps = {
   isCartDropdownOpen: boolean;
  cart: Item[];
  removeFromCart: (itemId: number) => void;
};

export function CartModal({ isCartDropdownOpen, cart, removeFromCart }: CartModalProps) {
  const handleRemoveCart = (itemId: number) => {
    removeFromCart(itemId); 
};
    return(
        <>
       {isCartDropdownOpen && (
          <div id="myCartDropdown1" className="absolute z-10 top-[50px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 z-20 max-h-[200px] overflow-y-auto">
            {/* Cart dropdown content */}
            <div className="grid grid-cols-1">
       {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
 <div>
                <Link to="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">{item.name}</Link>
                <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">{item.price}</p>
              </div>
              <div className="flex items-center justify-end gap-6">
                <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                <button type="button" onClick={() => handleRemoveCart(item.id)} className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span className="sr-only">Remove</span>
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
          </div>

        ))
        ):(
          <p>Your cart is empty</p>
       )}
              
            </div>
            <Link to="/checkout" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button">Proceed to Checkout</Link>
          </div>
        )}    
        </>
    )
}
