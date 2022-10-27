import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChevronRight,
  faEarthAmericas,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // console.log(courses);
  return (
    <Container>
      <section>
        <div className=" d-lg-flex d-block ">
          <div>
            <h1 className="text-center mt-5 fw-bold home-text">
              Learn <span className="homeone">Programming Language</span> <br />{" "}
              And
              <span className="homeone">
                {" "}
                Computer Fundamentals
              </span> <br /> Grow Your Knowledge
            </h1>
            <p className="text-center">
              Computer Science and Engineering (CSE) is an academic program at
              many universities <br /> which comprises scientific and
              engineering aspects of computing.
            </p>
            <div className="buttons-boxs text-center m-4">
              <Link to="/" className="buttons-box">
                Get Stared <FontAwesomeIcon icon={faChevronRight} />
              </Link>
              <Link to="/courses" className="buttons-box">
                All Courses <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
          <div className="image-section m-5">
            <img
              src="https://demo.auburnforest.com/html/bootcamp/bootcamp/images/main-slider/content-image-2.png"
              alt=""
              width="400"
            />
          </div>
        </div>
        <div className=" d-lg-flex d-block ">
          <div className="study">
            <img
              src="https://demo.auburnforest.com/html/bootcamp/bootcamp/images/resource/education.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="fw-bold">
              Our <span className="homeone">education</span> system works for
              you
            </h1>
            <p className="text-center">
              Computer Science and Engineering (CSE) is an academic program at
              many universities <br /> which comprises scientific and
              engineering aspects of computing.
            </p>

            <div className="buttons-boxs text-center m-4">
              <Link to="/" className="buttons-box">
                Learn More <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center m-5 fw-bold ">
            <h1>Our achievements</h1>
          </div>
          <div className="d-lg-flex text-center ">
            <div className="content shadow rounded me-5 mt-3 ">
              <span className="student-card">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              <h1 className="fw-bold title-tex">Total Course</h1>
              <span className="fifty">50+</span>
            </div>
            <div className="content shadow rounded me-5 mt-3 mb-5">
              <span className="student-card">
                <FontAwesomeIcon icon={faUserGraduate} />
              </span>
              <h1 className="fw-bold title-tex">Total Student</h1>
              <span className="fifty">55K+</span>
            </div>
            <div className="content shadow rounded me-5 mt-3">
              <span className="student-card">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </span>
              <h1 className="fw-bold title-tex">Global Position</h1>
              <span className="fifty">116</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
