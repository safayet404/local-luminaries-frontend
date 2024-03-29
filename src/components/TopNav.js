
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../images/Untitled(1).png"
import { Layout, Menu, Button, theme } from "antd";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const TopNav = () => {
  return (
    <Fragment>
    
     <Navbar fixed="top" collapseOnSelect expand="lg" className="navBackground">
      <Container>
    
        <Navbar.Brand className="logo-text" href="/">
          <img className="logo" src={Logo} alt="logo" /> Luminaries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
           
            <Link  className="navItem" to="/">Home</Link>
            <Link  className="navItem" to="/about">About</Link>
            <Link  className="navItem" to="/tours">Tours</Link>
            <Link  className="navItem" to="/team">Team</Link>
            <Link  className="navItem" to="/contact">Contact</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  );
};

export default TopNav;