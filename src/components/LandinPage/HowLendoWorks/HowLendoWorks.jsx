import { Col, Container, Row } from 'react-bootstrap';

import './HowLendoWorks.scss'

const HowLendoWorks = () => {
  return (
    <Container as='section' className='py-5 my-5 lendo__works'>
    <Row>
      <Col lg={9} className='mx-auto'>
        <div className='lendo__works-bg'>
          <div className='d-flex justify-content-center'>
            <p className='fw-lighter'>Smartly. Conveniently. Efficiently</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default HowLendoWorks