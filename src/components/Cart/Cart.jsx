import React, { useState, useEffect } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import {
  adjustQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";

function Cart({ cart, removeFromCart, adjustQty }) {
  const [countCart, setCountCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryType, setDeliveryType] = useState(5);
  const [totalSum, setTotalSum] = useState(0);
  const deliveryCost = (e) => {
    e = parseInt(e);
    setDeliveryType(e);
    setTotalSum(totalPrice + e);
  };
  useEffect(() => {
    let count = 0;
    let total = 0;
    cart.forEach((item) => {
      count += item.quantity;
      total += item.price * item.quantity;
      setCountCart(count);
      setTotalPrice(total);
      setTotalSum(totalPrice + deliveryType);
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  }, [
    cart,
    countCart,
    setCountCart,
    totalPrice,
    setTotalPrice,
    deliveryCost,
    deliveryType,
    setDeliveryType,
    removeFromCart,
  ]);
  return (
    <>
      <br />
      <br />
      <div className="mx-3 my-5">
        <div className="row cart-row">
          <div className="col-md-6 cart">
            <div className="title">
              <div className="row cart-row">
                <div className="cart-col col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="cart-col col align-self-center text-right text-muted">
                  {countCart} items
                </div>
              </div>
            </div>
            {cart.length == 0 ? (
              <h1 className="text-center">
                <br />
                Your Cart is Empty
                <br />
              </h1>
            ) : (
              cart.map((cart) => (
                <CartItem
                  key={cart.id}
                  item={cart}
                  removeItem={removeFromCart}
                  adjustQty={adjustQty}
                />
              ))
            )}
            <div className="back-to-shop">
              <NavLink to="/products" className="cart-a">
                <i className="bi bi-arrow-left"></i>
                <span className="text-muted ml-1">Back to shop</span>
              </NavLink>
            </div>
          </div>
          <div className="col-md-3 summary">
            <div>
              <h5 className="cart-h5">
                <b>Summary</b>
              </h5>
            </div>
            <hr className="cart-hr" />
            <div className="row cart-row">
              <div className="cart-col col" style={{ paddingLeft: "0" }}>
                TOTAL
              </div>
              <div className="cart-col col text-right">
                ${Math.round((totalPrice + Number.EPSILON) * 100) / 100}
              </div>
            </div>
            <div className="cart-form">
              <p>SHIPPING</p>
              <select
                defaultValue={deliveryType}
                className="cart-select"
                onChange={(e) => {
                  deliveryCost(e.target.value);
                }}
              >
                <option value={5} className="text-muted">
                  Standard-Delivery- $5.00
                </option>
                <option className="text-muted" value={10}>
                  Fast-Delivery- $10.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input
                id="code"
                placeholder="Enter your code"
                className="cart-input"
              />
            </div>
            <div
              className="row cart-row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="cart-col col">TOTAL PRICE</div>
              <div className="cart-col col text-right">
                ${Math.round((totalSum + Number.EPSILON) * 100) / 100}
              </div>
            </div>
            <button type="submit" className="cart-btn">
              CHECKOUT
            </button>
          </div>
          <div className="offset-lg-1"></div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
