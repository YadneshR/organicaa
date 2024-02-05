// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Cart from './components/cart';
import Cat from './components/cat';
import Checkout from './components/checkout';

const App = () => {
  return (<Catalogue />
    // <Router>
    //   <Routes>
    //     <Route exact path="/cart" element={<Cart />} />
    //     <Route exact path="/cat" element={<Cat />} />
    //     <Route exact path="/checkout" element={<Checkout />} />
    //     <Route exact path="/" element={<Catalogue />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
