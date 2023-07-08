import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import HomePage from './pages/home';
import Footer from './footer/footer';
import Product from './pages/product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:productName' element={<Product />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);


