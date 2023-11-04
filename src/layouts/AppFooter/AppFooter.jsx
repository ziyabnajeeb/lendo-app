import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import lendoLogo from '../../assets/logo.svg';
import scrollTopArrow from '../../assets/scroll-top.svg';
import { CopyRights } from '../../components';
import { Div, LI, Text, UL } from '../../components/UI/Tag/Tag';
import { footerLinks } from '../../data/data';

import './AppFooter.css';

const AppFooter = () => (
  <>
    <Container as="footer" className="lendo__app-footer" fluid>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col lg={7}>
                <Div className="lendo__app-footer-branding w-75">
                  <Link to="/">
                    <Image src={lendoLogo} alt="logo" />
                  </Link>
                  <Text className="fw-light">
                    Lendo is located in 6533 Al Olaya St. – Alworood, Riyadh 12251 – 2609, Saudi Arabia.
                  </Text>
                </Div>
                <Row className="lendo__app-footer-links">
                  {footerLinks.map((col) => (
                    <Col lg={3} key={col.title}>
                      <Text className="fw-bold">{col.title}</Text>
                      <UL className="list-unstyled">
                        {col.links.map((link) => (
                          <LI key={link.title}>
                            <NavLink to={link.href} title={link.title} className="fw-light">
                              {link.icon && <link.icon />}
                              {link.title}
                            </NavLink>
                          </LI>
                        ))}
                      </UL>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col lg={5} className="d-flex">
                <Div className="lendo__app-footer-subscribe">
                  <Text className="text-dark-blue mb-0">
                    Investment through Lendo involves financing to small and medium sized businesses, so your investment
                    can go down as well as up.
                  </Text>

                  <Text className="fw-bold text-dark-blue mb-0 lendo__app-footer-subscribe-heading-text">
                    Subscribe to our newsletter
                  </Text>

                  <InputGroup size="lg" className="lendo__app-footer-subscribe-input">
                    <Form.Control
                      placeholder="Email Address"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button id="button-addon2" size="lg">
                      Subscribe
                    </Button>
                  </InputGroup>

                  <Text className="fw-light lendo__app-footer-subscribe-email-text">
                    Your email address will be kept confidential and only used to send our newsletter or respond to any
                    queries.
                  </Text>
                </Div>
                <Div className="lendo__app-footer-scroll-top ms-auto">
                  <a href="#/">
                    <Image src={scrollTopArrow} alt="scrollTop" />
                  </a>
                </Div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>

    <CopyRights />
  </>
);

export default AppFooter;
