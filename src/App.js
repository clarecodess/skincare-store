import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<><Header /> <Checkout /></>}></Route>
          <Route path="/" element={<><Header /> <Home /></>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
