import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase"; // Import Firebase auth object
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Navbarsm from "./nav1"; // Make sure this is correctly imported

import { FaEnvelope, FaPhoneAlt, FaUser, FaSignInAlt, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";
export default function Navbar1 ({ cartItems, loading }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null); // Store user information
  const navigate = useNavigate();
  const [searchError, setSearchError] = useState(false); // State for search error

  useEffect(() => {
    // Add a Firebase authentication listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      // Perform your search here and set searchError accordingly
      if (query) {
        setSearchError(false); // Products found
        navigate(`/searchpg/${query}`);
      } else {
        setSearchError(true); // No products found
      }
    }
  };

  const handleSignOut = () => {
    // Sign out the user
    auth.signOut().then(() => {
      // User signed out successfully
      setUser(null); // Clear user information
      navigate('/account');
    });
  };

  const cartItemCount = cartItems.length;

  return (
    <div className="hidden lg:block">
    {loading ? (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    ) : (
      <nav className="bg-gray-700">
        <div className="container mx-auto flex justify-between items-center p-4">
          
          {/* Contact Links */}
          <div className="flex space-x-6">
            <a href="mailto:contact@example.com" className="text-white text-sm flex items-center">
              <FaEnvelope className="mr-2" /> Estynetech@gmail
            </a>
            <a href="tel:1234567890" className="text-white text-sm flex items-center">
              <FaPhoneAlt className="mr-2" /> 070624873335
            </a>
          </div>
  
          {/* Search Form */}
          <form
            className="flex w-full max-w-md mx-4"
            role="search"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              handleSearch(); // Trigger the search function
            }}
          >
            <div className="relative w-full">
              <input
         className="w-full py-2 px-4 rounded-lg text-white bg-gray-800 placeholder-white focus:outline-none focus:ring-2 focus:ring-green-500"
                type="search"
                placeholder="I'm searching for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </div>
          </form>
  
          {/* User & Cart Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <span className="text-white text-sm flex items-center">
                <FaUser className="mr-2" /> {user.email}
              </span>
            ) : (
              <>
                <Link to="/account" className="text-white text-sm flex items-center">
                  <FaSignInAlt className="mr-2" /> Sign Up
                </Link>
                <Link to="/account" className="text-white text-sm flex items-center">
                  <FaSignInAlt className="mr-2" /> Login
                </Link>
              </>
            )}
  
            {/* Cart Icon from React Icons */}
            <Link to="/cart" className="text-white text-sm relative flex items-center">
              <FaShoppingCart className="mr-2" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
  
            {/* Sign Out Link */}
            {user && (
              <Link
                to="/account"
                onClick={handleSignOut}
                className="text-white text-sm flex items-center"
              >
                <FaSignOutAlt className="mr-2" /> Sign Out
              </Link>
            )}
          </div>
        </div>
      </nav>
    )}
  </div>
  
  
  );
}


