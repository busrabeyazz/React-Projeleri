import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import alertify from "alertifyjs";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Blog from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";

export default class App extends Component {
    state = {
        blogs: [],
        products: [],
        categories: [],
        originalProducts: [],
        cart: [],
        wishlist: [],
        orders: []
    };

    componentDidMount() {
        this.fetchInitialData();
    }

    fetchInitialData = () => {
        this.getBlogs();
        this.getProducts();
        this.getCategories();
        this.getOrders();
    };

    getBlogs = async () => {
        const response = await fetch('http://localhost:3000/blogs');
        const blogs = await response.json();
        this.setState({ blogs });
    };

    getProducts = async (categoryId = '') => {
        const url = categoryId 
            ? `http://localhost:3000/products?categoryid=${categoryId}` 
            : "http://localhost:3000/products";
        const response = await fetch(url);
        const products = await response.json();
        this.setState({ products, originalProducts: products });
    };

    getCategories = async () => {
        const response = await fetch('http://localhost:3000/categories');
        const categories = await response.json();
        this.setState({ categories });
    };

    getOrders = async () => {
        const response = await fetch('http://localhost:3000/orders');
        const orders = await response.json();
        this.setState({ orders });
    };

    filterProducts = (status) => {
        const products = status === "all" 
            ? this.state.originalProducts 
            : this.state.originalProducts.filter((item) => item.status[status]);
        this.setState({ products });
    };

addToCart = (product) => {
    let newCart = [...this.state.cart];
    let itemInCart = newCart.find(item => item.product.id === product.id);
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        newCart.push({ product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.title + " added to cart!");
};

removeToCart = (product) => {
    let newCart = this.state.cart.filter(item => item.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.title + " removed from cart!");
};

clearCart = () => {
    this.setState({ cart: [] });
    alertify.success("Cart cleared!");
};

addToWishlist = (product) => {
    let newWishlist = this.state.wishlist;
    var addedItem = newWishlist.find((c) => c.product.id === product.id);
    if (!addedItem) {
        newWishlist.push({product: product});
    }
    this.setState({wishlist: newWishlist});
    alertify.success(product.title + " added to wishlist!");
};

removeToWishlist = (product) => {
    let newWishlist = this.state.wishlist.filter((c) => c.product.id !== product.id);
    this.setState({wishlist: newWishlist});
    alertify.error(product.title + " removed from wishlist!");
};

render() {
    return (
        <>
            <Header cart={this.state.cart} removeToCart={this.removeToCart} wishlist={this.state.wishlist}
                        removeToWishlist={this.removeToWishlist} categories={this.state.categories}/>
            <Routes>
                <Route path="/" element={<Main blogs={this.state.blogs} filterProducts={this.filterProducts} products={this.state.products} addToCart={this.addToCart} addToWishlist={this.addToWishlist}/>}/>
                <Route path="/product/:slug" element={<ProductDetails products={this.state.products} addToCart={this.addToCart} getProductBySlug={this.getProductBySlug} addToWishlist={this.addToWishlist}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog/:slug" element={<BlogDetails getBlogBySlugs={this.getBlogBySlugs}/>}/>
                <Route path="/blog" element={<Blog blogs={this.state.blogs} searchBlogs={this.searchBlogs}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/wishlist" element={<Wishlist wishlist={this.state.wishlist}
                                                               removeToWishlist={this.removeToWishlist}
                                                               addToCart={this.addToCart}/>}/>
                <Route path="/cart" element={<Cart cart={this.state.cart} removeToCart={this.removeToCart}/>}/>
                <Route path="/checkout" element={<Checkout cart={this.state.cart} clearCart={this.clearCart}/>}/>
                <Route path="/ordertracking" element={<OrderTracking orders={this.state.orders} products={this.state.products}/>}/>
                <Route path="/category/:categoryId" element={<Categories categories={this.state.categories} getProducts={this.getProducts} products={this.state.products} addToCart={this.addToCart} addToWishlist={this.addToWishlist}/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
}

