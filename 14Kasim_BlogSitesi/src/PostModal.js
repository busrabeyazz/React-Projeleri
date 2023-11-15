import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const PostModal = ({ isOpen, toggle, post }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{post.title}</ModalHeader>
      <ModalBody>
        {post.content}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Kapat</Button>
      </ModalFooter>
    </Modal>
  );
};

export default PostModal;
