import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import '../../src/Assets/headerr.css';
import profileImg from '../../src/profile.jpeg'; // Use proper import for images

function Headerr() {
  return (
    <>
      <Navbar expand="lg" bg="black" variant="dark" className="py-3"  style={{color:'white'}}>
        <Container>
          {/* <Navbar.Brand href="#home">YourBrand</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{color:'white'}}>
            <Nav className="ml-auto"  >
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="header">
        <Container>
          <Row className="align-items-center text-center text-md-left">
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center" style={{color:'white'}}>
              <div className="intro-text">
                <h1 className="animated-text">Ayesha Saddiqa</h1>
                <p className="animated-text">
                  I’m Ayesha Saddiqa, a passionate Front-End Developer skilled in React.js, HTML, and CSS. I create responsive, user-friendly websites for e-commerce and guided surgery platforms. My expertise includes usability testing, staying current with web trends, and leveraging new technologies for enhanced user experiences and social media growth.
                </p>
                <a href="/Ayesha_Saddiqa_Resume.pdf" className="resume-button" download="Ayesha_Saddiqa_Resume.pdf">Download Resume</a>
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <img src={profileImg} alt="Profile" className="profile-image" />
            </Col>
          </Row>
          <div className="social-icons text-center mt-4">
            <a href="https://www.linkedin.com/in/ayesha-saddiqa-781178258" className="mx-2"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@QuranicWisdomWave" className="mx-2"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/deanigirl337?igsh=Z2hoOXRuN3RpbXV3" className="mx-2"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/ayeshay1254?mibextid=ZbWKwL" className="mx-2"><i className="fab fa-facebook"></i></a>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Headerr;
