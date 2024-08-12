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
import ChangeDateFormat from "./ChangeDateFormat";

const Tours = () => {
  const [tourItem, setTourItem] = useState([]);

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
                    <img
                      src={item.image}
                      alt="Avatar"
                      className="tourCardImage"
                    />
                    <div class="tourContainer">
                      <h4 className="mb-2 text-primary">{item.title}</h4>
                      <div className="d-flex justify-content-between mt-2">
                        <p className="mb-1 text-muted">Date:</p>
                        <h5 className="mb-1">{ChangeDateFormat(item.date)}</h5>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <p className="mb-1 text-muted">Duration:</p>
                        <h5 className="mb-1">{item.duration}</h5>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <p className="mb-0 text-muted">Starting from:</p>
                        <h5 className="mb-0 d-flex align-items-center">
                          {item.price} <TbCurrencyTaka className="ml-1" />
                        </h5>
                      </div>

                      <HashLink
                        smooth
                        to={`/details/${item._id}#top`}
                        className="tourCardLink mb-2"
                      >
                        <Button className=" mt-4 btn-warning mb-4">
                          Details
                        </Button>
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
