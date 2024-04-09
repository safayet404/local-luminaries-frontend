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
            <Col className="mt-3" lg={4} md={6} sm={12} key={index}>
              <div className="position-relative">
                <img
                  src={data.image}
                  alt={`Destination ${index + 1}`}
                  className="destinationImage object-cover"
                />
                <div class="card-overlay">
                  <div>
                    <h2 className="text-white"> {data.title}</h2>

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
