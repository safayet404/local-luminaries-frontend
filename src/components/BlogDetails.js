import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tb1 from "../images/feature-thumb-0.jpg";
import tb2 from "../images/feature-thumb-1.jpg";
import tb3 from "../images/feature-thumb-2.jpg";
const BlogDetails = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <img src={tb1} className="section-image1" />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row className="">
              <img src={tb2} alt="Image" className="section-image2" />
            </Row>
            <Row className="">
              <img src={tb3} alt="Image" className="section-image2" />
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogDetails;
