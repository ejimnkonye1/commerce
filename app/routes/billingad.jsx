import React, { useState } from "react";
import { auth } from "../Firebase"; // Import Firebase auth object
import { Link, useNavigate } from "react-router-dom";
import "../styles/custom.css";
function BillingAddressForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null); // Store user information
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    // You can access the form data using the state variables
  };
  const handleSignOut = () => {
    // Sign out the user
    auth.signOut().then(() => {
      // User signed out successfully
      setUser(null); // Clear user information
      navigate('/account')
    });
  };
  return (
    <div className="container">
   
    <div className="row mt-5">
    <h5 className="mb-3"> <strong>MY Account</strong></h5>
      <div className="col-md-3">
        {/* Sidebar with links */}
        <ul className="list-group">
  <li className="list-group-item">
    <Link to="/dashboard">Dashboard</Link>
  </li>
  <li className="list-group-item">
    <Link to="/orders">Orders</Link>
  </li>
  <li className="list-group-item">
    <Link to="/address">Address</Link>
  </li>
  <li className="list-group-item">
    <Link to="/acct-details">Account Details</Link>
  </li>
  <li className="list-group-item">
    <Link to="/account">Logout</Link>
  </li>
</ul>

      </div>
      <div className="col-md-9">
        {/* Content of the dashboard */}
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between mb-2 phone-form">
      <div>
        <label htmlFor="firstName">First name </label>
        <br />
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          size={40}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name </label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          size={45}
        />
      </div>
      </div>
      <div className="mb-3">
        <label htmlFor="companyName">Company name (optional)</label>
        <br />
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          size={70}
        />
      </div>
      {/* <div>
        <label htmlFor="country">Country / Region *</label>
        <br />
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="Nigeria">Nigeria</option>
          <option value="Nigeria">Isreal</option>
          <option value="Nigeria">USA</option>
     
        </select>
      </div> */}
      <div className="mb-3">
        <label htmlFor="streetAddress">Street address </label>
        <br />
        <input
          type="text"
          id="streetAddress"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          required
        />
      </div>
      {/* Add more fields for apartment, city, state, phone, and email */}
      <div className="mb-3">
        <button className="btn btn-danger" type="submit">Save Address</button>
      </div>
    </form>
      
      </div>
 
    </div>
  </div>
   
  );
}

export default BillingAddressForm;
