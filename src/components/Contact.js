import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <h1 className="my-4">Contact Us</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <h2 className="my-4">Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=a732a06e7emshe689db754d4658cp16c00bjsn79e087f3e53f"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </Container>
  );
};

export default Contact;
