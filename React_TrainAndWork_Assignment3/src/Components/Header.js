import React, { Component } from 'react'

export default class Header extends Component {
  render() {
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
                  <a href="page-contact.html">Our location</a>
                </li>
              </ul>
            </div>
          </div>
          
          
          <div className="col-xl-6 col-lg-4">
            <div className="text-center">
              <div id="news-flash" className="d-inline-block">
              
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4">
            <div className="header-info header-info-right">
              <ul>
                <li>
                  <a className="language-dropdown-active" href="#">
                    {" "}
                    <i className="fi-rs-world" /> English{" "}
                    <i className="fi-rs-angle-small-down" />
                  </a>
                  <ul className="language-dropdown">
                    <li>
                      <a href="#">
                        <img src="assets/imgs/theme/flag-fr.png" alt="" />
                        Français
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/imgs/theme/flag-dt.png" alt="" />
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="assets/imgs/theme/flag-ru.png" alt="" />
                        Pусский
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <i className="fi-rs-user" />
                  <a href="page-login-register.html">Log In / Sign Up</a>
                </li>
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
            <a href="index.html">
              <img src="assets/imgs/theme/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="header-right">
            <div className="search-style-2">
              <form action="#">
                <select className="select-active">
                  <option>All Categories</option>
                  <option>Women's</option>
                  <option>Men's</option>
                  <option>Cellphones</option>
                  <option>Computer</option>
                  <option>Electronics</option>
                  <option> Accessories</option>
                  <option>Home &amp; Garden</option>
                  <option>Luggage</option>
                  <option>Shoes</option>
                  <option>Mother &amp; Kids</option>
                </select>
                <input type="text" placeholder="Search for items..." />
              </form>
            </div>
            <div className="header-action-right">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img
                      className="svgInject"
                      alt="Evara"
                      src="assets/imgs/theme/icons/icon-heart.svg"
                    />
                    <span className="pro-count blue">4</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img
                      alt="Evara"
                      src="assets/imgs/theme/icons/icon-cart.svg"
                    />
                    <span className="pro-count blue">2</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Evara"
                              src="assets/imgs/shop/thumbnail-3.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Daisy Casual Bag
                            </a>
                          </h4>
                          <h4>
                            <span>1 × </span>$800.00
                          </h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Evara"
                              src="assets/imgs/shop/thumbnail-2.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Corduroy Shirts
                            </a>
                          </h4>
                          <h4>
                            <span>1 × </span>$3200.00
                          </h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$4000.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <a href="shop-cart.html" className="outline">
                          View cart
                        </a>
                        <a href="shop-checkout.html">Checkout</a>
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
            <a href="index.html">
              <img src="assets/imgs/theme/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="header-nav d-none d-lg-flex">
            <div className="main-categori-wrap d-none d-lg-block">
              <a className="categori-button-active" href="#">
                <span className="fi-rs-apps" /> Browse Categories
              </a>
              <div className="categori-dropdown-wrap categori-dropdown-active-large">
                <ul>
                  <li className="has-children">
                    <a href="shop-grid-right.html">
                      <i className="evara-font-dress" />
                      Women's Clothing
                    </a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu d-lg-flex">
                        <li className="mega-menu-col col-lg-7">
                          <ul className="d-lg-flex">
                            <li className="mega-menu-col col-lg-6">
                              <ul>
                                <li>
                                  <span className="submenu-title">
                                    Hot &amp; Trending
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Dresses
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Blouses &amp; Shirts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Hoodies &amp; Sweatshirts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Women's Sets
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Suits &amp; Blazers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Bodysuits
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Tanks &amp; Camis
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Coats &amp; Jackets
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-6">
                              <ul>
                                <li>
                                  <span className="submenu-title">Bottoms</span>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Leggings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Skirts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Shorts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Jeans
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Pants &amp; Capris
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Bikini Sets
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Cover-Ups
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Swimwear
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-5">
                          <div className="header-banner2">
                            <img
                              src="assets/imgs/banner/menu-banner-2.jpg"
                              alt="menu_banner1"
                            />
                            <div className="banne_info">
                              <h6>10% Off</h6>
                              <h4>New Arrival</h4>
                              <a href="#">Shop now</a>
                            </div>
                          </div>
                          <div className="header-banner2">
                            <img
                              src="assets/imgs/banner/menu-banner-3.jpg"
                              alt="menu_banner2"
                            />
                            <div className="banne_info">
                              <h6>15% Off</h6>
                              <h4>Hot Deals</h4>
                              <a href="#">Shop now</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-children">
                    <a href="shop-grid-right.html">
                      <i className="evara-font-tshirt" />
                      Men's Clothing
                    </a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu d-lg-flex">
                        <li className="mega-menu-col col-lg-7">
                          <ul className="d-lg-flex">
                            <li className="mega-menu-col col-lg-6">
                              <ul>
                                <li>
                                  <span className="submenu-title">
                                    Jackets &amp; Coats
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Down Jackets
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Jackets
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Parkas
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Faux Leather Coats
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Trench
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Wool &amp; Blends
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Vests &amp; Waistcoats
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Leather Coats
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-6">
                              <ul>
                                <li>
                                  <span className="submenu-title">
                                    Suits &amp; Blazers
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Blazers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Suit Jackets
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Suit Pants
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Suits
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Vests
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Tailor-made Suits
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Cover-Ups
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-5">
                          <div className="header-banner2">
                            <img
                              src="assets/imgs/banner/menu-banner-4.jpg"
                              alt="menu_banner1"
                            />
                            <div className="banne_info">
                              <h6>10% Off</h6>
                              <h4>New Arrival</h4>
                              <a href="#">Shop now</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-children">
                    <a href="shop-grid-right.html">
                      <i className="evara-font-smartphone" /> Cellphones
                    </a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu d-lg-flex">
                        <li className="mega-menu-col col-lg-7">
                          <ul className="d-lg-flex">
                            <li className="mega-menu-col col-lg-6">
                              <ul>
                                <li>
                                  <span className="submenu-title">
                                    Hot &amp; Trending
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Cellphones
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    iPhones
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Refurbished Phones
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Mobile Phone
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Mobile Phone Parts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Phone Bags &amp; Cases
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Communication Equipments
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Walkie Talkie
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-6">
                              <ul>
                                <li>
                                  <span className="submenu-title">
                                    Accessories
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Screen Protectors
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Wire Chargers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Wireless Chargers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Car Chargers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Power Bank
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Armbands
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Dust Plug
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Signal Boosters
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-5">
                          <div className="header-banner2">
                            <img
                              src="assets/imgs/banner/menu-banner-5.jpg"
                              alt="menu_banner1"
                            />
                            <div className="banne_info">
                              <h6>10% Off</h6>
                              <h4>New Arrival</h4>
                              <a href="#">Shop now</a>
                            </div>
                          </div>
                          <div className="header-banner2">
                            <img
                              src="assets/imgs/banner/menu-banner-6.jpg"
                              alt="menu_banner2"
                            />
                            <div className="banne_info">
                              <h6>15% Off</h6>
                              <h4>Hot Deals</h4>
                              <a href="#">Shop now</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-desktop" />
                      Computer &amp; Office
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-cpu" />
                      Consumer Electronics
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-diamond" />
                      Jewelry &amp; Accessories
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-home" />
                      Home &amp; Garden
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-high-heels" />
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-teddy-bear" />
                      Mother &amp; Kids
                    </a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      <i className="evara-font-kite" />
                      Outdoor fun
                    </a>
                  </li>
                  <li>
                    <ul className="more_slide_open" style={{ display: "none" }}>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-desktop" />
                          Beauty, Health
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-cpu" />
                          Bags and Shoes
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-diamond" />
                          Consumer Electronics
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          <i className="evara-font-home" />
                          Automobiles &amp; Motorcycles
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="more_categories">Show more...</div>
              </div>
            </div>
            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <a className="active" href="index.html">
                      Home <i className="fi-rs-angle-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-about.html">About</a>
                  </li>
                  <li>
                    <a href="shop-grid-right.html">
                      Shop <i className="fi-rs-angle-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop-grid-right.html">
                          Shop Grid – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-left.html">
                          Shop Grid – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-right.html">
                          Shop List – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-left.html">
                          Shop List – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth.html">Shop - Wide</a>
                      </li>
                      <li>
                        <a href="#">
                          Single Product <i className="fi-rs-angle-right" />
                        </a>
                        <ul className="level-menu">
                          <li>
                            <a href="shop-product-right.html">
                              Product – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-left.html">
                              Product – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-full.html">
                              Product – No sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop-filter.html">Shop – Filter</a>
                      </li>
                      <li>
                        <a href="shop-wishlist.html">Shop – Wishlist</a>
                      </li>
                      <li>
                        <a href="shop-cart.html">Shop – Cart</a>
                      </li>
                      <li>
                        <a href="shop-checkout.html">Shop – Checkout</a>
                      </li>
                      <li>
                        <a href="shop-compare.html">Shop – Compare</a>
                      </li>
                    </ul>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      Mega menu <i className="fi-rs-angle-down" />
                    </a>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Women's Fashion
                        </a>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">Dresses</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Blouses &amp; Shirts
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Hoodies &amp; Sweatshirts
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Wedding Dresses
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Prom Dresses</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Cosplay Costumes
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Men's Fashion
                        </a>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">Jackets</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Casual Faux Leather
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Genuine Leather
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Casual Pants</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Sweatpants</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Harem Pants</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Technology
                        </a>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">Gaming Laptops</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Ultraslim Laptops
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Tablets</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Laptop Accessories
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Tablet Accessories
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <a href="shop-product-right.html">
                            <img
                              src="assets/imgs/banner/menu-banner.jpg"
                              alt="Evara"
                            />
                          </a>
                          <div className="menu-banner-content">
                            <h4>Hot deals</h4>
                            <h3>
                              Don't miss
                              <br /> Trending
                            </h3>
                            <div className="menu-banner-price">
                              <span className="new-price text-success">
                                Save to 50%
                              </span>
                            </div>
                            <div className="menu-banner-btn">
                              <a href="shop-product-right.html">Shop now</a>
                            </div>
                          </div>
                          <div className="menu-banner-discount">
                            <h3>
                              <span>35%</span>
                              off
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-category-grid.html">
                      Blog <i className="fi-rs-angle-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-category-grid.html">Blog Category Grid</a>
                      </li>
                      <li>
                        <a href="blog-category-list.html">Blog Category List</a>
                      </li>
                      <li>
                        <a href="blog-category-big.html">Blog Category Big</a>
                      </li>
                      <li>
                        <a href="blog-category-fullwidth.html">
                          Blog Category Wide
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Single Post <i className="fi-rs-angle-right" />
                        </a>
                        <ul className="level-menu level-menu-modify">
                          <li>
                            <a href="blog-post-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-post-right.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-post-fullwidth.html">No Sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Pages <i className="fi-rs-angle-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="page-about.html">About Us</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="page-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="page-login-register.html">login/register</a>
                      </li>
                      <li>
                        <a href="page-purchase-guide.html">Purchase Guide</a>
                      </li>
                      <li>
                        <a href="page-privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="page-terms.html">Terms of Service</a>
                      </li>
                      <li>
                        <a href="page-404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="hotline d-none d-lg-block">
            <p>
              <i className="fi-rs-headset" />
              <span>Hotline</span> 1900 - 888{" "}
            </p>
          </div>
          <p className="mobile-promotion">
            Happy <span className="text-brand">Mother's Day</span>. Big Sale Up
            to 40%
          </p>
          <div className="header-action-right d-block d-lg-none">
            <div className="header-action-2">
              <div className="header-action-icon-2">
                <a href="shop-wishlist.html">
                  <img
                    alt="Evara"
                    src="assets/imgs/theme/icons/icon-heart.svg"
                  />
                  <span className="pro-count white">4</span>
                </a>
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
                    <li>
                      <div className="shopping-cart-img">
                        <a href="shop-product-right.html">
                          <img
                            alt="Evara"
                            src="assets/imgs/shop/thumbnail-3.jpg"
                          />
                        </a>
                      </div>
                      <div className="shopping-cart-title">
                        <h4>
                          <a href="shop-product-right.html">
                            Plain Striola Shirts
                          </a>
                        </h4>
                        <h3>
                          <span>1 × </span>$800.00
                        </h3>
                      </div>
                      <div className="shopping-cart-delete">
                        <a href="#">
                          <i className="fi-rs-cross-small" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="shopping-cart-img">
                        <a href="shop-product-right.html">
                          <img
                            alt="Evara"
                            src="assets/imgs/shop/thumbnail-4.jpg"
                          />
                        </a>
                      </div>
                      <div className="shopping-cart-title">
                        <h4>
                          <a href="shop-product-right.html">Macbook Pro 2022</a>
                        </h4>
                        <h3>
                          <span>1 × </span>$3500.00
                        </h3>
                      </div>
                      <div className="shopping-cart-delete">
                        <a href="#">
                          <i className="fi-rs-cross-small" />
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="shopping-cart-footer">
                    <div className="shopping-cart-total">
                      <h4>
                        Total <span>$383.00</span>
                      </h4>
                    </div>
                    <div className="shopping-cart-button">
                      <a href="shop-cart.html">View cart</a>
                      <a href="shop-checkout.html">Checkout</a>
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
          <a href="index.html">
            <img src="assets/imgs/theme/logo.svg" alt="logo" />
          </a>
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
        <div className="mobile-menu-wrap mobile-header-border">
          <div className="main-categori-wrap mobile-header-border">
            <a className="categori-button-active-2" href="#">
              <span className="fi-rs-apps" /> Browse Categories
            </a>
            <div className="categori-dropdown-wrap categori-dropdown-active-small">
              <ul>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-dress" />
                    Women's Clothing
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-tshirt" />
                    Men's Clothing
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="shop-grid-right.html">
                    <i className="evara-font-smartphone" /> Cellphones
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-desktop" />
                    Computer &amp; Office
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-cpu" />
                    Consumer Electronics
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-home" />
                    Home &amp; Garden
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-high-heels" />
                    Shoes
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-teddy-bear" />
                    Mother &amp; Kids
                  </a>
                </li>
                <li>
                  <a href="shop-grid-right.html">
                    <i className="evara-font-kite" />
                    Outdoor fun
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* mobile menu start */}
          <nav>
            <ul className="mobile-menu">
              <li className="menu-item-has-children">
                <span className="menu-expand" />
                <a href="index.html">Home</a>
                <ul className="dropdown">
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 4</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <span className="menu-expand" />
                <a href="shop-grid-right.html">shop</a>
                <ul className="dropdown">
                  <li>
                    <a href="shop-grid-right.html">Shop Grid – Right Sidebar</a>
                  </li>
                  <li>
                    <a href="shop-grid-left.html">Shop Grid – Left Sidebar</a>
                  </li>
                  <li>
                    <a href="shop-list-right.html">Shop List – Right Sidebar</a>
                  </li>
                  <li>
                    <a href="shop-list-left.html">Shop List – Left Sidebar</a>
                  </li>
                  <li>
                    <a href="shop-fullwidth.html">Shop - Wide</a>
                  </li>
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <a href="#">Single Product</a>
                    <ul className="dropdown">
                      <li>
                        <a href="shop-product-right.html">
                          Product – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-product-left.html">
                          Product – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-product-full.html">
                          Product – No sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-filter.html">Shop – Filter</a>
                  </li>
                  <li>
                    <a href="shop-wishlist.html">Shop – Wishlist</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">Shop – Cart</a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">Shop – Checkout</a>
                  </li>
                  <li>
                    <a href="shop-compare.html">Shop – Compare</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <span className="menu-expand" />
                <a href="#">Mega menu</a>
                <ul className="dropdown">
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <a href="#">Women's Fashion</a>
                    <ul className="dropdown">
                      <li>
                        <a href="shop-product-right.html">Dresses</a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">
                          Blouses &amp; Shirts
                        </a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">
                          Hoodies &amp; Sweatshirts
                        </a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">Women's Sets</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <a href="#">Men's Fashion</a>
                    <ul className="dropdown">
                      <li>
                        <a href="shop-product-right.html">Jackets</a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">
                          Casual Faux Leather
                        </a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">Genuine Leather</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <a href="#">Technology</a>
                    <ul className="dropdown">
                      <li>
                        <a href="shop-product-right.html">Gaming Laptops</a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">Ultraslim Laptops</a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">Tablets</a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">Laptop Accessories</a>
                      </li>
                      <li>
                        <a href="shop-product-right.html">Tablet Accessories</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <span className="menu-expand" />
                <a href="blog-category-fullwidth.html">Blog</a>
                <ul className="dropdown">
                  <li>
                    <a href="blog-category-grid.html">Blog Category Grid</a>
                  </li>
                  <li>
                    <a href="blog-category-list.html">Blog Category List</a>
                  </li>
                  <li>
                    <a href="blog-category-big.html">Blog Category Big</a>
                  </li>
                  <li>
                    <a href="blog-category-fullwidth.html">
                      Blog Category Wide
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <span className="menu-expand" />
                    <a href="#">Single Product Layout</a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog-post-left.html">Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-post-right.html">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-post-fullwidth.html">No Sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <span className="menu-expand" />
                <a href="#">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="page-login-register.html">login/register</a>
                  </li>
                  <li>
                    <a href="page-purchase-guide.html">Purchase Guide</a>
                  </li>
                  <li>
                    <a href="page-privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms of Service</a>
                  </li>
                  <li>
                    <a href="page-404.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <span className="menu-expand" />
                <a href="#">Language</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">German</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* mobile menu end */}
        </div>
        <div className="mobile-header-info-wrap mobile-header-border">
          <div className="single-mobile-header-info mt-30">
            <a href="page-contact.html"> Our location </a>
          </div>
          <div className="single-mobile-header-info">
            <a href="page-login-register.html">Log In / Sign Up </a>
          </div>
          <div className="single-mobile-header-info">
            <a href="#">(+01) - 2345 - 6789 </a>
          </div>
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
            <img src="assets/imgs/theme/icons/icon-instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="assets/imgs/theme/icons/icon-pinterest.svg" alt="" />
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
    )
  }
}
