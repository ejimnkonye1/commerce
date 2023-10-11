import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase"; // Import Firebase auth object

const AccountDashboard = () => {
  const [user, setUser] = useState(null); // Store user information
  const navigate = useNavigate();

  useEffect(() => {
    // Add a Firebase authentication listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
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
          <h3>Welcome to your account dashboard</h3>
          <p>From your account dashboard, you can:</p>
          <ul>
            <li>View your recent orders</li>
            <li>Manage your shipping and billing addresses</li>
            <li>Edit your password and account details</li>
          </ul>
          {user ? (
            <p>Hello {user.email} (not {user.email}? <Link to="/account" onClick={handleSignOut}>Log out</Link>)</p>
          ) : (
            <p>You are not logged in.</p>
          )}
        </div>
   
      </div>
    </div>
  );
};

export default AccountDashboard;
