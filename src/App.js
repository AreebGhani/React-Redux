import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@popperjs/core";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./components/Products/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/products" element={<ProductPage />} />
            <Route exact path="/productDetail" element={<ProductDetails />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/faq" element={<FaqPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
