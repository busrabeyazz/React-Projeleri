// Categories.js
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {
  render() {
    const { categories, changeCategory, currentCategory } = this.props;
    return (
      <div>
        <h2>Kategoriler</h2>
        <ListGroup>
          {categories.map(category => (
            <ListGroupItem
              key={category.id}
              active={category === currentCategory}
              onClick={() => changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
