import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

let customizeSchema = Yup.object().shape({
  destination: Yup.string().required("Destination is required"),
  person: Yup.number().required("Person is required"),
  duration: Yup.number().required("Person is required"),
  date: Yup.date().required("Date is required"),
});
const CustomizeTour = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      date: "",
      destination: "",
      person: "",
      duration : ""
    },
    validationSchema: customizeSchema,
    onSubmit: (values) => {
      formik.resetForm();
      navigate("/customize-booking",{state : values})

    },
  });
  return (
    <Container className=" mt-5">
      <h2 className="activitiyHeader mb-4">Customize Your Tour</h2>
      <form onSubmit={formik.handleSubmit}>
        <Row className="td-customize">
          <Col className="d-flex justify-content-center " lg={3} md={6} sm={12}>
            <select
              onChange={formik.handleChange("destination")}
              onBlur={formik.handleBlur("destination")}
              value={formik.values.destination}
              name="description"
              className="uniform-input"
            >
              <option value="">Select The Destination</option>
              <option value="Tongi">Tongi</option>
            </select>
          </Col>

          <Col className="d-flex justify-content-center" lg={2} md={6} sm={12}>
            <CustomInput
              className="measurement"
              type="number"
              placeholder="How Many Person?"
              onChange={formik.handleChange("person")}
              onBlur={formik.handleBlur("person")}
              value={formik.values.person}
            />
          </Col>
          <Col className="d-flex justify-content-center" lg={2} md={6} sm={12}>
            <CustomInput
              className="measurement"
              type="number"
              placeholder="Duration?"
              onChange={formik.handleChange("duration")}
              onBlur={formik.handleBlur("duration")}
              value={formik.values.duration}
            />
          </Col>

          <Col className="d-flex justify-content-center" lg={2} md={6} sm={12}>
            <CustomInput
              className="measurement"
              type="date"
              onChange={formik.handleChange("date")}
              onBlur={formik.handleBlur("date")}
              value={formik.values.date}
            />
          </Col>

          <Col className="d-flex justify-content-center" lg={3} md={6} sm={12}>
            <Button type="submit" className="btn-warning customize-button">
            
              Booking
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default CustomizeTour;
