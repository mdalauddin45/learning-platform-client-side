import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseSummary = ({ course }) => {
  const { category, description, image, title, price } = course;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseSummary;
