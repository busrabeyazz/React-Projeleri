import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
  
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>

  );
}

export default App;
