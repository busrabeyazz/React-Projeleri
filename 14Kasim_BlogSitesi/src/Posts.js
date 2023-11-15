import React, { Component, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import PostModal from './PostModal'; // Modal bileşenini import edin

export default class Posts extends Component {
  state = {
    modalOpen: false,
    selectedPost: null, // Seçilen postun bilgisi
  };

  toggleModal = (post = null) => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      selectedPost: post
    }));
  };

  render() {
    const { posts } = this.props;
    const { modalOpen, selectedPost } = this.state;

    return (
      <div>
        {posts.map(post => (
          <Card key={post.id} style={{ marginBottom: '20px' }}>
            <CardBody>
              <CardTitle tag="h5">{post.title}</CardTitle>
              <CardText>{post.content}</CardText>
              <Button color="primary" onClick={() => this.toggleModal(post)}>Detayları Gör</Button>
            </CardBody>
          </Card>
        ))}
        {selectedPost && (
          <PostModal
            isOpen={modalOpen}
            toggle={() => this.toggleModal()}
            post={selectedPost}
          />
        )}
      </div>
    );
  }
}
