import {React, useCallback} from "react";
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: yellow
    }
  }
`


function Header() {
  const navigate = useNavigate();

  const authLinks = useCallback((link) => {
            navigate(`/${link}`);
        }, [navigate]
    )
  return (
    <>
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>MusicMan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className="me-2" onClick={() => {authLinks('login')}}>Войти</Button>
            <Button variant="primary" onClick={() => {authLinks('register')}}>Регистрация</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
    </>
  );
}

export default Header;
