import { Container, Row, Col, Button } from "react-bootstrap";
import bgt1 from "../images/blogs-thumb-1.jpg";
import bgt2 from "../images/blogs-thumb-2.jpg";
import bgt3 from "../images/blogs-thumb-3.jpg";
import bgt4 from "../images/blogs-thumb-4.jpg";
import { Fragment } from "react";
const Blog = () => {
  return (
    <Fragment>
      <Container>
        <h1 className="destHeading">Our Blogs</h1>
        <p className="destSubHeading text-center">
          We keep you informed of the latest news from the vacation world,
          subscribe to our blog and find out everything.
        </p>
        <Row>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-around mt-3">
            <div className="blogImage">
              <img className="big-blog-image" alt="blog-thumb" src={bgt1}></img>
              <div className="blogOverlay">
                <p>JUN</p>
                <p>23</p>
              </div>
            </div>
            <div>
              <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
              <p className="blogDesc ml-4">
                We love to see you live an exciting, unique and unforgettable
                experience.
              </p>
              <Button variant="warning" className="blogBtn">
                Read More{" "}
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-around mt-3">
            <div className="blogImage">
              <img className="big-blog-image" alt="blog-thumb" src={bgt2}></img>
              <div className="blogOverlay">
                <p>JUN</p>
                <p>23</p>
              </div>
            </div>
            <div>
              <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
              <p className="blogDesc ml-4">
                We love to see you live an exciting, unique and unforgettable
                experience.
              </p>
              <Button variant="warning" className="blogBtn">
                Read More{" "}
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-around mt-3">
            <div className="blogImage">
              <img className="big-blog-image" alt="blog-thumb" src={bgt3}></img>
              <div className="blogOverlay">
                <p>JUN</p>
                <p>23</p>
              </div>
            </div>
            <div>
              <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
              <p className="blogDesc ml-4">
                We love to see you live an exciting, unique and unforgettable
                experience.
              </p>
              <Button variant="warning" className="blogBtn">
                Read More{" "}
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-around mt-3">
            <div className="blogImage">
              <img className="big-blog-image" alt="blog-thumb" src={bgt4}></img>
              <div className="blogOverlay">
                <p>JUN</p>
                <p>23</p>
              </div>
            </div>
            <div>
              <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
              <p className="blogDesc ml-4">
                We love to see you live an exciting, unique and unforgettable
                experience.
              </p>
              <Button variant="warning" className="blogBtn">
                Read More{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Blog;
