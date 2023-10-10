import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import initialProducts from '../pages/productimg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      navigate(`/search/${query}`);
    }
  };
  const { query } = useParams();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // You can add code here to filter products based on the selected category
    // and perform a search for products within that category.
    // For example, you can use the category to filter products from a list.
  };
  return (
    <div className="d-none d-lg-block">
      <nav className="navbar navbar-expand-lg navbar-light mt-3 border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
            <div className="btn-group">
              <button
                className="btn btn-secondary btn-md dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              > All categories
               
              </button>
              <ul className="dropdown-menu">
              
                 
                  
                  
                
                {initialProducts.map((product, index) => (
                  <li key={index}>
                    <Link
                      className="dropdown-item"
                      to={`/menuitem/${product.name}`}
                      onClick={() => handleCategoryClick(product.name)}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}

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
