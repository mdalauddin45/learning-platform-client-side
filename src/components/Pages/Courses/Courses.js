import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import {
  faChevronRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ref = React.createRef();

const Courses = () => {
  const singleCourse = useLoaderData();
  //console.log(singleCourse);
  const { description, image, Lecturer, title, category, id } = singleCourse;
  return (
    <Container>
      <Row>
        <Col lg="2" className="d-none d-lg-block ">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col>
          <div className="Post " ref={ref}>
            <Card className="shadow mt-4 ">
              <Card.Img variant="top" src={image} style={{ height: "400px" }} />
              <Card.Body className="text-secondary">
                <Card.Title className="c-title">{title} </Card.Title>
                <Card.Text>Lecturer: {Lecturer}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <div className="d-lg-flex d-md-flex  justify-content-between mb-4">
                  {" "}
                  <div className="buttons-boxs">
                    <Link className="premium-btn" to={`/checkout/${id}`}>
                      <span className="fs-7">
                        Get Premium Access{" "}
                        <FontAwesomeIcon icon={faChevronRight} />{" "}
                      </span>
                    </Link>
                  </div>
                  <div className="buttons-boxs">
                    <Pdf targetRef={ref} filename="BGC-Tech-Document.pdf">
                      {({ toPdf }) => (
                        <button
                          onClick={toPdf}
                          className="premium-btn border-0 fs-7"
                        >
                          Download Pdf
                          <FontAwesomeIcon icon={faFileArrowDown} />
                        </button>
                      )}
                    </Pdf>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
