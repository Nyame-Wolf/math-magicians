/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

const App = () => (

  <div>
    <div className="heading">
      <h1>Math Magicians</h1>
      <Navigation />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
    </Routes>
    {/* <Outlet /> */}
    <Footer />
  </div>
);

export default App;
