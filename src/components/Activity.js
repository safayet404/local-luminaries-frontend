import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Activity = ({actData}) => {
  return (
    <Fragment>
      <Container>
        <h2 className="activitiyHeader mb-4">Activities</h2>
        <Row  className="">
        {actData.map((data, index) => (
          <Col key={index}  lg={3} md={6} sm={12}>
            <div key={index} className="ActCard">
            <img
              className="cardImage"
              alt={data.title}
              src={data.image}
            />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          </Col>
        ))}
         
        </Row>
      </Container>

  
    </Fragment>
  )
}

export default Activity