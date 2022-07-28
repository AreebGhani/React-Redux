import React from "react";
import MoreProductCard from "./Product/MoreProductCard";
import { connect } from "react-redux";

function MoreProducts({ products }) {
  return (
    <>
      <div className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((products) => (
              <MoreProductCard key={products.id} product={products} />
            ))}
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

export default connect(mapStateToProps)(MoreProducts);
