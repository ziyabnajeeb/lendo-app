import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => (
  <Container className="mb-5">
    <Row>
      <Col sm={12}>
        <h1 className="fw-bolder">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          deleniti libero pariatur, autem quod maxime reiciendis,
          illum minus sunt nobis ea obcaecati repudiandae repellendus
          facere laudantium velit officia corrupti adipisci?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          deleniti libero pariatur, autem quod maxime reiciendis,
          illum minus sunt nobis ea obcaecati repudiandae repellendus
          facere laudantium velit officia corrupti adipisci?
        </p>
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Button
          as={Link}
          to="faqs"
          variant="primary"
          className="me-3"
        >
          Faqs
        </Button>
        <Button as={Link} to="contact" variant="outline-secondary">
          Contact Us
        </Button>
      </Col>
    </Row>
  </Container>
);

export default About;
