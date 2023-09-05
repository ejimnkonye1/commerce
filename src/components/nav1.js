import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbarsm() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   
    return (
      <div className=" d-lg-none fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            <img src="logo.png" alt="Logo" className="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show right-collapse' : ''}`}>
            <ul className="navbar-nav mx-auto justify-content-center" id="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn">
                  <i className="fas fa-graduation-cap"></i> Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  <i className="fas fa-shopping-cart"></i> Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <i className="fas fa-user"></i> My Account
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  
}

export default Navbarsm;
