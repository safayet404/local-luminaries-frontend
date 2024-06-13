import { Container, Row, Col, Button } from "react-bootstrap";
import bgt1 from "../images/blogs-thumb-1.jpg";
import { HashLink } from "react-router-hash-link";

import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../utils/base_url";
const Blog = () => {
  const [blogItem, setBlogItem] = useState([]);

  const splitTitle = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + " ...";
  };

  useEffect(() => {
    axios
      .get(`${base_url}blog/all-blog`)
      .then((response) => {
        setBlogItem(response.data);
      })
      .catch((error) => {
        console.error("there was an error !", error);
      });
  }, []);
  console.log("Data Getting from Blog", blogItem);

  return (
    <Fragment>
      <Container>
        <h1 className="destHeading">Our Blogs</h1>
        <p className="destSubHeading text-center">
          We keep you informed of the latest news from the vacation world,
          subscribe to our blog and find out everything.
        </p>
        <Row>
          {blogItem.map((item, index) => {
            const desc = splitTitle(item.description, 1);
            return (
              <Col lg={6} md={12} sm={12} className="d-flex mt-3">
                <div className="blogImage">
                  <img
                    className="big-blog-image"
                    alt="blog-thumb"
                    src={item.image}
                  ></img>
                </div>
                <div>
                  <h3 className="blogTitle ml-4">
                    {" "}
                    {splitTitle(item.title, 35)}
                  </h3>
                  <p
                    className="blogDesc ml-4"
                    dangerouslySetInnerHTML={{
                      __html: splitTitle(item.description, 35),
                    }}
                  ></p>
                  <HashLink
                    smooth
                    to={`/blog-details/${item._id}#top`}
                    className="blog-btn"
                  >
                    <Button className="btn-warning mb-2 blogBtn">
                      Details
                    </Button>
                  </HashLink>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Blog;
