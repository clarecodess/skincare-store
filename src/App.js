import React, { useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51PMYl2D1xaDQdpGo05XLBGLnT94FZt205vxgxgBRJDu0KDhllAzpUECgmuB3TvRoxZLD45iv7nmQgipSs8qsk1Uz00UAD7C2YB');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    //run once when app component loads
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          console.log("The user is logged in", user)
          dispatch({
            type:'SET_USER',
            user:user
          })
        } else {
          dispatch({
            type:'SET_USER',
            user:null
          })
          
        }
      } )
  },[])

  return (
    <BrowserRouter>
      <div className="app">
      
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<><Header /> <Checkout /></>}></Route>
          <Route path="/" element={<><Header /> <Home /></>}></Route>
          <Route path="/payment" element={<><Header /> <Elements stripe={promise}><Payment /></Elements> </>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
