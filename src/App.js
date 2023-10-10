import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]); // Define cart state
  

  return (
    <div className="App">
      <BrowserRouter>
        <Head searchQuery={searchQuery} setSearchQuery={setSearchQuery} cartItems={cartItems}  />
        <Navbarsm />
        <Navbar />
        {/* <Cart cartItems={cartItems} setCartItems={setCartItems} /> */}
    
        <Routes>
          <Route path='/' element={<Layout  cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path='/' element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/menuitem/:query" element={<MenuItem />} />
          <Route path='/home' element={<Layout  cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/account" element={<Account />} />
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
        </Routes>
        <Footer />
        <BottomNavbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
