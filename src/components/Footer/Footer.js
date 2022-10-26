import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center text-lg-start  text-muted mt-4 foooter">
      <div className="navimg">
        <h1>Ready to get started?</h1>
        <p>
          Replenish him third creature and meat blessed void a fruit gathered{" "}
          <br />
          you’re, they’re two waters own morning gathered greater shall had
          behold had seed.
        </p>
        <div className="buttons-boxs">
          <Link to="/" className="buttons-box">
            Get Stared{" "}
          </Link>
          <Link to="/" className="buttons-box">
            All Courses{" "}
          </Link>
        </div>
      </div>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        <div>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      <section className="fotter">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 fs-3">
                <i className="fas fa-gem me-3 ">
                  <img
                    src="https://demo.auburnforest.com/html/bootcamp/bootcamp/images/main-slider/content-image.png"
                    alt=""
                    height="50px"
                  />
                </i>
                <span className="text-black"> BGC</span>
                <span className="tech"> Tech</span>
              </h6>
              <p>
                Welcome to BGC Tech, a dynamic online platfrom for higher
                education.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">subjects</h6>
              <p>
                <Link to="#!" className="text-reset">
                  physics
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Math
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  C program
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Java
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Addmission
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Bangladesh,chittagong
                ,chandanish
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                mdalauddin8948@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
