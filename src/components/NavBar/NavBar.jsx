import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function NavBar({ cart }) {
  const [cartCount, setCarCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCarCount(count);
  }, [cart, cartCount, setCarCount]);

  return (
    <>
     <div id="top"></div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ju">
        <NavLink className="navbar-brand" to="/">Shopping App</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item active mx-2 my-0">
              <NavLink
                className="nav-link btn btn-outline-secondary"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item active mx-2 my-0">
              <NavLink
                className="nav-link btn btn-outline-secondary"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item active mx-2 my-0">
              <NavLink
                className="nav-link btn btn-outline-secondary"
                to="/cart"
              >
                <i className="bi bi-cart"></i> Cart
                <span className="badge ml-2 py-1 px-2">{cartCount}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(NavBar);
