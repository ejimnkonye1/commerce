import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/custom.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="d-none d-lg-block">
      <nav className="navbar navbar-expand-lg navbar-light mt-3 border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <div className="btn-group">
                <button
                  className="btn btn-secondary btn-lg dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All categories
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="wifi">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto">
              <ul className="navbar-nav ml-5" >
                <li className="nav-item">
                  <Link style={{marginLeft:'20px'}} className="nav-link ml-5 active" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{marginLeft:'20px'}}  className="nav-link ml-5" to="/learn">
                    Learn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{marginLeft:'20px'}} className="nav-link" to="/Shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link style={{marginLeft:'20px'}} className="nav-link" to="/account">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
