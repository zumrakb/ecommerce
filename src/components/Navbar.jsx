import React from "react";
import cart from "../icons/cart.svg";
import logo from "../icons/logo.svg";
import menu from "../icons/menu.svg";
import store from "../icons/store.svg";
import logout from "../icons/logout.svg";
import "../componentsCss/Navbar.css";

import { useNavigate } from "react-router-dom"

function Navbar() {
  const Navigate = useNavigate();
function goToHomePage (){
  Navigate("/")
}
function goToStorePage(){
  Navigate("/mybag")
}
  return (
    <div className="navbar">
      <div className="navbarTop">
        <button className="logo" onClick={goToHomePage}>
          <img src={logo} alt="icon"></img>
        </button>

        <button className="menu">
          <img src={menu} alt="icon"></img>
        </button>

        <button className="store">
          <img src={store} alt="icon"></img>
        </button>

        <button className="cart" onClick={goToStorePage}>
          <img src={cart} alt="icon"></img>
        </button>
      </div>

      <div className="navbarBottom">
        <button className="logout">
          <img src={logout} alt="icon"></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
