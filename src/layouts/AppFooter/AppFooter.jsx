import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { footerLinks } from '../../data/data';
import { CopyRights } from '../../components';

import lendoLogo from '../../assets/logo.svg';
import scrollTopArrow from '../../assets/scroll-top.svg';
import './AppFooter.css';

const AppFooter = () => (
  <>
    <Container as="footer" className="lendo__app-footer" fluid>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col lg={7}>
                <div className="lendo__app-footer-branding w-75">
                  <Link to="/">
                    <Image src={lendoLogo} alt="logo" />
                  </Link>
                  <p className="fw-light">
                    Lendo is located in 6533 Al Olaya St. – Alworood,
                    Riyadh 12251 – 2609, Saudi Arabia.
                  </p>
                </div>
                <Row className="lendo__app-footer-links">
                  {footerLinks.map((col) => (
                    <Col lg={3} key={col.title}>
                      <p className="fw-bold">{col.title}</p>
                      <ul className="list-unstyled">
                        {col.links.map((link) => (
                          <li key={link.title}>
                            <NavLink
                              to={link.href}
                              title={link.title}
                              className="fw-light"
                            >
                              {link.icon && <link.icon />}
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col lg={5} className="d-flex">
                <div className="lendo__app-footer-subscribe">
                  <p className="text-dark-blue mb-0">
                    Investment through Lendo involves financing to
                    small and medium sized businesses, so your
                    investment can go down as well as up.
                  </p>

                  <p className="fw-bold text-dark-blue mb-0 lendo__app-footer-subscribe-heading-text">
                    Subscribe to our newsletter
                  </p>

                  <InputGroup
                    size="lg"
                    className="lendo__app-footer-subscribe-input"
                  >
                    <Form.Control
                      placeholder="Email Address"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button id="button-addon2" size="lg">
                      Subscribe
                    </Button>
                  </InputGroup>

                  <p className="fw-light lendo__app-footer-subscribe-email-text">
                    Your email address will be kept confidential and
                    only used to send our newsletter or respond to any
                    queries.
                  </p>
                </div>
                <div className="lendo__app-footer-scroll-top ms-auto">
                  <a href="#/">
                    <Image src={scrollTopArrow} alt="scrollTop" />
                  </a>
                </div>
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