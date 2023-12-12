import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ title, content, likeCount, commentCount, onEdit, onDelete }) => {
  return (
    <Card style={{ margin: '20px 0' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="outline-primary">
          <FontAwesomeIcon icon={faHeart} /> {likeCount}
        </Button>
        {' '}
        <Button variant="outline-secondary">
          <FontAwesomeIcon icon={faComment} /> {commentCount}
        </Button>
        {' '}
        <Button variant="outline-info" onClick={onEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        {' '}
        <Button variant="outline-danger" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
