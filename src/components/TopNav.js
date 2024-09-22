
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../images/Untitled(1).png"
import { CgProfile } from "react-icons/cg";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
    
     <Navbar fixed="top" collapseOnSelect expand="lg" bg={scrolling ? "navBackground" : "transparent"}
        className={scrolling ? "navBackground" : ""}
        variant={scrolling ? "light" : ""}>
      <Container>
    
        <Navbar.Brand className="logo-text">
          <img className="logo" src={Logo} alt="logo" />
          <Link to="/" className="logo-text">Luminaries</Link>
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
            <Link  className="navItem1" to="/profile"><CgProfile/> </Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  );
};

export default TopNav;