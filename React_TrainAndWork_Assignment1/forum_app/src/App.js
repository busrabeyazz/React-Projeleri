import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from './NavbarComp';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import CreatePost from './CreatePost';
import HomePage from './HomePage';
import PostDetailPage from './PostDetailPage';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error:', error));

    fetch('http://localhost:3000/posts?_expand=user&_embed=comments')
      .then(response => response.json())
      .then(data => setPosts(data)) 
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <NavbarComp
          isLoggedIn={isLoggedIn}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route path="/create-post" element={<CreatePost categories={categories} isLoggedIn={isLoggedIn} onAddPost={handleAddPost} />} />
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
          <Route path="/create-post" element={<CreatePost categories={categories} isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} />} />
        </Routes>
        <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} setIsLoggedIn={setIsLoggedIn} />
        <RegisterModal show={showRegister} handleClose={() => setShowRegister(false)} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
