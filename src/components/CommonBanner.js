import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AB from "../images/pages-bg.jpg";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
const CommonBanner = ({title,subTitle}) => {
  return (
    <div className="commonBanner">
      <div className="imageContainer">
        <div className="overlay"></div>
        <img fluid={true} className="image" alt="about-banner" src={AB} />

        <Container>
          <Row>
            <Col className="pageContent">
              <h1 className="pageHead">{title}</h1>
              <p className="pageSubHead">{subTitle}</p>
            </Col>
          </Row>
        </Container>

        <div className="aboutSocialIcons">
          <ul>
            <p>
              <CiFacebook />
            </p>
            <p>
              <CiTwitter />
            </p>
            <p>
              <CiInstagram />
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
