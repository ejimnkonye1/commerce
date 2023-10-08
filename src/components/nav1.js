import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../images/logo.png'
function Navbarsm() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   
    return (
      <div className="d-lg-none fixed-top">
        
      <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between">
        
      <button className="navbar-toggler mr-auto" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      
    
        <form className="form-inline " style={{marginRight:'50px'}} >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              width={'40px'}
            />
            
          </div>
        </form>
    
        {/* <div className="navbar-brand" >
          <img
            src={Logo}
            alt="Logo"
            height={50}
            width={50}
            className="logo rounded-circle"
          />
        </div> */}
    
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
