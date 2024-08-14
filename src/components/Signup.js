
import { Button, Col, Container, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/base_url";
import toast from "react-hot-toast";

let signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Last Name is required"),
  mobile: Yup.string().required("Phone Number is required"),
  password: Yup.string().required("Password is required"),

});

const Signup = () => {

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      mobile : "",
      password: "",
      
      
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
      try{
        const response = await axios.post(`${base_url}user/register`,values)
        if(response.status === 200)
          {
           
            toast.success("Registration Successfull!")
          }

      }catch(error)
      {
        console.log("Error submitting booking")
      }
    

      formik.resetForm()
      
    },
  });
  return (
  
     
      <Container className="signup-wrapper py-5 home-wrapper-2 background-color" fluid>
        <Row>
          <Col>
            <div className="signup-card">
              <h3 className="text-center">Create Account</h3>
              <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-30">
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control mt-2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}

                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
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
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button type="submit" className="buttonCSS border-0">Create</button>
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