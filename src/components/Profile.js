import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profile from "../images/profile.png";
import axios from "axios";
import { base_url } from "../utils/base_url";
import { TbCurrencyTaka } from "react-icons/tb";
import ChangeDateFormat from "./ChangeDateFormat";

const Profile = () => {
  const [orderData, setOrderData] = useState([]);
  const loginData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginData) {
      navigate("/login");
    }
  }, [loginData, navigate]); // Depend on loginData to handle the redirect properly

  // Fetch user order data if loginData exists
  useEffect(() => {
    if (loginData) {
      axios
        .get(`${base_url}order/user-order/${loginData._id}`)
        .then((response) => {
          setOrderData(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the order data:", error);
        });
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!loginData) {
    return null; // or some loading state or redirect logic if needed
  }

  return (
    <Container className="container emp-profile">
      <Row>
        <Col lg={4} md={12} sm={12}>
          <div className="profile-img">
            <img src={profile} alt="profile" />
          </div>
          <div className="profile-work">
            <p>Details</p>
            <p>ID : {loginData._id}</p>
            <p>Email : {loginData.email}</p>
            <p>Mobile : {loginData.mobile}</p>
            <p>Role : {loginData.role}</p>
            <button onClick={logoutHandler} className="buttonCSS border-0">
              Log Out
            </button>
          </div>
        </Col>
        <Col lg={8} md={12} sm={12}>
          <div className="profile-head">
            <h5>{loginData.name}</h5>
            <h6>{loginData.email}</h6>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
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

            {orderData.length > 0 ? (
              orderData.map((item, index) => (
                <Col className="border mt-3" key={index}>
                  <div className="d-flex justify-content-between px-5">
                    <div className="mt-2 mb-2">
                      <img
                        className="thumbnail-img"
                        src={item.tourId.image || "default-image-url"} // Fallback for missing image
                        alt="thumbnail"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="booking-heading">
                        Date: {item.tourId.date ? ChangeDateFormat(item.tourId.date) : "N/A"}
                      </h4>
                      <h4 className="booking-heading">{item.tourId.title || "N/A"}</h4>
                      <h4 className="booking-heading">Guest: {item.person}</h4>
                      <h4 className="booking-heading">
                        Duration: {item.tourId.duration || "N/A"}
                      </h4>
                      <h4 className="booking-heading">
                        Amount: {item.totalAmount} <TbCurrencyTaka />
                      </h4>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
