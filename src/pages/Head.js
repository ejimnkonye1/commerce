import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Navbarsm from "../components/nav1";
function Head() {
  

 return (
  
      < div className="d-none d-lg-block">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    
      
    <div className="navbar-brand">
    
    <ul className="navbar-nav ml-auto ">
      
          <li className="nav-item">
            <a href="mailto:contact@example.com" className="nav-link" style={{fontSize: "small"}}>
            <i class="fas fa-envelope"></i> Estynetech@gmail
            </a>
          </li>
          <li className="nav-item" >
            <a href="tel:1234567890" className="nav-link"  style={{fontSize: "small"}}>
            <i class="fas fa-phone"></i> 070624873335
            </a>
            </li>
            </ul>

    </div>
        <ul className="navbar-nav mx-auto justify-content-between">
   
          <li className="nav-item">
            <a className="nav-link" href="#"   style={{fontSize: "small"}}>
            <i class="fas fa-sign-in-alt"></i>  signup
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  style={{fontSize: "small"}}>
            <i class="fas fa-login"></i>Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"  style={{fontSize: "small"}}>
          <i class="fas fa-shopping-cart"></i> Cart
           </a>
         </li>          
        </ul>
        
      </div>
    
  </nav>
  
  </div>

)
  

}

    
  


export default Head;
