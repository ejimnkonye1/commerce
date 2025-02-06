import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import initialProducts from "../productimg";
import '../styles/nav.css';

function Navbarsm({ cartItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState(false); // State for search error
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartItemCount = cartItems.length;
  const [catVisible, setCatVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true); // Initialize the menu as visible
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      // Perform your search here and set searchError accordingly
      if (query) {
        setSearchError(false); // Products found
        navigate(`/searchpg/${query}`);
      } else {
        setSearchError(true); // No products found
      }
    }
  };
  const toggleCatVisibility = () => {
    setCatVisible(!catVisible);
    setMenuVisible(false); // Hide the menu when showing categories
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
    setCatVisible(false); // Hide the categories when showing the menu
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // You can add code here to filter products based on the selected category
    // and perform a search for products within that category.
    // For example, you can use the category to filter products from a list.
  };
  return (
    <div className="bot   border-bottom ">
      <nav className="navbar  Small-nav navbar-expand-sm navbar-light bg-success">
     

        <div className="d-flex justify-content-between  ">
        
          <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="Logo"
            height="50"
            className="d-inline-block align-top brand"
          />
        </Link>

          
          {/* <Link to="/" className="logo">
            <img
              src={Logo}
              alt="Logo"
              height="30px"
              className="rounded-circle"
            />
          </Link> */}
          
          <form className="form-inline search-form"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission
              handleSearch(); // Manually trigger the search function
            }}
          >
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
          
          <div className="d-flex  nav-icon">

          <ul className="navbar-nav icon ml-auto d-flex flex-row ">

        <li className="nav-item">
          <div className="cart-icon">
            <Link to="/cart" className="nav-link text-white">
              <div className='cart-icon-container'>
                <i className="fas fa-shopping-cart"></i>
                {cartItemCount > 0 && <span className="count">{cartItemCount}</span>}
              </div>
            </Link>
          </div>
        </li>
        <li className="">
          <div className="menubar" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </li>
      </ul>
     </div>
        <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-primary" id="offcanvasExampleLabel">
           Estyne
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
        <div className="container">
  <div className="row">
    <div className="d-flex justify-content-center align-items-center border">
      <div className="col-6 text-start border-end ">
        <p className='text-center' onClick={toggleMenuVisibility} style={{ cursor: 'pointer', marginTop:'10px' }}>Menu</p>
      </div>
      <div className="col-6  ">
        <p className='text-center' onClick={toggleCatVisibility} style={{ cursor: 'pointer', marginTop:'10px' }}>Categorie</p>
      </div>
    </div>
  </div>
</div>

<div className="mt-5">
            
            {menuVisible && (
                    <div className="menu">
                      <h6 className="text-center">Menu</h6>
                      <ul className="navbar-nav mx-auto justify-content-center" id="navbar-nav">
            <li className="nav-item border-top">
              <Link className="nav-link active" to="/home">
               Home
              </Link>
            </li>
            <li className="nav-item border-top">
              <Link className="nav-link" to="/learn">
                 Learn
              </Link>
            </li>
            <li className="nav-item border-top">
              <Link className="nav-link" to="/shop">
                 Shop
              </Link>
            </li>
            <li className="nav-item border-top">
              <Link className="nav-link" to="/account">
                My Account
              </Link>
            </li>
          </ul>
                    </div>
                  )}
            {catVisible && (
              <div className="menu">
                <h6 className="text-center">Categories</h6>
                <ul className="navbar-nav">
              
                 
                  
                  
                
                {initialProducts.map((product, index) => (
                  <li className="nav-item border-top" key={index}>
                    <Link
                      className="nav-link"
                      to={`/menuitem/${product.name}`}
                      onClick={() => handleCategoryClick(product.name)}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}

              </ul>
              </div>
            )}
            </div>
          </div>
        

        {/* Fixed Bottom Navigation */}
        <div className="bot d-lg-none   bg-white bot" style={{marginBottom:''}}>
          <div className="border-top">
            <ul className="nav  nav-justified">
              <li className="nav-item text-center">
                <a href="https://www.facebook.com" className="nav-link">
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
              </li>
              <li className="nav-item text-center">
                <a href="https://www.instagram.com" className="nav-link">
                  <FontAwesomeIcon icon={faInstagram} size="" />
                </a>
              </li>
              <li className="nav-item text-center">
                <a href="https://twitter.com" className="nav-link">
                  <FontAwesomeIcon icon={faTwitter} size="" />
                </a>
              </li>
              <li className="nav-item text-center">
                <a href="https://www.youtube.com" className="nav-link">
                  <FontAwesomeIcon icon={faYoutube} size="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      
      </nav>
      
      <Outlet />
    </div>
  );
}

export default Navbarsm;
