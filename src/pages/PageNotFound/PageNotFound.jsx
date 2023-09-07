import { Button, Col, Container, Row } from 'react-bootstrap';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container className="lendo__page-not-found pb-5 mb-5">
      <Row className="align-items-center justify-content-center">
        <Col as="section" sm={12} lg={6}>
          <h1 className="fw-bolder">404</h1>
          <h2 className="fw-bold">
            Oops! This Page Could Not Be Found
          </h2>
          <p>
            Sorry but the page you are looking for does not exist,
            have been removed. name changed or is temporarily
            unavailable
          </p>
          <Button as={Link} size="lg" to="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
