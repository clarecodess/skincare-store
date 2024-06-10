import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Login.js";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

function Header() {
  const [{ cart, user }] = useStateValue();
  

  const handleAuthentication = () => {
    signOut(auth)
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="logo.png" alt="" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <Search className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && '/Login'}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne">Hi {!user ? 'Guest' : user?.email}</span>
            <span className="header-optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/orders'>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Orders</span>
        </div>
        </Link>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasket />
            <span className="header-optionLineTwo header-basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
