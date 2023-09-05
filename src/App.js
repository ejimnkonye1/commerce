import React from 'react';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Navbarsm />
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/home' element={<MyHome/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/shop"    element={<Shop />} />
          <Route path='/learn' element={<Tools />} />
        </Routes>
        
        <Footer />
        <BottomNavbar />
      </BrowserRouter>

    </div>
  );
}

export default App;
