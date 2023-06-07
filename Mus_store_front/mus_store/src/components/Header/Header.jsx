import {React, useCallback} from "react";
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { SetIsAuthentificated } from "../../redux/reducer";
import { Setusername, Setid} from "../../redux/reducer";

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
  const items = useSelector(state => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const authLinks = useCallback((link) => {
            navigate(`/${link}`);
            dispatch(SetIsAuthentificated(true))
        }, [navigate]
    )

    async function logout() {
    dispatch(Setusername(''))
    dispatch(Setid(''))
    dispatch(SetIsAuthentificated(false))
  }
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
            {items.isAuthentificated === false ? 
              <Button variant="primary" className="me-2" onClick={logout}>Выйти</Button>
            : <Button variant="primary" className="me-2" onClick={() => {authLinks('login')}}>Войти</Button>
            }
            <Button variant="primary" onClick={() => {authLinks('register')}}>Регистрация</Button>
           { !items.isAuthentificated ?
            <Button variant="primary" onClick={() => {authLinks('cart')}}>Корзина</Button>
            :''
           }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
    </>
  );
}

export default Header;
