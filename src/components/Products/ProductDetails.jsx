import React from "react";
import Stars from "./Product/Stars";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/Shopping/shopping-actions";

function ProductDetails({ currentItem, addToCart }) {
  const Navigate = useNavigate();
  return (
    <>
      {currentItem === null ? (
        <div className="text-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Please Select Product First</h2>
          <button
            className="btn btn-lg btn-outline-success"
            onClick={() => {
              Navigate(-1);
            }}
          >
            <b>Go Back</b>
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div className="py-5 my-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6 border p-3">
                <div className="mb-3 text-right">
                  <span className="bg-success py-1 px-2 text-white">
                    UpTo {100 - currentItem.discount}% OFF
                  </span>
                </div>
                <img
                  className="mb-5 mb-md-0 img-fluid"
                  src={currentItem.img}
                  alt={currentItem.name}
                />
              </div>
              <div className="col-md-6">
                <h1 className="">{currentItem.name}</h1>
                <div className="mb-5">
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "red",
                      fontSize: "15px",
                    }}
                  >
                    ${currentItem.pricecut}
                  </span>
                  <span className="ml-2" style={{ fontSize: "18px" }}>
                    ${currentItem.price}
                  </span>
                  <span>
                    <div
                      className="d-flex small text-warning"
                      style={{ listStyle: "none" }}
                    >
                      <Stars num={currentItem.stars} />
                    </div>
                  </span>
                </div>
                <p className="lead">{currentItem.description}</p>
                <div>
                  <label className="border px-2 py-1">
                    <b>Stock:</b>{" "}
                    <span className="text-dark">{currentItem.quantity}</span>
                  </label>
                </div>
                <button
                  className="btn btn-outline-dark mt-4"
                  type="button"
                  onClick={() => {
                    addToCart(currentItem.id);
                  }}
                >
                  <i className="bi-cart-fill me-1"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
