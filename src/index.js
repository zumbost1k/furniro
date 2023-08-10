import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import HomePage from './pages/home';
import Footer from './footer/footer';
import ScrollToTop from './scroll_to_top';
import ShopPage from './pages/shop';
import ContactPage from './pages/contact';
import ProductPage from './pages/product';
import BlogPage from './pages/blog';
import { Provider } from 'react-redux';
import Cart from './pages/cart';
import Comparison from './pages/comparison';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/products/:productName' element={<Product />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<Blog />} />
          <Route path='/product/cart' element={<Cart />} />
          <Route path='/product/comparison' element={<Comparison />} />
        </Routes>
        <Footer />
      </Provider>

    </HashRouter>
  </React.StrictMode>
);


