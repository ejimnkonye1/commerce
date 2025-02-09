
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "@remix-run/react";
export default function Second  () {
  const [searchQuery, setSearchQuery] = useState("");
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);


  const toggleCartDropdown = () => setIsCartDropdownOpen(!isCartDropdownOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white p-4  bg-white dark:bg-gray-800 antialiased  border-b border-1 border-white z-10" >

    <div className="flex items-center gap-4">
  
      <div className="text-xl font-bold">Estyne</div>

    
      <div className="flex items-center dark:bg-gray-800 border rounded-md overflow-hidden">
        {/* All Categories Dropdown */}
        <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 "
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
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
className="absolute z-10 top-[50px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-64 focus:outline- dark:bg-gray-800"
        />
        <button className=" text-gray-300 bg-blue-700  px-4 py-2">
          <span><CiSearch size={'25'} /></span>
        </button>
      </div>
    </div>

    
    
    <div className="flex items-center lg:space-x-2">
            <button
              id="myCartDropdownButton1"
              onClick={toggleCartDropdown}
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span className="sr-only">Cart</span>
              <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg> 
              <span className="hidden sm:flex">My Cart</span>
              <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
              </svg>              
            </button>

            {isCartDropdownOpen && (
              <div id="myCartDropdown1" className="absolute z-10 top-[50px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
                {/* Cart dropdown content */}
                <div className="grid grid-cols-2">
                  <div>
                    <Link href="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Apple iPhone 15</Link>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
                    <button type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                      <span className="sr-only">Remove</span>
                      <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Repeat for other cart items */}
                <Link href="#" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button">Proceed to Checkout</Link>
              </div>
            )}

            <button
              id="userDropdownButton1"
              onClick={toggleUserDropdown}
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>              
              Account
              <svg className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
              </svg> 
            </button>

            {isUserDropdownOpen && (
              <div id="userDropdown1" className="absolute top-[50px] z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  <li><Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">My Account</Link></li>
                  <li><Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">My Orders</Link></li>
                  <li><Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Settings</Link></li>
                  <li><Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Favourites</Link></li>
                  <li><Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Delivery Addresses</Link></li>
                  <li><Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Billing Data</Link></li>
                </ul>
                <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Link href="#" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign Out</Link>
                </div>
              </div>
            )}

        
          </div>
  </nav>
  );
}


