import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase"; // Import Firebase auth object

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Navbarsm from "../components/nav1";
import "../styles/nav.css";

function Head({ cartItems, loading }) {
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
      navigate('/account')
    });
  };

  const cartItemCount = cartItems.length;

  return (
    <div className="big-screen d-sm-none d-lg-block">
       {loading ? (
        <div className='loader-con'>
          <div className="loader"></div>
        </div>
      ) : (
  <nav className="navbar navbar-expand-lg navbar-light bg-success">
    <div className="container head">
      <div className="navbar-brand">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <a href="mailto:contact@example.com" className="nav-link text-white"  style={{fontSize:'15px'}}>
              <i className="fas fa-envelope text-white"></i> Estynetech@gmail
            </a>
          </li>
          <li className="nav-item">
            <a href="tel:1234567890" className="nav-link text-white" style={{fontSize:'15px'}}>
              <i className="fas fa-phone"></i> 070624873335
            </a>
          </li>
        </ul>
      </div>
      <form class="d-flex" role="search" style={{marginBottom:'10px', marginLeft:'30px'}}
       onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission
        handleSearch(); // Manually trigger the search function
      }}
      >
     <div className="search-input">
      <input
       className="form-control me-2"
       type="search"
       placeholder="I'm searching for..."
       aria-label="Search"
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       onKeyDown={(e) => {
         if (e.key === "Enter") {
           handleSearch();
         }
       }}
         />
         </div>
      {/* <button class="btn btn-outline-danger" type="submit"   onClick={handleSearch}>Search</button> */}
    </form>
      <div className=" d-flex justify-content-end">
  
     
        <ul className="navbar-nav mx-auto justify-content-between">
          <li>
            
          </li>
          {user ? (
            <li className="nav-item">
              <span className="nav-link"  style={{fontSize:'15px'}}>
                <i className="fas fa-user"></i> {user.email}
              </span>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/account"  style={{fontSize:'15px'}}>
                  <i className="fas fa-sign-in-alt"></i> Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/account" style={{fontSize:'15px'}}>
                  <i className="fas fa-login"></i> Login
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link to="/cart" className="nav-link text-white" style={{fontSize:'15px'}}>
            <div className="cart-icon-container">
              <i className="fas fa-shopping-cart"></i> {" "}
              {cartItemCount > 0 && <span className="count">{cartItemCount}</span>}
              </div>
            </Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="nav-link" style={{fontSize:'15px'}} onClick={handleSignOut}>
                <i className="fas fa-sign-out-alt"></i> Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
      )}
</div>

  );
}

export default Head;
