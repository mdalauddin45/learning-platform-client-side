import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import Card from "react-bootstrap/Card";

const ref = React.createRef();

const Courses = () => {
  const singleCourse = useLoaderData();
  //console.log(singleCourse);
  const { description, image, Lecturer, title, category, id } = singleCourse;
  return (
    <>
      <div className="Post" ref={ref}>
        <Card className="shadow mt-5">
          <Card.Img variant="top" src={image} style={{ height: "400px" }} />
          <Card.Body>
            <Card.Title className="c-title">{title} </Card.Title>
            <Card.Text>Lecturer: {Lecturer}</Card.Text>
            <Card.Text>{category}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between">
              {" "}
              <div className="buttons-boxs">
                <Link className="buttons-box" to={`/checkout/${id}`}>
                  <span className="fs-5">check Out</span>
                </Link>
              </div>
              <div className="buttons-boxs">
                <Pdf targetRef={ref} filename="BGC-Tech-Document.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="buttons-box border-0">
                      Download Pdf
                    </button>
                  )}
                </Pdf>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Courses;
