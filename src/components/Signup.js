
import { Button, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
const Signup = () => {
  return (
  
     
      <Container className="signup-wrapper py-5 home-wrapper-2 background-color" fluid>
        <Row>
          <Col>
            <div className="signup-card">
              <h3 className="text-center">Create Account</h3>
              <form action="" className="d-flex flex-column gap-30">
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    className="form-control mt-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Mobile"
                    placeholder="Mobile"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="Email"
                    name="email"
                    placeholder="E-mail"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <Link className="buttonCSS border-0">Create</Link>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
   
  );
};

export default Signup;