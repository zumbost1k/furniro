import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import HomePage from './pages/home';
import Footer from './footer/footer';
import Product from './pages/product';
import ScrollToTop from './scroll_to_top';
import ShopPage from './pages/shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/products/:productName' element={<Product />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);


