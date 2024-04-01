import React, { Fragment, useState } from "react";
import bg from "../images/video-bg.jpg";
import { FaPlay } from "react-icons/fa";
import CustomModal from "./CustomModal";
import { Container, Row, Col, Button } from "react-bootstrap";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Container className="container px-4 mt-10">
        <Row className="text-center">
          <Col>
            <p className="videoHead">Video Tour</p>
            <p className="videoSubHead">Adventure is out there</p>
          </Col>
          <Col>
            <p className="videoDesc">
              We offer our clients the most complete and unique open air
              adventure thrills they have ever experienced complete with
              unforgettable moments. Your safety is our most important mission
              and for this reason.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row className="videoContainer">
          <img className="videoBackground" src={bg} alt="video-bg" />
          <button onClick={handleShow} className="playButton">
            <FaPlay />
          </button>
          <CustomModal show={show} handleClose={handleClose} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Video;
