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
          <Route path='/products/:productName' element={<ProductPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<BlogPage />} />
        </Routes>
        <Footer />
      </Provider>

    </HashRouter>
  </React.StrictMode>
);


