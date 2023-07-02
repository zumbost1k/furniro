import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import HomePage from './pages/home';
import Footer from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>

      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </HashRouter>

  </React.StrictMode>
);


