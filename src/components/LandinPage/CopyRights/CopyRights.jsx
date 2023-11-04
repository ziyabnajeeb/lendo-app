import { Col, Container, Row } from 'react-bootstrap';

import './CopyRights.css';

const CopyRights = () => (
  <Container as="section" fluid className="lendo__copy-rights fw-light">
    <Row>
      <Col>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="lendo__copy-rights-copy">
                <p className="text-uppercase mb-2 fw-bold">Risk Warning</p>
                <p>
                  The competent finance team at Lendo evaluates the credentials of each business before finalizing a
                  user agreement. As a buyer-centric entity, Lendo adheres to a set of compliance practices and
                  mechanisms to ensure that only authentic listings are featured on the platform for funding purposes.
                  Nonetheless, it is imperative for investors to understand that they are lending to SMEs which maybe at
                  the early-stages of establishing their presence in the industry. Therefore, the level of risk
                  associated with such investments is higher which could also result in a potential loss and delays in
                  repayment. It is necessary to understand that you could lose your money.
                </p>
              </div>
              <div className="lendo__copy-rights-links d-flex">
                <p>Copyright © 2022 Lendo Inc. All Rights Reserved</p>
                <a href="#/">Terms & Conditions</a>
                <span>|</span>
                <a href="#/">Privacy Policy</a>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default CopyRights;
