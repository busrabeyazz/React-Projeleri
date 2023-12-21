import React from 'react';
import { Link } from "react-router-dom";

function CategoryCard({ product, addToWishlist, addToCart }) {
    const url = '#';

    const renderStatusBadge = (status) => {
        return (
            <>
                {status.new_arrival && <span className="hot">New</span>}
                {status.featured && <span className="hot">Featured</span>}
                {status.on_sale && <span className="hot">On Sale</span>}
            </>
        );
    };

    return (
        <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
            <div className="single-grid-product single-grid-product--overlay">
                <div className="single-grid-product__image">
                    <a href={url} className="favorite-icon" data-tippy="Add to Wishlist"
                       data-tippy-inertia="true" data-tippy-animation="shift-away"
                       onClick={() => addToWishlist(product)}
                       data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"
                       data-tippy-placement="left">
                        <i className="fa fa-heart-o"/>
                        <i className="fa fa-heart"/>
                    </a>
                    <div className="product-badge-wrapper">
                        {renderStatusBadge(product.status)}
                    </div>
                    <Link to={`/product/${product.slug}`} className="image-wrap">
                        <img src={process.env.PUBLIC_URL + "/" + product.image}
                             className="img-fluid" alt=""/>
                        <img src={process.env.PUBLIC_URL + "/" + product.image}
                             className="img-fluid" alt=""/>
                    </Link>
                    <div className="product-hover-icon-wrapper">
                        <span className="single-icon single-icon--add-to-cart">
                            <button data-tippy="Add to cart" data-tippy-inertia="true"
                                    onClick={() => addToCart(product)}
                                    data-tippy-animation="shift-away" data-tippy-delay={50}
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder" className="btn btn--icon btn--icon--left">
                                <i className="fa fa-shopping-basket"/>
                                <span>ADD TO CART</span>
                            </button>
                        </span>
                    </div>
                    <div className="product-info">
                        <p className="title">
                            <Link to={`/product/${product.slug}`}>{product.title}</Link>
                        </p>
                        <p className="price">{product.price}$</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;
