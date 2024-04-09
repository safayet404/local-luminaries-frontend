import { Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import av1 from "../images/team1.jpg";
import av2 from "../images/team2.jpg";
import av3 from "../images/team3.jpg";
import av4 from "../images/team4.jpg";
const Team = () => {
  return (
    <Fragment>
      <Container className="text-center mt-5 teamContainer">
        <h2>Our Team</h2>
        <p>
          We have a team of professionals, dedicated to providing excellent
          service to ensure the enjoyment of your vacation.
        </p>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="teamCard">
              <img className="teamImage" alt="team-member" src={av3} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Lorena Smith</h6>
                <p>Vacation Coodinator</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="teamCard">
              <img className="teamImage" alt="team-member" src={av1} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Ricardo Anje</h6>
                <p>Tour Oparator</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="teamCard">
              <img className="teamImage" alt="team-member" src={av4} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Carlos Cimino</h6>
                <p>Marketing</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="teamCard">
              <img className="teamImage" alt="team-member" src={av2} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Julia Jones</h6>
                <p>Marketing</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Team;
