import React from "react";

const Orders = () => (
    
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
         <div>
      <h3>Your Orders will display here</h3>
    </div>
       </div>
  
     </div>
   </div>
  );

  export default Orders;