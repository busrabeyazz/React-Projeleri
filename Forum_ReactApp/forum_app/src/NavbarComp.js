import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,faHouse, faInfoCircle, faPlusSquare, faBlog,
  faSignInAlt, faUserPlus, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const NavbarComp = ({
  isLoggedIn,
  setShowLogin,
  setShowRegister,
  handleLogout
}) => {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      navigate('/create-post');
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#1a1a2e' }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faComments} /> Connect Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Nav.Link>
            <Nav.Link onClick={handleCreatePostClick}>
              <FontAwesomeIcon icon={faPlusSquare} /> Create Post
            </Nav.Link>

            
            <Nav.Link href="https://www.reddit.com/r/androidapps/comments/8oq18y/is_there_a_good_app_for_browsing_forums_besides/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBlog} /> Other Blogs
            </Nav.Link>

            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Nav.Link>
            ) : (
              <>
                <Button variant="outline-light" className="me-2" onClick={() => setShowLogin(true)}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Button>
                <Button variant="outline-light" onClick={() => setShowRegister(true)}>
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
