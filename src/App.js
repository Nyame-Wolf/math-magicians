/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App = () => (
  <>
    <div className="heading">
      <h1>Math Magicians</h1>
      <Navigation />
    </div>

    <Outlet />
    <Footer />
  </>
);

export default App;
