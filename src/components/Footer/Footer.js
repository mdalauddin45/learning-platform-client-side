import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center text-lg-start bg-light text-muted mt-4">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
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

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>BGC Tech
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
