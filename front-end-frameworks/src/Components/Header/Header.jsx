import React from "react";
import "./Header.css";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>IN-SHOP</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/beauty">
            Beauty
          </Link>{" "}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/fashion">
            Fashion
          </Link>{" "}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/electronics">
            Electronics
          </Link>{" "}
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>{" "}
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">
          <img src={cart} alt="white cart icon" />
        </Link>
        <div className="navbar-cart-count">0</div>
      </div>
    </div>
  );
};

export default Header;
