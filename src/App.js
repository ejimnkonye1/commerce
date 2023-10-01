import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Head from './pages/Head';
import Navbar from './components/Navbar';


import Account from './pages/Account';
import Footer from './components/Footer';
import BottomNavbar from './components/bottomnav';

import Shop from './pages/Shop';
import MyHome from './pages/Homepg';
import Tools from './Tools';
import Navbarsm from './components/nav1';
import Layout from './pages/layout';
import ProductDetails from './pages/Productdetails';
import Cart from './pages/cart';
import test from './pages/test';
import Testing from './pages/test';
import Search from './pages/Search';
import SearchResults from './pages/Searchresult';
import SearchPage from './pages/Searchpg';
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
      <Head searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Navbarsm />
        <Testing />
        <Navbar />
     
        <Routes>
          
          <Route path='/' element={<Layout />} />
       
        <Route path="/search/:query" element={<SearchPage />} />
          <Route path='/home' element={<MyHome/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/shop"    element={<Shop />} />
          <Route path='/learn' element={<Tools />} />
          <Route path="/product/:id" element={<ProductDetails />} />
      
        </Routes>
        
        <Footer />
        <BottomNavbar />
      </BrowserRouter>

    </div>
  );
}

export default App;
