import { Button, Col, Container, Row } from 'react-bootstrap';
import { H1, Text } from '../../components/UI/Tag/Tag';
import { Link } from 'react-router-dom';

import './About.css';

const About = () => (
  <Container className="mb-5">
    <Row>
      <Col sm={12}>
        <H1 className="fw-bolder">About</H1>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          deleniti libero pariatur, autem quod maxime reiciendis,
          illum minus sunt nobis ea obcaecati repudiandae repellendus
          facere laudantium velit officia corrupti adipisci?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          deleniti libero pariatur, autem quod maxime reiciendis,
          illum minus sunt nobis ea obcaecati repudiandae repellendus
          facere laudantium velit officia corrupti adipisci?
        </Text>
      </Col>
    </Row>
    <Row>
      <Col as="nav" sm={12}>
        <Button
          as={Link}
          to="faqs"
          variant="primary"
          className="me-3"
        >
          FAQs
        </Button>
        <Button as={Link} to="contact" variant="outline-secondary">
          Contact Us
        </Button>
      </Col>
    </Row>
  </Container>
);

export default About;
