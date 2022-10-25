import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CourseSummary.css";

const CourseSummary = ({ course }) => {
  const { image, title, Lecturer, id, Hours } = course;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="shadow">
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title className="fw-bold c-title">{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <p className="text-secondary">Lecturer: {Lecturer}</p>
            <p className="text-success">Hours: {Hours}</p>
          </div>
          <button className="btn">
            <Link to={`/courses/${id}`}>Get premium access</Link>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummary;
