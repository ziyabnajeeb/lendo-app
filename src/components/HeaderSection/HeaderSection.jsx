import { Button, Col, Container, Image, Row } from 'react-bootstrap';

import { FaEnvelope } from 'react-icons/fa6';
import qrscanner from '../../assets/qr-scanner.svg';
import scrollDown from '../../assets/scroll-down.svg';
import './HeaderSection.scss';

const HeaderSection = () => {
  return (
    <Container as='header' className='lendo__header-section px-4' fluid>
      <Row className='align-items-end'>
        <Col>
          <Image src={qrscanner} />
        </Col>
        <Col lg={6} className='mx-auto text-center pb-5'>
          <h1 className='fw-bolder'>Flexible financing solutions that match your business needs</h1>
          <p className='py-3 w-75 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          <div className='header-content-learn-more d-flex align-items-center text-center justify-content-center'>
            <Button>Learn More</Button>
            <address className='text-primary mb-0 ms-4'>
              <FaEnvelope className='me-1' />
              <a href='#login' className='text-decoration-none lendo-link'>
                Contact us
              </a>
            </address>
          </div>
        </Col>
        <Col className='text-end'>
          <a href='#/'>
            <Image src={scrollDown} />
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderSection