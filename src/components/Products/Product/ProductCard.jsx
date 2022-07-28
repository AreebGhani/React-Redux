import React from "react";
import "./ProductCard.css";
import Stars from "./Stars";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";

function ProductCard({ product, addToCart, loadCurrentItem }) {
  return (
    <>
      <div className="col-md-3 col-sm-6 my-2">
        <div className="product-grid">
          <div className="product-image">
            <a className="image">
              <img src={product.img} alt={product.name} height={250} />
            </a>
            <span className="product-discount-label">-{product.discount}%</span>

            <ul className="product-links">
              <NavLink
                to = "/productDetail"
                className="add-to-cart"
                onClick={() => {
                  loadCurrentItem(product);
                }}
              >
                more detail
              </NavLink>
            </ul>
          </div>

          <div className="product-content">
            <ul className="rating d-flex justify-content-center">
              <Stars num={product.stars} />
            </ul>

            <h3 className="title">
              <a>{product.name}</a>
            </h3>

            <div className="price">
              <span className="text-danger">${product.pricecut}</span> $
              {product.price}
            </div>

            <a className="add-to-cart" onClick={() => addToCart(product.id)}>
              add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
