import React from "react";
import { auth } from "../Firebase"; // Import Firebase auth object
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Orders = () => {
  const [user, setUser] = useState(null); // Store user information
  const navigate = useNavigate();
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
         <div>
      <h3>Your Orders will display here</h3>
    </div>
       </div>
  
     </div>
   </div>
    );
}

  export default Orders;