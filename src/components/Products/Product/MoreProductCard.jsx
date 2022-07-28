import React from "react";
import Stars from "./Stars";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/shopping-actions";
import { NavLink } from "react-router-dom";

function MoreProductCard({ product, addToCart, loadCurrentItem }) {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <NavLink to="productDetail" onClick={()=>{loadCurrentItem(product)}}>
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              -{product.discount}%
            </div>
            <img
              height={200}
              className="card-img-top"
              src={product.img}
              alt={product.name}
            />
          </NavLink>
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{product.name}</h5>
              <div
                className="d-flex justify-content-center small text-warning mb-2"
                style={{ listStyle: "none" }}
              >
                <Stars num={product.stars} />
              </div>
              <span className="text-muted">
                <span
                  className="text-danger mr-2"
                  style={{ fontSize: "14px", textDecoration: "line-through" }}
                >
                  ${product.pricecut}
                </span>
              </span>
              ${product.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className="btn btn-outline-dark mt-auto"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </a>
            </div>
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

export default connect(null, mapDispatchToProps)(MoreProductCard);
