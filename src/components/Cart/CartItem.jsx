import React, { useState } from "react";
import { connect } from "react-redux";

function CartItem({ item, removeItem, adjustQty, products }) {
  const maxQty = (id) => {
    const item = products.find((item) => item.id === id);
    return item.quantity;
  };
  const [qty, setQty] = useState(item.quantity);
  const Increment = (id) => {
    if (qty < maxQty(id)) {
      setQty(qty + 1);
      adjustQty(id, qty + 1);
    }
  };
  const Decrement = (id) => {
    if (qty < 2) {
      setQty(1);
      adjustQty(id, 1);
    } else {
      setQty(qty - 1);
      adjustQty(id, qty - 1);
    }
  };
  return (
    <>
      <div className="row cart-row border-top border-bottom">
        <div className="row cart-row main align-items-center">
          <div className="cart-col col-2">
            <img
              className="img-fluid cart-img"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className="cart-col col">
            <div className="row cart-row text-muted">{item.name}</div>
            <div className="row cart-row text-muted">${item.price}</div>
          </div>
          <div className="cart-col col">
            <a
              className="cart-a btn"
              onClick={() => {
                Decrement(item.id);
              }}
            >
              –
            </a>
            <a className="cart-a border px-2">{qty}</a>
            <a
              className="cart-a btn"
              onClick={() => {
                Increment(item.id);
              }}
            >
              +
            </a>
          </div>
          <div className="cart-col col">
            $
            {Math.round((item.price * item.quantity + Number.EPSILON) * 100) /
              100}
            <span
              className="close btn"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(CartItem);
