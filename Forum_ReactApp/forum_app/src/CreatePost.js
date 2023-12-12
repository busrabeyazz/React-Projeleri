import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ categories, isLoggedIn, setShowLogin, onLogout }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (!isLoggedIn) {
      
      setShowLogin(true); 
      
    }
  }, [isLoggedIn, setShowLogin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Lütfen bir post oluşturmak için giriş yapın.');
      return;
    }

    const categoryId = categories.indexOf(selectedCategory) + 1;

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        userId: 1, 
        categoryId,
        createdAt: new Date().toISOString(),
        likes: 0,
        edited: false,
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(newPost => {
      navigate('/'); 
    })
    .catch(error => console.error('Hata oluştu:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Ask a Question</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="postTitle">
              <Form.Label>Title of Post</Form.Label>
              <Form.Control
                type="text"
                placeholder="What's your question?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="postContent">
              <Form.Label>Content of Post</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Give more context to your question..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="postCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onLogout} className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
