import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 h-100"
              src="https://img.freepik.com/premium-vector/fashion-shopping-online-mobile_257571-18.jpg?w=2000"
              alt="carousel-item"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-100"
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/168082855/original/f916460e640d6aef85cd25fa989ee502044331c7/design-banner-for-christmas-new-year-or-any-ecommerce-website-0c43.jpg"
              alt="carousel-item"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-100"
              src="https://img.freepik.com/free-vector/shopping-online-isometric-infographic-flowchart-poster_1284-15255.jpg?t=st=1658470129~exp=1658470729~hmac=090366d9ab2c5b647f338c941722b07d63e27cfc30b3173ea07d33d560cf4209&w=1300"
              alt="carousel-item"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
