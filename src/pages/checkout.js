import React, { useState } from 'react';
import { Link} from 'react-router-dom';

function Checkout({cartItems,}) {
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
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState(""); // Password field
  const [user, setUser] = useState(null); // Store user information
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      // Assuming each item has a "price" property and considering quantity
      totalPrice += parseFloat(item.price) * item.quantity;
    }
    return totalPrice;
  };
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send payment data to a payment gateway
    // You would typically integrate with a payment gateway library to securely process payments.
  };

  return (
    <div className="container mt-5">
      <h5>Checkout</h5>
      <p>Returning customer <Link>
      click here to Login
      </Link></p>
      <div className='row'>
        <h5>Billing details</h5>
      <div className='col-6'>
      <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between mb-2 phone-form">
              <div>
                <label htmlFor="firstName">First name</label>
                <br />
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  size={30}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  size={30}
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
            <div className="mb-3">
              <label htmlFor="country">Country / Region *</label>
              <br />
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required

              >
                <option value="Nigeria">Nigeria</option>
                <option value="Isreal">Isreal</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="streetAddress">Street address</label>
              <br />
              <input
                type="text"
                id="streetAddress"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
                size={70}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apartment">Apartment (optional)</label>
              <br />
              <input
                type="text"
                id="apartment"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                size={70}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                size={70}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="state">State</label>
              <br />
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                size={70}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone</label>
              <br />
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size={70}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size={70}
              />
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="checkbox"
                  id="createAccount"
                  onChange={(e) => setCreateAccount(e.target.checked)}
                />
                Create Account
              </label>
            </div>

            {createAccount && (
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
)}
          
          </form>
      </div>
      <div className='col-6'>
   
      
      <div>
        <h3>Your Orders</h3>
        <table className="table">
    <thead className='border'> 
      <tr>
        <th>Product</th>
        
        
        <th>SubTotal</th>
      </tr>
    </thead >
    <tbody className='border'>
      {cartItems.map((item, index) => (
        <tr key={index}>
          <td>{item.name} x {item.quantity}</td>
        
          
          <td>NGN{(item.price * item.quantity).toFixed(2)}</td>
          
        </tr>
      ))}
    </tbody>
    <tbody className='border'>
  
  <tr>
    <td>Subtotal</td>
  
    
    <td> NGN{calculateTotalPrice()}</td>
    
  </tr>

</tbody>
    <tbody className='border'>
  
        <tr>
          <td>Shipping Fee </td>
        
          
          <td> NGN2000</td>
          
        </tr>
    
    </tbody>
    <tbody className='border'>
  
  <tr>
    <td>Total</td>
  
    
    <td> Total Price: NGN{calculateTotalPrice() + 2000}</td>
    
  </tr>

</tbody>
  </table>


  <p></p>
      </div>
      <div class="container">
        <h2>Payment Page</h2>

        <div class="payment-options">
            <div class="payment-method">
                <label for="bankTransfer">
                <input className='mr-3' type="radio" id="bankTransfer" name="paymentMethod" value="bankTransfer"/>
                      Direct bank transfer
                </label>
                <p>
                    Make your payment directly into our bank account.
                    Please use your Order ID as the payment reference.
                    Your order will not be shipped until the funds have cleared in our account.
                </p>

            </div>

            {/* <div class="payment-method">
                <label for="cardPayment">
                    Pay with card
                </label>
                <p>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
                <input type="radio" id="cardPayment" name="paymentMethod" value="cardPayment"/>
            </div> */}
        </div>

        <div class="terms-and-conditions">
            <label>
                <input type="checkbox" className='mr-3 p-2' id="agreeToTerms" name="agreeToTerms"/>
              I have read and agree to the website terms and conditions
            </label>
        </div>

        <div class="payment-button mt-3">
            <p className='btn btn-danger '>Place Order</p>
        </div>
        
    </div>
    </div>
    </div>
    </div>
  );
}

export default Checkout;
