import { Col, Container, Row } from 'react-bootstrap';

import './HowLendoWorks.scss';

const HowLendoWorks = () => {
  return (
    <Container as='section' className='py-5 lendo__works'>
      <Row>
        <Col lg={10} className='mx-auto'>
          <div className='lendo__works-bg'>
            <div className='d-flex justify-content-center pt-5'>
              <div className='lendo__works-content text-center pt-5 mt-5 w-50'>
                <p className='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
                <h2 className='fw-bolder'>How Lendo Works?</h2>
                <div className='lendo__works-content-investor py-5 my-5'>
                  <h3 className='fw-bolder'>Investor</h3>
                  <p>Register online and get notified of investment opportunities to fund.</p>
                  <p>Pick the investment opportunity according to the risk rating and track repayment status through Lendo platform.</p>
                </div>

                <div className='lendo__works-content-pagination mt-5 pt-5'>
                  <br />
                  <br />
                  <p className='pt-5'>1 / 3</p>
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
