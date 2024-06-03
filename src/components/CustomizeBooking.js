import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CustomInput from "./CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createCustomizeTour } from "../features/customize/customizeSlice";

let customizeSchema = Yup.object().shape({
  contact: Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
  }),
  address: Yup.object().shape({
    house: Yup.string().required("House Number is required"),
    road: Yup.string().required("Road Number is required"),
    city: Yup.string().required("City/Town is required"),
    postCode: Yup.string().required("Post Code is required"),
  }),
});

const CustomizeBooking = () => {
  const location = useLocation();
  const { state } = location; 
  const { destination, person, date, duration } = state || {};

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      date: date || "",
      destination: destination || "",
      person: person || "",
      duration: duration || "",
      contact: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      address: {
        house: "",
        road: "",
        city: "",
        postCode: "",
      },
    },
    validationSchema: customizeSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      dispatch(createCustomizeTour(values));
    },
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={12}>
          <div className="border p-4">
            <h2 className="booking-heading">Destination: {destination}</h2>
            <h4 className="booking-heading">Person: {person}</h4>
            <h4 className="booking-heading">Duration: {duration}</h4>
            <h4 className="booking-heading">Date: {date}</h4>
          </div>
        </Col>
        <Col>
          <form onSubmit={formik.handleSubmit}>
            <div className="detailsCard mt-5">
              <h1 className="mb-5">Details</h1>

              <div className="row">
                <div className="col-6">
                  <CustomInput
                    className="bookingForm"
                    type="text"
                    name="contact.firstName"
                    placeholder="First Name *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact.firstName}
                  />
                </div>
                <div className="col-6">
                  <CustomInput
                    className="bookingForm"
                    type="text"
                    name="contact.lastName"
                    placeholder="Last Name *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact.lastName}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <CustomInput
                    type="email"
                    name="contact.email"
                    className="bookingForm"
                    placeholder="Your Email *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact.email}
                  />
                </div>
                <div className="col-6">
                  <CustomInput
                    className="bookingForm"
                    type="text"
                    name="contact.phone"
                    placeholder="Phone Number *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact.phone}
                  />
                </div>
              </div>

              <CustomInput
                type="text"
                name="address.house"
                placeholder="House Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address.house}
              />
              <CustomInput
                type="text"
                name="address.road"
                placeholder="Road Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address.road}
              />
              <CustomInput
                type="text"
                name="address.city"
                placeholder="City/Town"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address.city}
              />
              <CustomInput
                type="text"
                name="address.postCode"
                placeholder="Post Code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address.postCode}
              />
              <Button type="submit" variant="success mt-4">
                Place Order
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomizeBooking;