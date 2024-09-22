import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RxDrawingPinFilled } from "react-icons/rx";
import LazyLoad from 'react-lazyload';
import { base_url } from "../utils/base_url";

import axios from "axios";

const Destination = ({ dstCard }) => {




  const [destinations,setDestinations] = useState([])

  
  useEffect(()=>{
    axios.get(`${base_url}destination/all-destination`)
    .then(response =>{
      setDestinations(response.data)
    })
    .catch(error=>{
      console.error("there was an error !",error)
    })
  },[])


  return (
    <Fragment>
      <Container>
        <h1 className="destHeading">Main Destination</h1>
        <p className="subHead">
          Search our website for the best destinations in the world, where you
          can enjoy the best vacations.
        </p>
        <Row>
          {destinations.map((data, index) => (
            <Col className="mt-3" lg={3} md={6} sm={12} key={index}>
              <div className="destCard">
              <LazyLoad once>
                <img
                  src={data.image}
                  alt={`Destination ${index + 1}`}
                  className="destinationImage"
                />
                </LazyLoad>
                <div className="card-overlay">
                  <div>
                    <h4 className="destName">{data.name}</h4>
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
