import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="footer  bg-light border-top"  id="abt">
      <div className="container ">
        <div className="mb-3"> 
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center mb-2">About Us</h4>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4">
            <h5>Branch Contacts</h5>
            
              <>
                Address: shop eu2 9&10 army shopping arena ibadan<br />
                Phone number: 08137795180
              </>
            
          </div>
          <div className="lin col-md-4">
            <h5>Quick Links</h5>
            <ul className="">
              <li className=""><Link to="/">Home</Link></li>
              <li><Link to="/learn">Learn</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/my-account">My Account</Link></li>
            </ul>
          </div>
          <div className="col-md-4 ct mb-5">
            <h5  className="">Connect with Us</h5>
            <div className="social-icons p-2 ">
              <a href="https://facebook.com/yourhandle" className="social-icon ">
                <FontAwesomeIcon icon={faFacebook} className="m-1" />
              </a>
              <a href="https://instagram.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} className="m-1" />
              </a>
              <a href="https://twitter.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} className="m-1" />
              </a>
              <a href="https://tiktok.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faTiktok} className="m-1" />
              </a>
              <a href="https://whatsapp.com/yournum" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} className="m-1" />
              </a>
              <a href="https://threads.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faThreads} className="m-1" />
              </a>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
