import React, { useState } from "react";
import { auth } from "../Firebase"; // Import Firebase auth object
import { Link, useNavigate } from "react-router-dom";
import "../styles/custom.css";
function AccountDetailsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null); // Store user information
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear any previous success messages
    setErrorMessage(""); // Clear any previous error messages

    try {
      const user = auth.currentUser;

      // Update email address
      await user.updateEmail(email);

      // Update password if newPassword is provided
      if (newPassword) {
        await user.updatePassword(newPassword);
      }

      // Update display name
      await user.updateProfile({
        displayName: displayName,
      });

      // Display a success message
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      // Handle errors
      setErrorMessage("Error updating profile: " + error.message);
    }
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
    <h5 className="mb-3 head"> <strong>MY Account</strong></h5>
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
          <div className="d-flex justify-content-between mb-2 phone-form" >
      <div>
        <label htmlFor="firstName">First name </label>
        <br/>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
         size={50}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name *</label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          size={50}
        />
      </div>
      </div>
      <div>
        <label htmlFor="displayName">Display name </label>
        <br/>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          size={100}
        />
      
      </div>
      <div className="mb-3 mt-2">
        
        <label htmlFor="email">Email address </label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          size={100}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="currentPassword">
          Current Password (leave blank to leave unchanged)
        </label>
        <br />
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          size={100}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="newPassword">
          New Password (leave blank to leave unchanged)
        </label>
        <br />
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          size={90}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmNewPassword">Confirm New Password</label>
        <br />
        <input
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          size={80}
        />
      </div>
      <div className="save-btn mb-2">
        <button className="btn btn-danger" type="submit">Save</button>
      </div>
      {successMessage && <p className="text-success">{successMessage}</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </form>
      </div>
 
    </div>
  </div>
   
  );
}

export default AccountDetailsForm;
