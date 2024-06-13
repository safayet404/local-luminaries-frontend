import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tb1 from "../images/feature-thumb-0.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/base_url";

const BlogDetails = () => {

  const [singleBlog,setSingleBlog] = useState([])

  const splitTitle = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + " ...";
  };

  const location = useLocation()
  const blogId = location.pathname.split("/")[2]
  useEffect(()=>{
    axios.get(`${base_url}blog/single-blog/${blogId}`)
    .then((response)=>{
      setSingleBlog(response.data)
    })
    .catch((error)=>{
      console.error("there was an error !",error)
    })

  },[blogId])

  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          <Col lg={12} md={12} sm={12} className="d-flex justify-content-center mb-4">
            <img src={singleBlog.image} className="section-image1" />
          </Col>
          
        </Row>

        <Row>
          <Col>
            <p   dangerouslySetInnerHTML={{
                      __html: singleBlog.description
                    }}>
             
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogDetails;
