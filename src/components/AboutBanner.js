import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import memories from "../images/travi-1.jpg";

import support from "../images/support.png";
import premium from "../images/premium-quality.png";
const AboutBanner = () => {
  return (
    <Fragment>
      <Container className="text-center">
        <Row>
          <Col className="p-5 text-lg-right" lg={6} sm={12} md={12}>
            <h2 className="memoriesHead">
              Memories Made Together Last a Lifetime
            </h2>
            <h5 className="memoriesSubHead">
              Growing community by inspiring healthy is our commitment with
              farmers, the abundant living on the field.
            </h5>
            <p className="memoriesSubContent">
              Your satisfaction with your experience that your recommendation.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.{" "}
            </p>

            <div className="d-flex">
              <img src={premium} alt="support" />
              <div className="p-2">
                <h3 className="ImageContentHead">Satisfaction Guarantee </h3>
                <p className="ImageContentSubHead">
                  Despite the variety of fish you could catch, no fish is more
                  desirable than the bluefin tuna.
                </p>
              </div>
            </div>
            <div className="d-flex mt-5">
              <img src={support} alt="support" />
              <div className="p-2">
                <h3 className="ImageContentHead">Online Support </h3>
                <p className="ImageContentSubHead">
                  Some anglers have even battled to reel in bluefin tuna
                  weighing trips travel a maximum..
                </p>
              </div>
            </div>
          </Col>
          <Col className="imageSectionBackground" lg={6} sm={12} md={12}>
            <img
              className=" memories-image"
              alt="memories-image"
              src={memories}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AboutBanner;
