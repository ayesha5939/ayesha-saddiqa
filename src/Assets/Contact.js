import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const result = await emailjs.sendForm('service_jf3sx4s', 'template_qk1cgsk', form, 'oMCtt9yGLcYSDF70n');
      if (result.text === 'OK') {
        setStatus('success');
        form.reset();
      } else {
        console.error('EmailJS result text:', result.text);
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="contact-image">
            <img 
              src={process.env.PUBLIC_URL + '/contact1.jpeg'}
              alt="Contact Us" 
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6} className="contact-form-wrapper">
            <h2 className="mb-4 text-center text-white bg-black p-2 rounded">
              Contact Me
            </h2>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" name="firstName" required />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" name="lastName" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" required />
              </Form.Group>
              <Button type="submit" className="submit-button" variant="primary">
                Send Message
              </Button>
              {status === 'success' && <Alert variant="success" className="mt-3">Message sent successfully!</Alert>}
              {status === 'error' && <Alert variant="danger" className="mt-3">There was an error sending your message. Please try again.</Alert>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
