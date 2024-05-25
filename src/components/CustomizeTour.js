import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
const CustomizeTour = () => {
  return (
    <Container className=" mt-5">
            <h2 className="activitiyHeader mb-4">Customize Your Tour</h2>
      <Row className="td-customize">
        <Col className="d-flex justify-content-center " lg={3} md={6} sm={12}>
        
        <select
              name="description"
              className="uniform-input"
              
            >
              <option value="">Select The Destination</option>
             
            </select>
        
        </Col>
       
        <Col className="d-flex justify-content-center  ">
          <CustomInput className="measurement" type="number" placeholder="How Many Person?"  />
         

        </Col>
       
        <Col className="d-flex justify-content-center">
          <CustomInput className="measurement" type="date" />
         

        </Col>
        
        <Col className="d-flex justify-content-center">
            
         <Button className="btn-warning customize-button"> Booking </Button>
         

        </Col>
      </Row>
    </Container>
  );
};

export default CustomizeTour;
