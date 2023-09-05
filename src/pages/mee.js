import React from "react";

function Navbarlg() {
  const isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed

  if (isSmallScreen) {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src="logo.png" alt="Logo" className="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" >
            <form className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>

            <a href="#" className="nav-link">
              <i className="fas fa-shopping-cart"></i> Cart
            </a>
          </div>
        </div>
      </nav>
    );
  } else {
    return null; // Don't render the navigation bar on larger screens
  }
}

export default Navbarlg;
