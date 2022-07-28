import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-dark text-white">
        <div className="container">
          <footer className="pt-5">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-10">
                <h5>Shopping App</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <p className="sp-0 text-white">
                      Shopping App is an E-Commerce website that was created on
                      React, the JavaScript Framework.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-10 mb-3">
                <h5>Quick Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link p-0 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/products" className="nav-link p-0 text-white">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/catrgory" className="nav-link p-0 text-white">
                      Category
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/faq" className="nav-link p-0 text-white">
                      FAQs
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-white">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-10">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
                <ul className="list-unstyled d-flex mt-4">
                  <li className="social-facebook btn btn-sm mx-2">
                    <a className="link" href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="social-whatsapp btn btn-sm mx-2">
                    <a className="link" href="#">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </li>
                  <li className="social-twitter btn btn-sm mx-2">
                    <a className="link" href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li className="social-instagram btn btn-sm mx-2">
                    <a className="link" href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-10">
                <h5>Have a Questions?</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link px-1 py-0 text-white">
                      <i className="fa fa-map-marker"></i> San Francisco,
                      California, USA
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="tel:+2 392 3929 210"
                      className="nav-link px-1 py-0 text-white"
                    >
                      <i className="bi bi-telephone-fill"></i> +2 392 3929 210
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="mailto:info@yourdomain.com"
                      className="nav-link px-1 py-0 text-white"
                    >
                      <i className="bi bi-send-fill"></i> info@yourdomain.com
                    </a>
                  </li>
                </ul>
                <br />
                <br />
                <div className="text-right">
                  <a href="#top" className="btn btn-outline-light">
                    <i className="bi bi-arrow-up"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 pb-1 mt-4 border-top">
              <p className="text-center">
                &copy; {new Date().getFullYear()} -
                <a href="" className="copyright text-white">
                  Shopping App
                </a>
                . All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
