import React from "react";
import "./Header.css";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (items) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>IN-SHOP</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            Contact
          </Link>{" "}
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          <img src={cart} alt="white cart icon" />
        </Link>
        <div className="navbar-cart-count">{items.items.length}</div>
      </div>
    </div>
  );
};

export default Header;
