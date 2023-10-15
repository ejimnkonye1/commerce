import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import '../styles/nav.css';

function Navbarsm({ cartItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartItemCount = cartItems.length;
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      navigate(`/search/${query}`);
    }
  };
  
  return (
    <div className="bot fixed-top border-bottom">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="d-flex justify-content-between">
          <div className="menubar" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          
          <Link to="/" className="logo">
            <img
              src={Logo}
              alt="Logo"
              height="30px"
              className="rounded-circle"
            />
          </Link>
          
          <form className="form-inline search-form">
            <div className="input-group" style={{width:''}}>
              <input
                type="text"
                className="form-control"
                placeholder="i'm searching for.."
                aria-label="I'm searching for.."
                aria-describedby="basic-addon2"
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
          
          <div className="cart-icon">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
          </div>
        </div>
        
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
