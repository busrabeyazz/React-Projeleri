import React from 'react';
import { ListGroup } from 'react-bootstrap';

const categories = ["All", "Technology", "Software", "Hardware", "Networking", "Security"];

const CategoriesSidebar = () => {
  return (
    <ListGroup>
      {categories.map(category => (
        <ListGroup.Item key={category} action href={`#${category.toLowerCase()}`}>
          {category}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CategoriesSidebar;
