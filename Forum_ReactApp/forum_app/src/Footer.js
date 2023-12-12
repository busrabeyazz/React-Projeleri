import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-2 bg-navy text-light">
      <Container className="text-center">
        <span>© 2023 ConnectHub. All Rights Reserved.</span>
        <div className="footer-links">
          <a href="/about" className="text-light mx-1">About</a>
          <span>|</span>
          <a href="/privacy-policy" className="text-light mx-1">Privacy Policy</a>
          <span>|</span>
          <a href="/licensing" className="text-light mx-1">Licensing</a>
          <span>|</span>
          <a href="/contact" className="text-light mx-1">Contact</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
