import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';

import { FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import lendoLogo from '../../assets/logo.svg';
import scrollTopArrow from '../../assets/scroll-top.svg';
import './AppFooter.scss';

const AppFooter = () => {
  return (
    <Container className='lendo__app-footer' fluid>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col lg={7}>
                <div className='lendo__app-footer-branding w-75'>
                  <Image src={lendoLogo} alt='logo' />
                  <p className='fw-light'>Lendo is located in 6533 Al Olaya St. – Alworood, Riyadh 12251 – 2609, Saudi Arabia.</p>
                </div>
                <Row className='lendo__app-footer-links'>
                  <Col lg={3}>
                    <p className='fw-bold'>The Company</p>
                    <ul class='list-unstyled'>
                      <li>
                        <a href='#/'>About Lendo</a>
                      </li>
                      <li>
                        <a href='#/'>Our Thoughts</a>
                      </li>
                      <li>
                        <a href='#/'>Careers</a>
                      </li>
                      <li>
                        <a href='#/'>News</a>
                      </li>
                      <li>
                        <a href='#/'>Contact Us</a>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={3}>
                    <p className='fw-bold'>For Business</p>
                    <ul class='list-unstyled'>
                      <li>
                        <a href='#/'>Get Funded</a>
                      </li>
                      <li>
                        <a href='#/'>Purchase Order</a>
                      </li>
                      <li>
                        <a href='#/'>Lendo Scoring</a>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={3}>
                    <p className='fw-bold'>Invest</p>
                    <ul class='list-unstyled'>
                      <li>
                        <a href='#/'>Invest</a>
                      </li>
                      <li>
                        <a href='#/'>Auto-invest</a>
                      </li>
                      <li>
                        <a href='#/'>Invoice Financing </a>
                      </li>
                      <li>
                        <a href='#/'>Shari'ah compliance </a>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={3}>
                    <p className='fw-bold'>Get in touch</p>
                    <ul class='list-unstyled'>
                      <li>
                        <a href='#/'>
                          <FaTwitter /> Twitter
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <FaLinkedinIn /> Linkedin
                        </a>
                      </li>
                      <li>
                        <a href='#/'>
                          <FaEnvelope /> Email Us
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>

              <Col lg={5} className='d-flex'>
                <div className='lendo__app-footer-subscribe'>
                  <p className='text-dark-blue mb-0'>Investment through Lendo involves financing to small and medium sized businesses, so your investment can go down as well as up.</p>

                  <p className='fw-bold text-dark-blue mb-0 lendo__app-footer-subscribe-heading-text'>Subscribe to our newsletter</p>

                  <InputGroup size='lg' className='lendo__app-footer-subscribe-input'>
                    <Form.Control placeholder="Email Address" aria-label="Recipient's username" aria-describedby='basic-addon2' />
                    <Button id='button-addon2'>
                      Subscribe
                    </Button>
                  </InputGroup>

                  <p className='fw-light lendo__app-footer-subscribe-email-text'>Your email address will be kept confidential and only used to send our newsletter or respond to any queries.</p>
                </div>
                <div className='lendo__app-footer-scroll-top ms-auto'>
                  <a href='#/'>
                    <Image src={scrollTopArrow} alt='scrollTop' />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AppFooter;
