import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col md={6}>
          <h1 className="fw-bolder">Contact Us</h1>
          <Form>
            <Form.Group className="mb-3" controlId="login">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
