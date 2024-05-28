import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  return ( 
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
