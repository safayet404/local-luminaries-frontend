import React, { Fragment, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  NavLink,
  Row,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import t1 from "../images/activities-10.jpg";
import t2 from "../images/activities-11.jpg";
import t3 from "../images/activities-12.jpg";
import t4 from "../images/activities-13.jpg";
import t5 from "../images/activities-14.jpg";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import B1 from "../images/B-1.jpg"
import B2 from "../images/B-2.jpg"
import B3 from "../images/B-3.jpg"
import B4 from "../images/B-4.jpg"
import B5 from "../images/B-5.jpg"
import B6 from "../images/B-6.jpg"
import B7 from "../images/B-7.jpg"
import B8 from "../images/B-8.jpg"
import B9 from "../images/B-9.jpg"
import B10 from "../images/B-10.jpg"
import B11 from "../images/B-11.jpg"
import B12 from "../images/B-12.jpg"
import B13 from "../images/B-13.jpg"
import B14 from "../images/B-14.jpg"
import B15 from "../images/B-15.jpg"
import B16 from "../images/B-16.jpg"
import B17 from "../images/B-17.jpg"
import B18 from "../images/B-18.jpg"
import B19 from "../images/B-19.jpg"
import B20 from "../images/B-20.jpg"
import B21 from "../images/B-21.jpg"
import B22 from "../images/B-22.jpg"
import B23 from "../images/B-23.jpg"
import B24 from "../images/B-24.jpg"
import B25 from "../images/B-25.jpg"

const Tours = () => {
  return (
    <Fragment>
      <Container className="topMargin">
        <h1 className="text-center mt-5">Tour List</h1>
        <Row className="mt-5 flex ">
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={B22} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2 text-xl font-semibold">
                    Paragliding in Cox's Bazar
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <HashLink
                    smooth
                    to="/details#top"
                    className="tourCardLink mb-2"
                  >
                     <Button className="btn-warning mb-2">Details</Button>
                  </HashLink>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={B19} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <HashLink
                    smooth
                    to="/details#top"
                    className="tourCardLink mb-2"
                  >
                     <Button className="btn-warning mb-2">Details</Button>
                  </HashLink>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={B18} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <HashLink
                    smooth
                    to="/details#top"
                    className="tourCardLink mb-2"
                  >
                     <Button className="btn-warning mb-2">Details</Button>
                  </HashLink>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={B17} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <HashLink
                    smooth
                    to="/details#top"
                    className="tourCardLink mb-2"
                  >
                     <Button className="btn-warning mb-2">Details</Button>
                  </HashLink>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={B16} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>

                  <HashLink
                    smooth
                    to="/details#top"
                    className="tourCardLink mb-2"
                  >
                     <Button className="btn-warning mb-2">Details</Button>
                  </HashLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tours;
