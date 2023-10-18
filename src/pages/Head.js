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
      navigate(`/searchpg/${query}`);
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
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container head">
      <div className="navbar-brand">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <a href="mailto:contact@example.com" className="nav-link">
              <i className="fas fa-envelope"></i> Estynetech@gmail
            </a>
          </li>
          <li className="nav-item">
            <a href="tel:1234567890" className="nav-link">
              <i className="fas fa-phone"></i> 070624873335
            </a>
          </li>
        </ul>
      </div>

      <div className=" d-flex justify-content-end">
        <form className="form d-flex " role="search"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission
            handleSearch(); // Manually trigger the search function
          }}
        >
          <div>
          <input
            className="form-control me-2"
            type="search"
            placeholder="I'm searching for.."
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
          </div>
        </form>
        <ul className="navbar-nav mx-auto justify-content-between">
          {user ? (
            <li className="nav-item">
              <span className="nav-link">
                <i className="fas fa-user"></i> {user.email}
              </span>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <i className="fas fa-sign-in-alt"></i> Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <i className="fas fa-login"></i> Login
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i> Cart{" "}
              {cartItemCount > 0 && <span className="">{cartItemCount}</span>}
            </Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="nav-link" onClick={handleSignOut}>
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
