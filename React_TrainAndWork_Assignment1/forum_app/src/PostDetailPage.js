import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEdit, faTrash, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  
  const currentUserId = 1; 

  useEffect(() => {
    
    fetch(`http://localhost:3000/posts/${postId}?_expand=user`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });

    
    fetch(`http://localhost:3000/comments?postId=${postId}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [postId]);

  const handleLike = () => {
    if (!liked) {
      
      fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: post.likes + 1 }),
      })
      .then(response => response.json())
      .then(data => {
        setPost({ ...post, likes: data.likes });
        setLiked(true); 
      })
      .catch(error => console.error('Error:', error));
    }
  };

 const handleDelete = () => {
  
  if (window.confirm("Are you sure you want to delete this post?")) {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if(response.ok) {
        navigate('/'); 
      } else {
        throw new Error('Post could not be deleted');
      }
    })
    .catch(error => console.error('Error:', error));
  }
};

// const handleEditSubmit = (e) => {
//     e.preventDefault();
//     // Post düzenleme işlemi
//     fetch(`http://localhost:3000/posts/${postId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ content: editedContent }),
//     })
//     .then(response => response.json())
//     .then(updatedPost => {
//       setPost(updatedPost);
//       setEditMode(false);
//     })
//     .catch(error => console.error('Error:', error));
//   };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      postId: Number(postId),
      userId: 1,
      content: newComment,
      createdAt: new Date().toISOString(),
    };
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then(response => response.json())
      .then(data => {
        setComments([...comments, data]);
        setNewComment('');
      })
      .catch(error => console.error('Error:', error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4 bg-dark text-white">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {post.userId === currentUserId && (
                    <>
                      <Button variant="info" onClick={() => navigate(`/edit-post/${postId}`)} className="me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button variant="danger" onClick={handleDelete} className="me-2">
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </>
                  )}
                </div>
                <Button variant="light" onClick={handleLike}>
                  <FontAwesomeIcon icon={faHeart} /> {post.likes}
                </Button>
              </div>
            </Card.Body>
          </Card>
  
          <Form onSubmit={handleCommentSubmit} className="mb-4">
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">Post comment</Button>
          </Form>
  
          {comments.map((comment) => (
            <Card key={comment.id} className="mb-3 bg-dark text-white">
              <Card.Body>
                <Card.Text>
                  {comment.content}
                  <br />
                  <small className="text-muted">Commented by user{comment.userId} on {new Date(comment.createdAt).toLocaleDateString()}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PostDetailPage;
