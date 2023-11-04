import { Col, Container, Row } from 'react-bootstrap';

import { Div, H2, H3, Text } from '../../UI/Tag/Tag';

import './HowLendoWorks.css';

const HowLendoWorks = () => (
  <Container as="section" className="lendo__works">
    <Row>
      <Col lg={11} className="mx-auto">
        <Div className="lendo__works-bg">
          <Div className="d-flex justify-content-center">
            <Div className="lendo__works-content text-center">
              <Text className="fw-lighter mb-0">Smartly. Conveniently. Efficiently</Text>
              <H2 className="fw-bolder">How Lendo Works?</H2>
              <Div className="lendo__works-content-investor">
                <H3 className="fw-bolder mt-0">Investor</H3>
                <Text className="text-dark-blue fw-bold my-2">
                  Register online and get notified of investment opportunities to fund.
                </Text>
                <Text className="mt-0">
                  Pick the investment opportunity according to the risk rating and track repayment status through Lendo
                  platform.
                </Text>
              </Div>

              <Div className="lendo__works-content-pagination">
                <Text>1 / 3</Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </Col>
    </Row>
  </Container>
);

export default HowLendoWorks;
