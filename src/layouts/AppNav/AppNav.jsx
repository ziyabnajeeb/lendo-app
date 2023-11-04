import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as LogoWhite } from '../../assets/logo-white.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ThemeSwitcher } from '../../components';

import './AppNav.css';

const AppNav = () => {
  const [isLightTheme, setIsLightTheme] = useState('light');
  console.log('🚀 ~ file: AppNav.jsx:14 ~ AppNav ~ isLightTheme:', isLightTheme);

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top shadow lendo__app-nav">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="me-lg-5">
          {isLightTheme === 'light' ? (
            <Logo className="lendo__app-nav-logo" />
          ) : (
            <LogoWhite className="lendo__app-nav-logo" />
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
            <Nav.Link as="div" className="d-lg-block">
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
