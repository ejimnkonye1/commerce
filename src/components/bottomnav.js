import React from "react";
import { Link } from "react-router-dom";

function BottomNavbar() {
  
    return (
      <div className="d-lg-none fixed-bottom bg-white">
        <div className="border-top">
          <ul className="nav nav-pills nav-justified"> {/* Removed 'nav-justified' class */}
            <li className="nav-item  text-center"> {/* Added 'flex-fill' class */}
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>
                <div>Home</div>
              </Link>
            </li>
            <li className="nav-item  text-center"> {/* Added 'flex-fill' class */}
              <Link to="/shop"  className="nav-link">
                <i className="fas fa-store"></i>
                <div>Shop</div>
              </Link>
            </li>
            <li className="nav-item  text-center"> {/* Added 'flex-fill' class */}
              <a href="/cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i>
                <div>Cart</div>
              </a>
            </li>
            <li className="nav-item  text-center"> {/* Added 'flex-fill' class */}
              <Link to="/account" className="nav-link">
                <i className="fas fa-user"></i>
                <div>Account</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
    }

export default BottomNavbar;
