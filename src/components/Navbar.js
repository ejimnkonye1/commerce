import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../styles/custom.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='d-none d-lg-block'>
        <nav className="navbar navbar-expand-lg navbar-light mt-5">
            <div className='container'>
                <div className='d-flex align-items-center'>
        <div class="btn-group">
  <button class="btn btn-secondary 
   btn-lg 
  dropdown-toggle"
   type="button" 
    data-bs-toggle="dropdown" 
   aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="wifi">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
           
            <div style={{marginLeft: "100px"}} >
                <ul className="nav ml-lg-3justify-content-start">
                    <li className="nav-item" >
                        <Link className="nav-link active"  to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className="nav-link" to="/learn">Learn</Link>
                    </li>
                  
                    <li className="nav-item" >
                        <Link className="nav-link"  to="/Shop">Shop</Link>
                    </li>
                    <li className="nav-item" >
                    <Link className="nav-link"  to="/account">MyAccount</Link>

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
