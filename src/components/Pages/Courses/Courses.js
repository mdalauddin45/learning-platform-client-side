import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse);
  const { description, image, price, title, category } = singleCourse;
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={image} style={{ height: "400px" }} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>price: {price}$</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Courses;
