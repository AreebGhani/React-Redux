import React from "react";
import Carousel from "../components/Carousel/Carousel";
import MoreProducts from "../components/Products/MoreProducts";

export default function HomePage() {
  return (
    <>
      <div id="home">
        <Carousel />
      </div>
      <MoreProducts />
    </>
  );
}
