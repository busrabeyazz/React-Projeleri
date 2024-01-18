import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../../Control/CartSlice'; // Yolu doğru olduğundan emin olun
import { Link } from 'react-router-dom';


export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);

  // Fonksiyon adını handleAddItem olarak değiştirdim
  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };
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
          <div className="tab-content wow fadeIn animated" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab-one"
              role="tabpanel"
              aria-labelledby="tab-one"
            >
              <div className="row product-grid-4">

                {
                  products.filter(p => p.features.featured == true).map(product => (
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src={product.images[0]}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={product.images[1]}
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
                            <button
                              aria-label="Add To Cart"
                              className="action-btn hover-up"
                              href="#"
                              onClick={()=>handleAddItem(product)}
                            >
                              <i className="fi-rs-shopping-bag-add" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-two"
              role="tabpanel"
              aria-labelledby="tab-two"
            >
              <div className="row product-grid-4">
                {
                  products.filter(p => p.features.popular == true).map(product => (
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src={product.images[0]}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={product.images[1]}
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
                  ))
                }


              </div>
              {/*End product-grid-4*/}
            </div>
            {/*En tab two (Popular)*/}
            <div
              className="tab-pane fade"
              id="tab-three"
              role="tabpanel"
              aria-labelledby="tab-three"
            >
              <div className="row product-grid-4">

                {
                  products.filter(p => p.features.new_added == true).map(product => (
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                              <img
                                className="default-img"
                                src={product.images[0]}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={product.images[1]}
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
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

