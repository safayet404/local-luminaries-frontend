import React, { Fragment, useEffect, useState } from "react";
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

import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


import axios from "axios";
import { base_url } from "../utils/base_url";

const Tours = () => {
  const [tourItem, setTourItem] = useState([]);
  console.log("getting from tourItem", tourItem);

  useEffect(() => {
    axios
      .get(`${base_url}tour/all-tour`)
      .then((response) => {
        setTourItem(response.data);
      })
      .catch((error) => {
        console.error("there was an error !", error);
      });
  }, []);
  return (
    <Fragment>
      <Container className="topMargin">
        <h1 className="text-center mt-5">Tour List</h1>
        <Row className="mt-5 flex ">
          {tourItem.map((item, index) => {
            return (
              <Col key={index} className="mb-5" lg={4} md={6} sm={12}>
                <div className="d-flex justify-content-center">
                  <div class="tourCard" style={{ maxWidth: "368px" }}>
                    <img src={item.image} alt="Avatar" className="tourCardImage" />
                    <div class="tourContainer">
                      <h4 className="mt-2 text-xl font-semibold">
                        {item.title}
                      </h4>
                      <div className="d-flex justify-content-between">
                        <p>Starting from </p>
                        <h5 className="flex">
                          {item.price} <TbCurrencyTaka />{" "}
                        </h5>
                      </div>
                      <HashLink
                        smooth
                        to={`/details/${item._id}#top`}
                        className="tourCardLink mb-2"
                      >
                        <Button className="btn-warning mb-2">Details</Button>
                      </HashLink>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tours;
