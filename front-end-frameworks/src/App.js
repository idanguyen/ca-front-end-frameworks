import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beauty" element={<ShopCategory tags="beauty" />} />
          <Route path="/fashion" element={<ShopCategory tags="fashion" />} />
          <Route
            path="/electronics"
            element={<ShopCategory tags="electronics" />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
