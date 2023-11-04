import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { MdArrowOutward } from 'react-icons/md';

import ourCommitmentBg from '../../../assets/our-commitment.svg';
import { Div, H2, Text } from '../../UI/Tag/Tag';

import './OurCommitment.css';

const OurCommitment = () => (
  <Container as="section" className="lendo__our-commitment">
    <Row>
      <Col lg={12} className="mx-auto">
        <Row className="lendo__our-commitment-content align-items-center justify-content-center">
          <Col lg={6}>
            <Image src={ourCommitmentBg} alt="our commitment" />
          </Col>
          <Col lg={6}>
            <Div className="lendo__our-commitment-content-right">
              <H2 className="fw-bolder">Our commitment to Shari’ah Compliance</H2>
              <Text className="fw-bold mb-3">Compliance is not merely a function or department here at Lendo.</Text>
              <Text>
                We hold our business conduct according to Islamic Ethics inclusive of principles and values. We strive
                to continuously earn the trust of our customers, partners and suppliers by adhering to the required
                laws, regulations, stipulations and ethics mandated by the Shariah Board.
              </Text>
              <Button size="lg">
                Learn More <MdArrowOutward />
              </Button>
            </Div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default OurCommitment;
