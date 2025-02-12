import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Form, Link, } from "@remix-run/react";
import  { CartModal } from '../modal/cart'
type Item = {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
}
export default function Navbar1() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [IsSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const toggleCartDropdown = () => setIsCartDropdownOpen(!isCartDropdownOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const handleSearchDropdown = () => {
    setIsSearchDropdownOpen(!IsSearchDropdownOpen);
    

  }
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Cart Dropdown Toggled:", !isDropdownOpen);

  }
   const [cart, setCart] = useState<Item[]>([]);
 

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
  return (
    <section>

 <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white p-4 bg-white dark:bg-gray-800 antialiased border-b border-1 border-white z-20">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold">Estyne</div>

        <div className="flex items-center dark:bg-gray-800 border rounded-md overflow-hidde hidden lg:flex">
          {/* All Categories Dropdown */}
          <div
      className="relative inline-block"
      
    >
      <button
      onClick={handleDropdown}
        className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        All categories
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="absolute top-[50px] z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>

          <Form action="/search" method="get" className="flex gap-2">
            <input
              type="text"
              name="q"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-64 focus:outline- dark:bg-gray-800"
            />
            <button type="submit" className="text-gray-300 bg-blue-700 px-4 py-2 text-sm">
              <span><CiSearch size={'25'} /></span>
            </button>
          </Form>
        </div>
      </div>

      <div className="flex items-center lg:space-x-2">
      <button
              type="button"
              onClick={handleSearchDropdown}
              aria-controls="ecommerce-navbar-menu-1"
              aria-expanded={IsSearchDropdownOpen}
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              <span className="sr-only">Open Menu</span>
         
              <span className="w-5 h-5 me-1" ><CiSearch />
                </span>             
            </button>
        <button
          id="myCartDropdownButton1"
          onClick={toggleCartDropdown}
          type="button"
          className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
        >
          <span className="sr-only">Cart</span>
          <div className="w-5 h-5 relative top-[-8px] left-2 rounded-full text-white flex items-center justify-center bg-blue-500">
            {cart.length}
          </div>
          <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
          <span className="hidden sm:flex">My Cart </span>
          <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
          </svg>
        </button>
     <CartModal 
     isCartDropdownOpen={isCartDropdownOpen}
     />

        <button
          id="userDropdownButton1"
          onClick={toggleUserDropdown}
          type="button"
          className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
        >
          <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
       <span className='hidden lg:flex'>   Account</span>
          <svg className="w-4 h-4 hidden lg:flex text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
          </svg>
        </button>

        {isUserDropdownOpen && (
          <div id="userDropdown1" className="absolute top-[50px] z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 z-20">
            <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              <li><Link to="/dash" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Profile</Link></li>
              <li><Link to="/dash/order" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Orders</Link></li>
              <li><Link to="/dash/setting" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Settings</Link></li>
            </ul>
            <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
              <Link to="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign Out</Link>
            </div>
          </div>
        )}
      </div>
      
    </nav>

{/* <form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
    </label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
            type="search" 
            id="default-search" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search Mockups, Logos..." 
            required 
        />
        <button 
            type="submit" 
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Search
        </button>
    </div>
</form> */}

    </section>
   
  );
}