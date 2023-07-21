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
import Contact from './pages/contact';
import Blog from './pages/blog';
import { Provider } from 'react-redux';
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
        </Routes>
        <Footer />
      </Provider>

    </HashRouter>
  </React.StrictMode>
);


