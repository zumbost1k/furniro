import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import HomePage from './pages/home';
import Footer from './footer/footer';
import ScrollToTop from './scroll_to_top';
import ShopPage from './pages/shop';
import ContactPage from './pages/contact';
import ProductPage from './pages/product';
import BlogPage from './pages/blog';
import { Provider } from 'react-redux';
import ComparisonPage from './pages/comparison';
import { store } from './store/store';
import CartPage from './pages/cart';
import Checkout from './pages/checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/products/:productId' element={<ProductPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<BlogPage />} />
          <Route path='/product/cart' element={<CartPage />} />
          <Route path='/product/comparison' element={<ComparisonPage />} />
          <Route path='/product/checkout' element={<Checkout />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


