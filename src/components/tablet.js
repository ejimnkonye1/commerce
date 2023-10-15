import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
const Tablet = () => {
    return (
        <div>
              <header className="tablet">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" id="Logo" href="#" ><img src={Logo} height="30px"  alt="Domi Board Logo"
                    class="rounded-circle" width="120px"  /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                    <li className="nav-item">
              <Link className="nav-link active" to="/home">
           Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
           Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
           Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
            My Account
              </Link>
            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
        </div>
    )
}
export default Tablet;