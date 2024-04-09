import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import thumb from "../images/activities-10.jpg";
import CustomInput from "./CustomInput";
import { HashLink } from "react-router-hash-link";
const Booking = () => {
  const pricePerUnit = 5000;
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const parsedQuantity = parseInt(quantity);
    const parsedPricePerUnit = parseFloat(pricePerUnit);

    if (!isNaN(parsedQuantity) && !isNaN(parsedPricePerUnit)) {
      const total = parsedQuantity * parsedPricePerUnit;
      setTotalPrice(total.toFixed(2)); // Round to 2 decimal places
    } else {
      setTotalPrice("Invalid input");
    }
  };

  // Event handler for quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Event handler for price per unit chang

  // Calculate total price whenever quantity or price per unit changes
  useEffect(() => {
    calculateTotalPrice();
  }, [quantity, pricePerUnit]);

  return (
    <Fragment>
      <Container className="mt-5">
        <form>
          <div className="border ">
            <Row className="p-4">
              <Col lg={9}>
                <div className="d-flex">
                  <div>
                    <img
                      className="thumbnail-img"
                      src={thumb}
                      alt="thumbnail"
                    />
                  </div>
                  <div>
                    <h4 className="booking-heading">
                      When you visit the Eternal Rome City
                    </h4>
                    <h4 className="booking-heading">Duration: 1 day</h4>
                    <h4 className="booking-heading">Tickets: Adult= $28.00</h4>
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
                  <span>{totalPrice}</span>
                </div>
              </Col>
            </Row>
          </div>

          <div className="detailsCard mt-5">
            <h1 className="mb-5">Billing Details</h1>

            <div className="row">
              <div className="col-6">
             
                <CustomInput className="bookingForm"
                  type="text"
                  name="firtName"
                  placeholder="First Name *"
                  
                />
              </div>
              <div className="col-6">
                <CustomInput 
                  className="bookingForm"
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
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
                />
              </div>
              <div className="col-6">
                <CustomInput
                  className=""
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                />
              </div>
            </div>

            <CustomInput type="text" name="amount" placeholder="House Number" />
            <CustomInput type="text" name="amount" placeholder="Road Number" />
            <CustomInput type="text" name="amount" placeholder="City/Town" />
            <CustomInput type="text" name="amount" placeholder="Post Code" />

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
                        240409-091015147 X {quantity}
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
            <Button  variant="success">Place Order</Button>
          </div>
        </form>
      </Container>
    </Fragment>
  );
};

export default Booking;
