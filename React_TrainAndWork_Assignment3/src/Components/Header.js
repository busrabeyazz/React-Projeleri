import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "./CartComponent/Checkout";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <div>
      <>
        <header className="header-area header-style-1 header-height-2">
          <div className="header-top header-top-ptb-1 d-none d-lg-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-4">
                  <div className="header-info">
                    <ul>
                      <li>
                        <i className="fi-rs-smartphone" />{" "}
                        <a href="#">(+01) - 2345 - 6789</a>
                      </li>
                      <li>
                        <i className="fi-rs-marker" />
                        <Link to="/contact">Our location</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-4">
                  <div className="text-center">
                    <div id="news-flash" className="d-inline-block"></div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4">
                  <div className="header-info header-info-right">
                    <ul>
                      <li>
                        <a className="language-dropdown-active" href="#">
                          {" "}
                          <i className="fi-rs-world" /> English{" "}
                        </a>
                      </li>
                      <li><i class="fi-rs-user"></i><Link to="/login-register">Log In / Sign Up</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
            <div className="container">
              <div className="header-wrap">
                <div className="logo logo-width-1">
                  <a href="/">
                    <img src="assets/imgs/theme/logo.svg" alt="logo" />
                  </a>
                </div>
                <div className="header-right">
                  <div className="search-style-2">
                    <form action="#">
                      <input type="text" placeholder="Search for items..." />
                    </form>
                  </div>
                  <div className="header-action-right">
                    <div className="header-action-2">
                      <div className="header-action-icon-2">
                        <Link to="/wishlist">
                          <img
                            className="svgInject"
                            alt="Evara"
                            src="assets/imgs/theme/icons/icon-heart.svg"
                          />
                          <span className="pro-count blue">4</span>
                        </Link>
                      </div>
                      <div className="header-action-icon-2">
                        <Link className="mini-cart-icon" to="/cart">
                          <img
                            alt="Cart"
                            src="assets/imgs/theme/icons/icon-cart.svg"
                          />
                          <span className="pro-count blue">
                            {Object.keys(cartItems).length}
                          </span>
                        </Link>
                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                          <ul>
                            {Object.values(cartItems).map((item) => (
                              <li key={item.id}>
                                {/* Sepetteki ürün detayları */}
                                <div className="shopping-cart-img">
                                  <Link to={`/product/${item.id}`}>
                                    <img alt={item.name} src={item.image} />
                                  </Link>
                                </div>
                                <div className="shopping-cart-title">
                                  <h4>
                                    <Link to={`/product/${item.id}`}>
                                      {item.name}
                                    </Link>
                                  </h4>
                                  <h4>
                                    <span>{item.quantity} × </span>${item.price}
                                  </h4>
                                </div>

                                <div className="shopping-cart-delete">
                                  <a href="#">
                                    <i className="fi-rs-cross-small" />
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div className="shopping-cart-footer">
                            <div className="shopping-cart-total">
                              <h4>
                                Total{" "}
                                <span>${calculateTotal().toFixed(2)}</span>
                              </h4>
                            </div>
                            <div className="shopping-cart-button">
                              <Link to="/cart" className="outline">
                                View cart
                              </Link>
                              <Link to="/checkout">Checkout</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
              <div className="header-wrap header-space-between position-relative">
                <div className="logo logo-width-1 d-block d-lg-none">
                  <Link to="/"></Link>
                  <img src="assets/imgs/theme/logo.svg" alt="logo" />
                </div>
                <div className="header-nav d-none d-lg-flex">
                  <div className="main-categori-wrap d-none d-lg-block"></div>
                  <div class="container ml-200">
                    <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block ml-150">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/shop">Shop</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="hotline d-none d-lg-block ml-50">
                  <p>
                    <i className="fi-rs-headset" />
                    <span>Hotline</span> 1900 - 888{" "}
                  </p>
                </div>
                <p className="mobile-promotion">
                  Happy <span className="text-brand">Mother's Day</span>. Big
                  Sale Up to 40%
                </p>
                <div className="header-action-right d-block d-lg-none">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link to="/wishlist">
                        <img
                          alt="Evara"
                          src="assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count white">4</span>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <a className="mini-cart-icon" href="shop-cart.html">
                        <img
                          alt="Evara"
                          src="assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count white">2</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          {Object.values(cartItems).map((item) => (
                            <li key={item.id}>
                              <div className="shopping-cart-img">
                                <Link to={`/product/${item.id}`}>
                                  <img alt={item.name} src={item.image} />
                                </Link>
                              </div>
                              <div className="shopping-cart-title">
                                <h4>
                                  <Link to={`/product/${item.id}`}>
                                    {item.name}
                                  </Link>
                                </h4>
                                <h4>
                                  <span>{item.quantity} × </span>${item.price}
                                </h4>
                              </div>
                              <div className="shopping-cart-delete">
                                <a href="#">
                                  <i className="fi-rs-cross-small" />
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total <span>${calculateTotal().toFixed(2)}</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link to="/cart" className="outline">
                              View cart
                            </Link>
                            <Link to="/checkout">Checkout</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header-action-icon-2 d-block d-lg-none">
                      <div className="burger-icon burger-icon-white">
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mobile-header-active mobile-header-wrapper-style">
          <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-top">
              <div className="mobile-header-logo">
                <Link to="/">
                  <img src="assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                <button className="close-style search-close">
                  <i className="icon-top" />
                  <i className="icon-bottom" />
                </button>
              </div>
            </div>
            <div className="mobile-header-content-area">
              <div className="mobile-search search-style-3 mobile-header-border">
                <form action="#">
                  <input type="text" placeholder="Search for items…" />
                  <button type="submit">
                    <i className="fi-rs-search" />
                  </button>
                </form>
              </div>

              <div className="mobile-social-icon">
                <h5 className="mb-15 text-grey-4">Follow Us</h5>
                <a href="#">
                  <img src="assets/imgs/theme/icons/icon-facebook.svg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/imgs/theme/icons/icon-twitter.svg" alt="" />
                </a>
                <a href="#">
                  <img
                    src="assets/imgs/theme/icons/icon-instagram.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/imgs/theme/icons/icon-pinterest.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img src="assets/imgs/theme/icons/icon-youtube.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Header;
