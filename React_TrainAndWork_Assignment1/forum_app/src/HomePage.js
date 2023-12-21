import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await fetch('http://localhost:3000/posts?_expand=user&_embed=comments');
        const postsData = await postsResponse.json();
        setPosts(postsData);
        setFilteredPosts(postsData);

        const categoriesResponse = await fetch('http://localhost:3000/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(['All', ...categoriesData]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filterPostsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.categoryId === categories.indexOf(category));
      setFilteredPosts(filtered);
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={3}>
        <h5 className="text-center mb-3">Categories</h5>
          <Card className="p-2 text-white" style={{ backgroundColor: '#202038' }}>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {categories.map((category, index) => (
                <li 
                  key={index} 
                  onClick={() => filterPostsByCategory(category)} 
                  className={`category-item text-center hoverable ${category === selectedCategory ? 'selected' : ''}`}
                  style={{ cursor: 'pointer', padding: '5px 10px', marginBottom: '5px', borderRadius: '5px' }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </Card>
        </Col>
        <Col md={9}>
          {filteredPosts.map(post => (
            <Card
              key={post.id}
              onClick={() => navigate(`/posts/${post.id}`)}
              className="mb-4 shadow bg-dark text-white"
              style={{ width: '100%', cursor: 'pointer' }}
            >
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.content}
                </Card.Text>
                <Card.Text>
                  <small>Posted by {post.user.username} on {formatDate(post.createdAt)}</small>
                </Card.Text>
                <Card.Text>
                  <FontAwesomeIcon icon={faHeart} /> {post.likes} 
                  <FontAwesomeIcon icon={faComments} className="ms-2" /> {post.comments.length}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
