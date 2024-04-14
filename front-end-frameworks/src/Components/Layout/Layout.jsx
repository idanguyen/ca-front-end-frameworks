import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Contact from "../../Pages/Contact";
import Product from "../../Pages/Product";
import Checkout from "../../Pages/Checkout";
import Cart from "../../Pages/Cart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ _ }) => {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((cart) => [...cart, product]);
  };

  const checkout = () => {
    setItems([]);
  };

  return (
    <BrowserRouter>
      <Container>
        <Header items={items} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product/:productId"
            element={<Product addItem={addItem} />}
          />
          <Route path="/checkout" element={<Checkout checkout={checkout} />} />
          <Route path="/cart" element={<Cart products={items} />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
