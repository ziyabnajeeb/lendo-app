import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa6';

import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-white.svg';
import { ThemeSwitcher } from '../../components';
import './AppNav.css';

const AppNav = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary fixed-top shadow lendo__app-nav"
    >
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="me-lg-5">
          {isLightTheme ? (
            <img src={logo} alt="" srcSet="" />
          ) : (
            <img src={logoWhite} alt="" srcSet="" />
          )}
        </Navbar.Brand>
        <Nav.Link as="div" className="d-lg-none ms-auto">
          <ThemeSwitcher setIsLightTheme={setIsLightTheme} />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-lg-center ml-lg-3 lendo__app-nav-links">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="about">
              About
            </Nav.Link>
            <Nav.Link href="#home">
              For Business <FaChevronDown />
            </Nav.Link>
            <Nav.Link href="#link">
              Invest <FaChevronDown />
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="align-items-lg-center">
            <Nav.Link as="div" className="d-none d-lg-block">
              <ThemeSwitcher setIsLightTheme={setIsLightTheme} />
            </Nav.Link>
            <Nav.Link href="#link">Arabic</Nav.Link>
            <Nav.Link as={Link} to="login">
              <Button>Login to Lendo</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
