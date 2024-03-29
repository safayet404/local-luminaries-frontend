import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                  className="w-100 h-100 object-cover"
                />
                <div class="card-overlay">
                  <div class="card ">
                    <h2 className="text-white">{data.title}</h2>

                    <div className="d-flex align-items-center mt-2">
                      <span className="text-warning">★</span>
                      <span className="ms-1 text-white">{data.rating}</span>
                    </div>
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
