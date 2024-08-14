import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "./Login"; // Adjust import path if needed
import { useNavigate } from "react-router-dom";
import profile from "../images/profile.png";
import axios from "axios";
import { base_url } from "../utils/base_url";
import { TbCurrencyTaka } from "react-icons/tb";
import ChangeDateFormat from "./ChangeDateFormat";

const Profile = () => {
  const [orderData, setOrderData] = useState([]);
  console.log(orderData);
  const loginData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData === null) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    axios
      .get(`${base_url}order/user-order/${loginData._id}`)
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the order data:", error);
      });
  }, []);
  if (!loginData) {
    return null;
  }

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Container className="container emp-profile">
      <Row>
        <Col lg={4} md={12} sm={12}>
          <div class="profile-img">
            <img src={profile} alt="" />
          </div>
          <div class="profile-work">
            <p>Details</p>
            <p> ID : {loginData._id}</p>
            <p> Email : {loginData.email}</p>
            <p> Mobile : {loginData.mobile}</p>
            <p> Role : {loginData.role}</p>
            <button onClick={logoutHandler} className="buttonCSS border-0 ">
              Log Out
            </button>
          </div>
        </Col>
        <Col lg={8} md={12} sm={12}>
          <div>
            <div class="profile-head">
              <h5>{loginData.name}</h5>
              <h6>{loginData.email}</h6>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Order History
                  </a>
                </li>
              </ul>

              {orderData.length > 0
                ? orderData.map((item, index) => {
                    return (
                      <Col className="border mt-3">
                        <div className="d-flex justify-content-between px-5">
                          <div className="mt-2 mb-2">
                            <img
                              className="thumbnail-img"
                              src={item.tourId?.image}
                              alt="thumbnail"
                            />
                          </div>
                          <div className="mt-4">
                            <h4 className="booking-heading">
                              Date : {ChangeDateFormat(item.tourId?.date)}
                            </h4>
                            <h4 className="booking-heading">
                              {item.tourId?.title}
                            </h4>
                            <h4 className="booking-heading">
                              Guest : {item.person}
                            </h4>
                            <h4 className="booking-heading">
                              Duration: {item.tourId?.duration}
                            </h4>
                            <h4 className="booking-heading">
                              Amount : {item.totalAmount} <TbCurrencyTaka />{" "}
                            </h4>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                : "No data found"}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;