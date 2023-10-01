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

function Footer () {
    return (

    <footer className="footer mt-4 bg-light border-top" id="abt">
  <div className="container text-center">
    <div className="row">
      <div className="col-md-12">
        <h3>About Us</h3>
        
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-4">
        <h4>Branch Contacts</h4>
        <ul>
          <li>
            Address: shop eu2 9&10 army shopping arena ibadan<br />
            Phone number: 08137795180
          </li>
          
        </ul>
      </div>
      <div className="col-md-4">
            <h4 id="ct">Connect with Us</h4>
            <div className="social-icons p-2 ">
              <a href="https://facebook.com/yourhandle" className="social-icon ">
                <FontAwesomeIcon icon={faFacebook}  className="m-1" />
              </a>
              <a href="https://instagram.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faInstagram}  className="m-1"/>
              </a>
              <a href="https://twitter.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faTwitter}   className="m-1"/>
              </a>
              <a href="https://tiktok.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faTiktok}   className="m-1"/>
              </a>
              <a href="https://whatsapp.com/yournum" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp}   className="m-1"/>
              </a>
              <a href="https://threads.com/yourhandle" className="social-icon">
                <FontAwesomeIcon icon={faThreads}   className="m-1"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;