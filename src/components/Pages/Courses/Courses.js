import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const singleCourse = useLoaderData();
  //console.log(singleCourse);
  const { description, image, Lecturer, title, category, id } = singleCourse;
  return (
    <Card className="shadow mt-5">
      <Card.Img variant="top" src={image} style={{ height: "400px" }} />
      <Card.Body>
        <Card.Title className="c-title">{title} </Card.Title>
        <Card.Text>Lecturer: {Lecturer}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <div className="buttons-boxs">
          <Link className="buttons-box" to={`/checkout/${id}`}>
            <span className="fs-5">check Out</span>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Courses;
