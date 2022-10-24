import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseSummary = ({ course }) => {
  const { image, title, price } = course;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummary;
