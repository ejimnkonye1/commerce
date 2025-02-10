/* eslint-disable react/no-unescaped-entities */
import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function Navbar2 ()  {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [location, setLocation] = useState("");
  return (
    <nav className="bg-white dark:bg-gray-800 antialiased fixed top-[70px] left-0 w-full border-t border-white z-10">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
        <button
              type="button"
              onClick={toggleMobileMenu}
              aria-controls="ecommerce-navbar-menu-1"
              aria-expanded={isMobileMenuOpen}
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              <span className="sr-only">Open Menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>                
            </button>
          <div className="flex items-center space-x-8">
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <li>
                <Link href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Home
                </Link>
              </li>
              <li className="shrink-0">
                <Link href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Learn
                </Link>
              </li>
              <li className="shrink-0">
                <Link href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Products
                </Link>
              </li>
              <li className="shrink-0">
                <Link href="#" title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Privacy
                </Link>
              </li>
              <li className="shrink-0">
                <Link href="#" title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Account
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:space-x-2 ">
          <div className="flex items-center gap-2 hidden">
      <span className="text-gray-600">Deliver to:</span>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
           
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="ecommerce-navbar-menu-1" className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4">
            <ul className="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
              <li><Link href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home</Link></li>
              <li><Link href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Learn</Link></li>
              <li><Link href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Product</Link></li>
              <li><Link href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Account</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
