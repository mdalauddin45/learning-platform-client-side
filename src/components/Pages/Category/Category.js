import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../Shared/CourseSummary/CourseSummary";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Category = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <Container>
      <Row>
        <Col lg="2" className="d-none d-lg-block ">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-4">
            {courses.map((course) => (
              <CourseSummary key={course.id} course={course}></CourseSummary>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
