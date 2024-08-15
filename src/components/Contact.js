import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  NavLink,
  Row,
} from "react-bootstrap";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const Contact = () => {
  return (
    <Fragment>
      <Container fluid className="text-center icon-container">
        <Row className="">
          <Col>
            <div className="d-flex flex-column align-items-center mt-4 mb-4">
              <SlLocationPin className="contactIcons" />

              <p>153, Primary School ,Dakshinkhan </p>
              <p>Dhaka,Bangladesh</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column align-items-center mt-4 mb-4">
              <MdOutlinePhoneInTalk className="contactIcons" />

              <p>+8801679175553 </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column align-items-center mt-4 mb-4 ">
              <TfiEmail className="contactIcons" />

              <p>hossainsafayet187@gmail.com </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-center  mb-4 mt-5">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <h3 className="mt-4">Get in Touch With Us</h3>
            <p>
              World’s leading non-asset- based supply chain management
              companies, we design and implement industry-leading. We specialise
              in intelligent & effective search and believes business.
            </p>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <form>
              <Row>
                <Col className="mt-3">
                  <input
                    placeholder="*Name"
                    className="contactFormBackground"
                  />
                </Col>
                <Col className="mt-3">
                  <input
                    placeholder="*Email Address"
                    className="contactFormBackground"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                  <input
                    placeholder="*Phone Number"
                    className="contactFormBackground"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                  <textarea
                    placeholder="*Message"
                    className="contactFormBackground"
                  />
                </Col>
              </Row>
            </form>
            <Button className="mt-4"  style={{backgroundColor: "#2485B0",borderColor: "#28a745",}}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Contact;
