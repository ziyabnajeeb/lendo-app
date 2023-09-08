import { Button, Col, Container, Row } from 'react-bootstrap';
import { H1, H2, Text } from '../../components/UI/Tag/Tag';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <Container className="lendo__page-not-found pb-5 mb-5">
      <Row className="align-items-center justify-content-center">
        <Col as="section" sm={12} lg={6}>
          <H1 className="fw-bolder mb-0">404</H1>
          <H2 className="fw-bold">
            Oops! This Page Could Not Be Found
          </H2>
          <Text>
            Sorry but the page you are looking for does not exist,
            have been removed. name changed or is temporarily
            unavailable
          </Text>
          <Button as={Link} size="lg" to="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
