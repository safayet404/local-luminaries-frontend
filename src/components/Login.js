import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="login-wrapper py-5 home-wrapper-2 background-color" fluid={true}>
      <Row>
        <Col>
          <div className="login-card">
            <h3 className="text-center">Login</h3>
            <form action="" className="d-flex flex-column gap-30">
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="form-control mt-2"
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
                <Link className="forget-password-text" to="/forget-password">Forget Password?</Link>
                <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                 
                  <Link to="/signup" className="buttonCSS border-0 ">
                    Log In
                  </Link>
                  <Link to="/signup" className="buttonCSS border-0 ">
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
