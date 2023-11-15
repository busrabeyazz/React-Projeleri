// App.js
import React, { Component } from "react";
import Categories from "./Categories";
import Posts from "./Posts";
import Header from "./Header";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: null,
    categories: [],
    posts: [],
  };

  componentDidMount() {
    this.getCategories();
    this.getPosts();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {this.setState({ categories: data })
    })
      .catch(error => console.error("Error fetching categories:", error));
      
  };

  getPosts = (categoryId) => {
    let url = "http://localhost:3000/posts";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {this.setState({ posts: data });
    console.log(data);})
      .catch(error => console.error("Error fetching posts:", error));
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category });
    this.getPosts(category.id);
  };

  render() {
    const { categories, currentCategory, posts } = this.state;
    return (
      <Container>
        <Header />
        <Row>
          <Col xs="3">
            <Categories
              categories={categories}
              changeCategory={this.changeCategory}
              currentCategory={currentCategory}
            />
          </Col>
          <Col xs="9">
            <Posts
              posts={posts}
              currentCategory={currentCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
