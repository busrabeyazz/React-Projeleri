import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <section className="product-tabs section-padding position-relative wow fadeIn animated">
  <div className="bg-square" />
  <div className="container">
    <div className="tab-header">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="nav-tab-one"
            data-bs-toggle="tab"
            data-bs-target="#tab-one"
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
            id="nav-tab-two"
            data-bs-toggle="tab"
            data-bs-target="#tab-two"
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
            id="nav-tab-three"
            data-bs-toggle="tab"
            data-bs-target="#tab-three"
            type="button"
            role="tab"
            aria-controls="tab-three"
            aria-selected="false"
          >
            New added
          </button>
        </li>
      </ul>
      <a href="#" className="view-more d-none d-md-flex">
        View More
        <i className="fi-rs-angle-double-small-right" />
      </a>
    </div>
    {/*End nav-tabs*/}
    <div className="tab-content wow fadeIn animated" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="tab-one"
        role="tabpanel"
        aria-labelledby="tab-one"
      >
        <div className="row product-grid-4">
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
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
                  <a href="shop-grid-right.html">Clothing</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">Colorful Pattern Shirts</a>
                </h2>
                <div className="rating-result" title="90%">
                  <span>
                    <span>90%</span>
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
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
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
                  <a href="shop-grid-right.html">Clothing</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">
                    Plain Color Pocket Shirts
                  </a>
                </h2>
                <div className="rating-result" title="90%">
                  <span>
                    <span>50%</span>
                  </span>
                </div>
                <div className="product-price">
                  <span>$138.85 </span>
                  <span className="old-price">$255.8</span>
                </div>
                <div className="product-action-1 show">
                  <a
                    aria-label="Add To Cart"
                    className="action-btn hover-up"
                    href="shop-cart.html"
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
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
                  <a href="shop-grid-right.html">Shirts</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">
                    Vintage Floral Oil Shirts
                  </a>
                </h2>
                <div className="rating-result" title="90%">
                  <span>
                    <span>95%</span>
                  </span>
                </div>
                <div className="product-price">
                  <span>$338.85 </span>
                  <span className="old-price">$445.8</span>
                </div>
                <div className="product-action-1 show">
                  <a
                    aria-label="Add To Cart"
                    className="action-btn hover-up"
                    href="shop-cart.html"
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
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
                  <a href="shop-grid-right.html">Clothing</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">Colorful Hawaiian Shirts</a>
                </h2>
                <div className="rating-result" title="90%">
                  <span>
                    <span>70%</span>
                  </span>
                </div>
                <div className="product-price">
                  <span>$123.85 </span>
                  <span className="old-price">$235.8</span>
                </div>
                <div className="product-action-1 show">
                  <a
                    aria-label="Add To Cart"
                    className="action-btn hover-up"
                    href="shop-cart.html"
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-xs-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
                    <img
                      className="default-img"
                      src="assets/imgs/shop/product-5-1.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="assets/imgs/shop/product-5-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-action-1">
                  <a
                    aria-label="Quick view"
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
                  >
                    <i className="fi-rs-shuffle" />
                  </a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">-30%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Shirt</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">
                    Flowers Sleeve Lapel Shirt
                  </a>
                </h2>
                <div className="rating-result" title="90%">
                  <span>
                    <span>70%</span>
                  </span>
                </div>
                <div className="product-price">
                  <span>$28.85 </span>
                  <span className="old-price">$45.8</span>
                </div>
                <div className="product-action-1 show">
                  <a
                    aria-label="Add To Cart"
                    className="action-btn hover-up"
                    href="shop-cart.html"
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-xs-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
                  >
                    <i className="fi-rs-shuffle" />
                  </a>
                </div>
                <div className="product-badges product-badges-position product-badges-mrg">
                  <span className="hot">-22%</span>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Shirts</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">
                    Ethnic Floral Casual Shirts
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
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-xs-30">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
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
                  <a href="shop-grid-right.html">Shoes</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">Stitching Hole Sandals</a>
                </h2>
                <div className="rating-result" title="90%">
                  <span>
                    <span>98%</span>
                  </span>
                </div>
                <div className="product-price">
                  <span>$1275.85 </span>
                </div>
                <div className="product-action-1 show">
                  <a
                    aria-label="Add To Cart"
                    className="action-btn hover-up"
                    href="shop-cart.html"
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap">
              <div className="product-img-action-wrap">
                <div className="product-img product-img-zoom">
                  <a href="shop-product-right.html">
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
                    className="action-btn hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="fi-rs-eye" />
                  </a>
                  <a
                    aria-label="Add To Wishlist"
                    className="action-btn hover-up"
                    href="shop-wishlist.html"
                  >
                    <i className="fi-rs-heart" />
                  </a>
                  <a
                    aria-label="Compare"
                    className="action-btn hover-up"
                    href="shop-compare.html"
                  >
                    <i className="fi-rs-shuffle" />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop-grid-right.html">Shirt</a>
                </div>
                <h2>
                  <a href="shop-product-right.html">Mens Porcelain Shirt</a>
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
                  >
                    <i className="fi-rs-shopping-bag-add" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End product-grid-4*/}
      </div>
      {/*En tab one (Featured)*/}
      <div
        className="tab-pane fade"
        id="tab-two"
        role="tabpanel"
        aria-labelledby="tab-two"
      >
       
        {/*End product-grid-4*/}
      </div>
      {/*En tab two (Popular)*/}
      <div
        className="tab-pane fade"
        id="tab-three"
        role="tabpanel"
        aria-labelledby="tab-three"
      >
     
        {/*End product-grid-4*/}
      </div>
      {/*En tab three (New added)*/}
    </div>
    {/*End tab-content*/}
  </div>
</section>

      </div>
    )
  }
}
