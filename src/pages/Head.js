import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Navbarsm from "../components/nav1";
function Head({ cartItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      navigate(`/search/${query}`);
    }
     // Function to count the number of items in the cart


  };
 // Function to count the number of items in the cart
 // Calculate the number of items in the cart
 const cartItemCount = cartItems.length;
 console.log('Cart Item Count:', cartItemCount); 


 return (
  
      < div className="d-none d-lg-block">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    
      
    <div className="navbar-brand">
    
    <ul className="navbar-nav ml-auto ">
      
          <li className="nav-item">
            <a href="mailto:contact@example.com" className="nav-link" >
            <i class="fas fa-envelope"></i> Estynetech@gmail
            </a>
          </li>
          <li className="nav-item" >
            <a href="tel:1234567890" className="nav-link"  >
            <i class="fas fa-phone"></i> 070624873335
            </a>
            </li>
            </ul>

    </div>
   
<div className="d-flex justify-content-end">
<form class="d-flex" role="search">
      <input class="form-control me-2"
       type="search" placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      
      />
      <button class="btn btn-outline-success"
                         type="button"
                         onClick={handleSearch}
       
       >
        
        Search</button>
    </form>
 


        <ul className="navbar-nav mx-auto justify-content-between">
   
          <li className="nav-item">
            <a className="nav-link" href="/account"  >
            <i class="fas fa-sign-in-alt"></i>  signup
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/account" >
            <i class="fas fa-login"></i>Login
            </a>
          </li>
       <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Cart{" "}
                  {cartItemCount > 0 && (
                    <span className="">{cartItemCount}</span>
                  )}
                </Link>
              </li>
        </ul>
        </div>
      </div>
    
  </nav>
  
  </div>

);
  

}

    
  


export default Head;
