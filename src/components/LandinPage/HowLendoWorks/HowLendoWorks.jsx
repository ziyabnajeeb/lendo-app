import { Col, Container, Row } from 'react-bootstrap';

import './HowLendoWorks.scss';

const HowLendoWorks = () => {
  return (
    <Container as='section' className='lendo__works'>
      <Row>
        <Col lg={11} className='mx-auto'>
          <div className='lendo__works-bg'>
            <div className='d-flex justify-content-center'>
              <div className='lendo__works-content text-center'>
                <p className='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
                <h2 className='fw-bolder'>How Lendo Works?</h2>
                <div className='lendo__works-content-investor'>
                  <h3 className='fw-bolder mt-0'>Investor</h3>
                  <p className='text-dark-blue fw-bold my-2'>Register online and get notified of investment opportunities to fund.</p>
                  <p className='mt-0'>Pick the investment opportunity according to the risk rating and track repayment status through Lendo platform.</p>
                </div>

                <div className='lendo__works-content-pagination'>
                  <p>1 / 3</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HowLendoWorks;
