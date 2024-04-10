import React from "react";
import { Container, Row, Col ,Navbar} from "react-bootstrap";
import { Fragment } from "react";
import logo from "../images/Untitled(1).png";
import { Link } from "react-router-dom";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <Fragment>
      <Container fluid  className="text-center footerBackground mt-5">
        <Row>
            <Col>
            <h3 className="footerText">All Right Reserve By &copy; Safayet</h3>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Footer;
