import React, { Component } from 'react'

export default class BestSell extends Component {
  render() {
    return (
      <div>
        <section className="bg-grey-9 section-padding">
  <div className="container pt-25 pb-25">
    <div className="heading-tab d-flex">
      <div
        className="heading-tab-left wow fadeIn animated animated animated"
        style={{ visibility: "visible" }}
      >
        <h3 className="section-title mb-20">
          <span>Monthly</span> Best Sell
        </h3>
      </div>
      <div
        className="heading-tab-right wow fadeIn animated animated animated"
        style={{ visibility: "visible" }}
      >
        <ul
          className="nav nav-tabs right no-border"
          id="myTab-1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="nav-tab-one-1"
              data-bs-toggle="tab"
              data-bs-target="#tab-one-1"
              type="button"
              role="tab"
              aria-controls="tab-one"
              aria-selected="true"
            >
              Featured
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-two-1"
              data-bs-toggle="tab"
              data-bs-target="#tab-two-1"
              type="button"
              role="tab"
              aria-controls="tab-two"
              aria-selected="false"
            >
              Popular
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-three-1"
              data-bs-toggle="tab"
              data-bs-target="#tab-three-1"
              type="button"
              role="tab"
              aria-controls="tab-three"
              aria-selected="false"
            >
              New added
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 d-none d-lg-flex">
        <div
          className="banner-img style-2 wow fadeIn animated animated animated"
          style={{ visibility: "visible" }}
        >
          <img src="assets/imgs/banner/banner-9.jpg" alt="" />
          <div className="banner-text">
            <span>Woman Area</span>
            <h4 className="mt-5">
              Save 17% on <br />
              Clothing
            </h4>
            <a href="shop-grid-right.html" className="text-white">
              Shop Now <i className="fi-rs-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-12">
        <div
          className="tab-content wow fadeIn animated animated animated"
          id="myTabContent-1"
          style={{ visibility: "visible" }}
        >
          <div
            className="tab-pane fade show active"
            id="tab-one-1"
            role="tabpanel"
            aria-labelledby="tab-one-1"
          >
            <div className="carausel-4-columns-cover arrow-center position-relative">
              <div
                className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                id="carausel-4-columns-arrows"
              >
                <span className="slider-btn slider-prev slick-arrow" style={{}}>
                  <i className="fi-rs-angle-left" />
                </span>
                <span className="slider-btn slider-next slick-arrow" style={{}}>
                  <i className="fi-rs-angle-right" />
                </span>
              </div>
              <div
                className="carausel-4-columns carausel-arrow-center slick-initialized slick-slider"
                id="carausel-4-columns"
              >
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 2996,
                      transform: "translate3d(-1498px, 0px, 0px)"
                    }}
                  >
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-2-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Duis{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Luctus suscipit
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Fusce{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Aliquam ac
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Nunc{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Fusce et ligula
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Aliquam
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Morbi lacinia
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-1-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Nulla
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Maecenas eget
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-2-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Duis{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Luctus suscipit
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Fusce{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Aliquam ac
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-current slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Nunc{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Fusce et ligula
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Aliquam
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Morbi lacinia
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned slick-active"
                      data-slick-index={5}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-1-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-1-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Nulla
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Maecenas eget
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned slick-active"
                      data-slick-index={6}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-2-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-2-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Duis{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Luctus suscipit
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-3-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-3-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Fusce{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Aliquam ac
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-4-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-4-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Nunc{" "}
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Fusce et ligula
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 190 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Aliquam
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Morbi lacinia
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End tab-pane*/}
          <div
            className="tab-pane fade"
            id="tab-two-1"
            role="tabpanel"
            aria-labelledby="tab-two-1"
          >
            <div className="carausel-4-columns-cover arrow-center position-relative">
              <div
                className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                id="carausel-4-columns-2-arrows"
              >
                <span className="slider-btn slider-prev slick-arrow" style={{}}>
                  <i className="fi-rs-angle-left" />
                </span>
                <span className="slider-btn slider-next slick-arrow" style={{}}>
                  <i className="fi-rs-angle-right" />
                </span>
              </div>
              <div
                className="carausel-4-columns carausel-arrow-center slick-initialized slick-slider"
                id="carausel-4-columns-2"
              >
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 0,
                      transform: "translate3d(0px, 0px, 0px)"
                    }}
                  >
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Hugy Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Cotton Leaf Printed 2
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-current slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Hugy Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned slick-active"
                      data-slick-index={5}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-6-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-6-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Cotton Leaf Printed 2
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-7-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-7-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-5-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Hugy Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-10-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-10-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-12-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-12-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tab-three-1"
            role="tabpanel"
            aria-labelledby="tab-three-1"
          >
            <div className="carausel-4-columns-cover arrow-center position-relative">
              <div
                className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                id="carausel-4-columns-3-arrows"
              >
                <span className="slider-btn slider-prev slick-arrow" style={{}}>
                  <i className="fi-rs-angle-left" />
                </span>
                <span className="slider-btn slider-next slick-arrow" style={{}}>
                  <i className="fi-rs-angle-right" />
                </span>
              </div>
              <div
                className="carausel-4-columns carausel-arrow-center slick-initialized slick-slider"
                id="carausel-4-columns-3"
              >
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 0,
                      transform: "translate3d(0px, 0px, 0px)"
                    }}
                  >
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-13-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-13-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-14-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-14-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Hugy Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-15-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-15-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-13-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-13-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-14-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-14-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Hugy Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-current slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-15-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-15-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned slick-active"
                      data-slick-index={5}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-8-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-8-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">Hot</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned slick-active"
                      data-slick-index={6}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={0}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-13-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-13-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={0}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="new">New</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={0}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={0}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$138.85 </span>
                          <span className="old-price">$145.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={0}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-14-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-14-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="best">Best Sell</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Hugy Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$152.85 </span>
                          <span className="old-price">$156.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-15-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-15-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="hot">-12%</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Smart Speaker
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product-cart-wrap slick-slide slick-cloned"
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 0 }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <a href="shop-product-right.html" tabIndex={-1}>
                            <img
                              className="default-img"
                              src="assets/imgs/shop/product-11-1.jpg"
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src="assets/imgs/shop/product-11-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Quick view"
                            className="action-btn small hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-eye" />
                          </a>
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn small hover-up"
                            href="shop-wishlist.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-heart" />
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn small hover-up"
                            href="shop-compare.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shuffle" />
                          </a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <a href="shop-grid-right.html" tabIndex={-1}>
                            Watch
                          </a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html" tabIndex={-1}>
                            Cotton Leaf Printed
                          </a>
                        </h2>
                        <div className="rating-result" title="90%">
                          <span>
                            <span>70%</span>
                          </span>
                        </div>
                        <div className="product-price">
                          <span>$238.85 </span>
                          <span className="old-price">$245.8</span>
                        </div>
                        <div className="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            className="action-btn hover-up"
                            href="shop-cart.html"
                            tabIndex={-1}
                          >
                            <i className="fi-rs-shopping-bag-add" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End tab-content*/}
      </div>
      {/*End Col-lg-9*/}
    </div>
  </div>
</section>

      </div>
    )
  }
}
