import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { base_url } from "../utils/base_url";
import toast from "react-hot-toast";
import Profile from "./Profile";

let loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${base_url}user/login-user`, values);
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          toast.success("Login Successfull!");
          navigate("/");
          window.scrollTo(0, 0);
        }
      } catch (error) {
        toast.error("Something Went Wrong !");
        console.log("Error submitting booking");
      }

      formik.resetForm();
    },
  });
  return (
    <Container
      className="login-wrapper py-5 home-wrapper-2 background-color"
      fluid={true}
    >
      <Row>
        <Col>
          <div className="login-card">
            <h3 className="text-center">Login</h3>
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex flex-column gap-30"
            >
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="form-control mt-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="error">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <Link className="forget-password-text" to="/forget-password">
                  Forget Password?
                </Link>
                <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                  <button type="submit" className="buttonCSS border-0 ">
                    Log In
                  </button>
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
