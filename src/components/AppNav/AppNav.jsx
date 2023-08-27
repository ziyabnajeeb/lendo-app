import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { FaChevronDown } from 'react-icons/fa6';
import logo from '../../assets/logo.svg';
import './AppNav.scss';
import { ThemeSwitcher } from '../index';

const AppNav = () => (
  <Navbar
    expand="lg"
    className="bg-body-tertiary fixed-top shadow-sm lendo__app-nav"
  >
    <Container fluid className="px-4">
      <Navbar.Brand href="#home" className="me-lg-5">
        <img src={logo} alt="" srcSet="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto align-items-lg-center ml-lg-3 lendo__app-nav-links">
          <Nav.Link href="#home">
            For Business <FaChevronDown />
          </Nav.Link>
          <Nav.Link href="#link">
            Invest <FaChevronDown />
          </Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
        </Nav>
        <Nav className="align-items-lg-center">
          <Nav.Link as="div">
            <ThemeSwitcher />
          </Nav.Link>
          <Nav.Link href="#link">Arabic</Nav.Link>
          <Nav.Link href="#link">
            <Button>Login to Lendo</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNav;
