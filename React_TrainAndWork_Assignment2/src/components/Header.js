import React from 'react';
import { Link } from "react-router-dom";

function Header({ categories, wishlist, cart, addToCart, removeToWishlist, removeToCart }) {
    return (
        <>
            <div className="header-area header-area--default header-area--default--white header-sticky">
                <div className="header-navigation-area header-navigation-area--white header-navigation-area--extra-space d-none d-lg-block">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-info-wrapper header-info-wrapper--alt-style">
                                    <div className="header-logo">
                                        <a href="index.html">
                                            <img src={process.env.PUBLIC_URL + "/img/logo.png"} className="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                    <div className="header-navigation-wrapper">
                                        <nav>
                                            <ul>
                                                <li className="has">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className="has">
                                                    <Link to="/about">About</Link>
                                                </li>
                                                <li className="has-children">
                                                    <a href="/">Categories</a>
                                                    <ul className="submenu submenu--column-1">
                                                        {categories.map((category) => (
                                                            <li key={category.id}>
                                                                <Link to={"/category/" + category.id}>{category.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="has">
                                                    <Link to="/blog">Blog</Link>
                                                </li>
                                             
                                                <li className="has">
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-icon-area">
                                        <div className="account-dropdown">
                                            <Link to="/ordertracking">Order Tracking</Link>
                                        </div>
                                        <div className="header-icon d-flex align-items-center">
                                            <ul className="header-icon__list">
                                                <li>
                                                    <Link to="/wishlist">
                                                        <i className="fa fa-heart-o"/>
                                                        <span className="item-count">{wishlist.length}</span>
                                                    </Link>
                                                    <div className="minicart-wrapper">
                                                        
                                                        {wishlist.map((item, index) => (
                                                            <div key={index} className="minicart-item">
                                                              
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to="/cart">
                                                        <i className="fa fa-shopping-basket"/>
                                                        <span className="item-count">{cart.length}</span>
                                                    </Link>
                                                    <div className="minicart-wrapper">
                                                       
                                                        {cart.map((item, index) => (
                                                            <div key={index} className="minicart-item">
                                                               
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-mobile-navigation d-block d-lg-none">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-6">
                                <div className="header-logo">
                                    <a href="/">
                                        <img src={process.env.PUBLIC_URL + "/img/logo.png"} className="img-fluid" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="mobile-navigation text-end">
                                    <ul className="header-icon__list">
                                        <li>
                                            <a href="/wishlist"><i className="fa fa-heart-o"/><span className="item-count">{wishlist.length}</span></a>
                                        </li>
                                        <li>
                                            <a href="/cart"><i className="fa fa-shopping-basket"/><span className="item-count">{cart.length}</span></a>
                                        </li>
                                        <li>
                                            <a href="/" className="mobile-menu-icon" id="mobile-menu-trigger"><i className="fa fa-bars"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
