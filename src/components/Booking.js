import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import thumb from "../images/activities-10.jpg";
import CustomInput from "./CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { base_url } from "../utils/base_url";
import { TbCurrencyTaka } from "react-icons/tb";
import toast from "react-hot-toast";

let customizeSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  mobile: Yup.string().required("Phone Number is required"),
  
  address: Yup.object().shape({
    house: Yup.string().required("House Number is required"),
    road: Yup.string().required("Road Number is required"),
    city: Yup.string().required("City/Town is required"),
    postCode: Yup.string().required("Post Code is required"),
  }),
      tourId : Yup.string().required("House Number is required"),
      person : Yup.string().required("House Number is required"),
      price : Yup.number().required("House Number is required"),
      totalAmount : Yup.number().required("House Number is required"),
      paidAmount : Yup.number().required("House Number is required"),
      dueAmount :Yup.number().required("House Number is required")

});


const Booking = () => {
  const [singleTour, setSingleTour] = useState([]);
  const locations = useLocation();
  const userData =  JSON.parse(localStorage.getItem("user"));
  console.log("user data  : ",userData);
  const id = locations.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}tour/single-tour/${id}`);
        setSingleTour(response.data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchData();
  }, [id]);
  
  const pricePerUnit = singleTour.price;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const parsedQuantity = parseInt(quantity);
    const parsedPricePerUnit = parseFloat(pricePerUnit);

    if (!isNaN(parsedQuantity) && !isNaN(parsedPricePerUnit)) {
      const total = parsedQuantity * parsedPricePerUnit;
      setTotalPrice(total.toFixed(2)); 
    } else {
      setTotalPrice("Invalid input");
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [quantity, pricePerUnit]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile : "",
      
      address: {
        house: "",
        road: "",
        city: "",
        postCode: "",
      },
      userId : userData._id || "",
      tourId : singleTour._id || "",
      person : quantity || "",
      price : singleTour.price || "",
      totalAmount : totalPrice || "",
      paidAmount : quantity|| "",
      dueAmount : totalPrice || ""
    },
    validationSchema: customizeSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
      try{
        const response = await axios.post(`${base_url}order/create-order`,values)
        if(response.status === 200)
          {
           
            toast.success("Order Place Successfully!")
          }

      }catch(error)
      {
        console.log("Error submitting booking")
      }
      setQuantity(1)

      formik.resetForm()
      
    },
  });

  return (
    <Fragment>
      <Container className="mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="border ">
            <Row className="p-4">
              <Col lg={9}>
                <div className="d-flex">
                  <div>
                    <img
                      className="thumbnail-img"
                      src={singleTour.image}
                      alt="thumbnail"
                    />
                  </div>
                  <div>
                    <h4 className="booking-heading">
                      {singleTour.title}
                    </h4>
                    <h4 className="booking-heading">Duration: {singleTour.duration}</h4>
                    <h4 className="booking-heading">Price : {singleTour.price} <TbCurrencyTaka/> </h4>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                    </div>
                  </div>
                </div>
                
              </Col>

              <Col lg={3}>
                <div className="total-price">
                  <label>Total Price :  </label>
                  <span>{totalPrice} <TbCurrencyTaka/> </span>
                </div>
              </Col>
            </Row>
          </div>

          <div className="detailsCard mt-5">
            <h1 className="mb-5">Billing Details</h1>

            <div className="row">
              <div className="col-6">
             
              <CustomInput 
                  className="bookingForm"
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              </div>
              <div className="col-6">
                <CustomInput 
                  className="bookingForm"
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <CustomInput
                  type="email"
                  name="email"
                  className="bookingForm"
                  placeholder="Your Email *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="col-6">
                <CustomInput
                  className=""
                  type="text"
                  name="mobile"
                  placeholder="Phone Number *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
              </div>
            </div>

            <CustomInput type="text" name="address.house" placeholder="House Number"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.address.house}
              />
            <CustomInput type="text" name="address.road" placeholder="Road Number"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.address.road}
             />
            <CustomInput type="text" name="address.city" placeholder="City/Town"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.address.city}
             />
            <CustomInput type="text" name="address.postCode" placeholder="Post Code"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.address.postCode}
             />

            <h1 className="mb-4">Your Order</h1>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="booking-heading">
                        {singleTour._id} X {quantity}
                      </span>{" "}
                    </td>
                    <td>{totalPrice}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="booking-heading">Paid Amount</span>{" "}
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="booking-heading">Total Due</span>{" "}
                    </td>
                    <td>{totalPrice}</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <p> Payment on Cash </p>
            <Button type="submit"  variant="success">Place Order</Button>
          </div>
        </form>
      </Container>
    </Fragment>
  );
};

export default Booking;
