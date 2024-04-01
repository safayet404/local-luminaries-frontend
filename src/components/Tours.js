import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import t1 from "../images/activities-10.jpg";
import t2 from "../images/activities-11.jpg";
import t3 from "../images/activities-12.jpg";
import t4 from "../images/activities-13.jpg";
import t5 from "../images/activities-14.jpg";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const Tours = () => {
  return (
    <Fragment>
      <Container className="topMargin">
        <h1 className="text-center">Tour List</h1>
        <Row className="mt-5 flex ">
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={t1} alt="Avatar" className="tourCardImage" />
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
                  <Link to="/" className="tourCardLink mb-2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={t2} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <Link to="/" className="tourCardLink mb-2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={t3} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <Link to="/" className="tourCardLink mb-2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={t4} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <Link to="/" className="tourCardLink mb-2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <div class="tourCard" style={{ maxWidth: "368px" }}>
                <img src={t5} alt="Avatar" className="tourCardImage" />
                <div class="tourContainer">
                  <h4 className="mt-2">Paragliding in Cox's Bazar</h4>
                  <div className="d-flex justify-content-between">
                    <p>Starting from </p>
                    <h5 className="flex">
                      85000 <TbCurrencyTaka />{" "}
                    </h5>
                  </div>
                  <Link to="/" className="tourCardLink mb-2">
                    Details
                  </Link>
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
