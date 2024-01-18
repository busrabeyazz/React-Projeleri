import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import ShopPage from './pages/ShopPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LoginRegister from './components/AccountComponent/LoginRegister';
import Checkout from './components/CartComponent/Checkout';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from './Control/ProductSlice';
import {setBlogs} from './Control/BlogSlice';
import { loadCart, saveCart } from './Control/CartSlice';



function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch(loadCart(JSON.parse(savedCart)));
    }

    fetchProducts();
    fetchBlogs();
  }, []);

  useEffect(() => {
    dispatch(saveCart());
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchProducts = () => {
    const url = "http://localhost:3000/products";
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(setProducts(data)))
      .catch(error => console.error("Hata meydana geldi:", error));
  }

  const fetchBlogs = () => {
    const url = "http://localhost:3000/blogs";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Blogs:', data); 
            dispatch(setBlogs(data));
        })
        .catch(error => console.error("Error fetching blogs:", error));
}

  return (
  
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>

  );
}

export default App;
