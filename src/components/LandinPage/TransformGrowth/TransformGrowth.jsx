import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Div, H2, Text } from '../../UI/Tag/Tag';
import applyLoanBg from '../../../assets/apply-loan-bg.png';

import './TransformGrowth.css';

const TransformGrowth = () => (
  <Container as="section" fluid className="lendo__transform-growth">
    <Row>
      <Col lg={12} className="px-0">
        <Image
          src={applyLoanBg}
          className="lendo__transform-growth-bg"
        />

        <Div className="lendo__transform-growth-content shadow bg-body">
          <Div className="lendo__transform-growth-content-wrapper">
            <H2 className="fw-bolder">
              Transform
              <br />
              waiting time into <br />
              instant growth!
            </H2>
            <Text className="py-4">
              Designed specifically for the needs of small and medium
              businesses, Lendo offers instant short-term
              finance-against-invoice solutions so your company’s cash
              flow does not suffer every time you accommodate your
              client with extended or flexible payment terms.
            </Text>
            <Button>Apply for a Loan</Button>
          </Div>
        </Div>
      </Col>
    </Row>
  </Container>
);

export default TransformGrowth;
