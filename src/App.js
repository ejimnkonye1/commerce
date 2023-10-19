import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from "./Firebase"; // Import Firebase auth object
import './App.css';
import Head from './pages/Head';
import Navbarsm from './components/nav1';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Footer from './components/Footer';
import BottomNavbar from './components/bottomnav';
import Shop from './pages/Shop';
import MyHome from './pages/Homepg';
import Tools from './Tools';
import Layout from './pages/layout';
import ProductDetails from './pages/Productdetails';
import Cart from './pages/cart'; 
import SearchPage from './pages/Searchpg';
import Products from './pages/Products';
import ResetPassword from './pages/Resetpassword';
import PasswordResetSent from './pages/Resetmessage';
import AccountDashboard from './pages/AccountDashboard';
import Orders from './pages/Orders';
import MenuItem from './pages/Menuitempg';
import BillingAddressForm from './pages/billingad';
import AccountDetailsForm from './pages/accountdetails';
import Checkout from './pages/checkout';
import Login from './pages/test';
import Tablet from './components/tablet';
import Test from './components/payment';

import Search from './pages/Search';
import Payment from './components/payment';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]); // Define cart state
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [searchError, setSearchError] = useState(false); // State for search error
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  if (isLoading) {
    return (
      <div className='loader-con'>
      <div className="loader"></div>
      </div>
    );
  }
  return (
    <div >
   
    <div className="App">
   
      <BrowserRouter>
        <Head searchQuery={searchQuery} setSearchQuery={setSearchQuery} cartItems={cartItems}  />
        <Navbarsm cartItems={cartItems}   />
          <Tablet /> {/* Conditionally render Tablet */}
          
         <Navbar /> {/* Conditionally render Navbar */}
    
        {/* <Cart cartItems={cartItems} setCartItems={setCartItems} /> */}
  
        <Routes>
          <Route path='/' element={<Layout  cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path='/' element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/searchpg/:query" element={<SearchPage searchError={searchError} />} />
          <Route path="/menuitem/:query" element={<MenuItem />} />
          <Route path='/home' element={<Layout  cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/account">
          <Route path="/account" element={user ? <AccountDashboard /> : <Account />} />
          </Route>
          <Route path="/shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path='/learn' element={<Tools />} />
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/reset-message' element={< PasswordResetSent/>} />
          <Route path='/dashboard' element={<AccountDashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/address" element={<BillingAddressForm />} />
          <Route path="/acct-details" element={<AccountDetailsForm />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pay" element={<Payment cartItems={cartItems} />} />
        </Routes>
        <Footer />
        <BottomNavbar />
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
