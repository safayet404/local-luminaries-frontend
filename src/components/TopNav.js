
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../images/Untitled(1).png"
import { Layout, Menu, Button, theme } from "antd";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const TopNav = () => {
  return (
    <Fragment>
    
     <Navbar collapseOnSelect expand="lg" className="navBackground">
      <Container>
    
        <Navbar.Brand className="logo-text" href="/">
          <img className="logo" src={Logo} alt="logo" /> Luminaries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link  className="navItem" href="/">Home</Nav.Link>
            <Nav.Link  className="navItem" href="/about">About</Nav.Link>
            <Nav.Link  className="navItem" href="/tours">Tours</Nav.Link>
            <Nav.Link  className="navItem" href="/team">Team</Nav.Link>
            <Nav.Link  className="navItem" href="/contact">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  );
};

export default TopNav;