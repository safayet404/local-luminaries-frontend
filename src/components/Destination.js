import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RxDrawingPinFilled } from "react-icons/rx";
const Destination = ({ dstCard }) => {
  return (
    <Fragment>
      <Container>
        <h1 className="destHeading">Main Destination</h1>
        <p className="subHead">
          Search our website for the best destinations in the world, where you
          can enjoy the best vacations.
        </p>
        <Row>
          {dstCard.map((data, index) => (
            <Col className="mt-3" lg={3} md={6} sm={12} key={index}>
              <div className="destCard">
                <img
                  src={data.image}
                  alt={`Destination ${index + 1}`}
                  className="destinationImage"
                />
                <div className="card-overlay">
                  <div>
                    <h4>{data.title}</h4>
                    <div className="d-flex align-items-center mt-2"></div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Destination;
