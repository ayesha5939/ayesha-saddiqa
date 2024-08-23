import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Footer.css'; // Ensure custom styles are still applied

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="footer mt-5">
      <Container>
        <Row className="w-100 justify-content-center text-center">
          <Col xs={12} md={6} lg={4}>
            <div className="social-icons mb-3">
              <a href="https://wa.me/923268626952" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/ayeshay1254?mibextid=ZbWKwL" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/deanigirl337?igsh=Z2hoOXRuN3RpbXV3" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/ayesha-saddiqa-781178258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@QuranicWisdomWave" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
            <p className="text-light mb-0">&copy; {new Date().getFullYear()} Ayesha Saddiqa. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
