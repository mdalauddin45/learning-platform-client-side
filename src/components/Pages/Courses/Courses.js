import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const singleCourse = useLoaderData();
  //console.log(singleCourse);
  const { description, image, Lecturer, title, category, id } = singleCourse;
  return (
    <Card className="shadow mt-5">
      <Card.Img variant="top" src={image} style={{ height: "400px" }} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>Lecturer: {Lecturer}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Link to="/checkout to={`/checkout/${id}`">
          <Button variant="primary">check Out</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Courses;
