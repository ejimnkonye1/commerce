import React from 'react';

const AccountDashboard = () => {
  return (
    <div className="container">
      <h2>My Account</h2>
      <div className="row mt-5">
        <div className="col-md-3">
          {/* Sidebar with links */}
          <ul className="list-group">
            <li className="list-group-item"><a href="/dashboard">Dashboard</a></li>
            <li className="list-group-item"><a href="/orders">Orders</a></li>
            <li className="list-group-item"><a href="/downloads">Downloads</a></li>
            <li className="list-group-item"><a href="/addresses">Addresses</a></li>
            <li className="list-group-item"><a href="/payment-methods">Payment Methods</a></li>
            <li className="list-group-item"><a href="/paypal-payments">PayPal Payments</a></li>
            <li className="list-group-item"><a href="/account-details">Account Details</a></li>
            <li className="list-group-item"><a href="/logout">Logout</a></li>
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
          <p>Hello [User's Name] (not [User's Name]? <a href="/logout">Log out</a>)</p>
        </div>
   
      </div>
    </div>
  );
};

export default AccountDashboard;
