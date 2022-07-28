import React from "react";
import ProductCard from "./Product/ProductCard";
import { connect } from "react-redux";

function Products({ products }) {
  return (
    <>
      <div className="row container-fluid justify-content-center mt-5 py-5 bg-light">
        {products.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
