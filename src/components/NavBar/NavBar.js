import React, { useContext } from "react";
import "./NaBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = ({ switchTheme }) => {
  const [dark, setDark] = useState(false);
  const { user, logout } = useContext(AuthContext);
  // console.log(switchTheme);
  // console.log(user);

  //navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //log out
  const handleLogOut = () => {
    logout()
      .then(() => {
        navigate(from, { replace: true });
        toast.warning("log out successfuly");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="nab shadow">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Link to="/" className="ms-2 me-2">
              <Image
                src="https://demo.auburnforest.com/html/bootcamp/bootcamp/images/main-slider/content-image.png"
                alt=""
                height="50px"
              />
            </Link>
            <Navbar.Brand to="/" className="fw-bold fs-1">
              <span className="text-white"> BGC</span>
              <span className="tech"> Tech</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className="text-danger"> BGC</span>
                  <span className="text-success"> Tech</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 allNav">
                  <Link className="me-4" to="/courses">
                    Courses
                  </Link>
                  <Link className="me-4" to="/faq">
                    FAQ
                  </Link>
                  <Link className="me-4" to="/blog">
                    Blog
                  </Link>
                  {user?.photoURL ? (
                    <div className="d-lg-flex">
                      <div>
                        <Link to="/profile" title={user.displayName}>
                          <Image
                            className="m-2"
                            style={{ height: "40px" }}
                            roundedCircle
                            src={user?.photoURL}
                          ></Image>
                        </Link>
                      </div>
                      <div className="">
                        <button
                          className="premium-btn border-none logOut"
                          onClick={handleLogOut}
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">Login</Link>
                    </>
                  )}
                </Nav>
                <div>
                  {dark ? (
                    <span className="theme-toggle" onClick={switchTheme}>
                      <FontAwesomeIcon
                        onClick={() => setDark(!dark)}
                        icon={faToggleOff}
                      />
                    </span>
                  ) : (
                    <span className="theme-toggle" onClick={switchTheme}>
                      <FontAwesomeIcon
                        onClick={() => setDark(!dark)}
                        icon={faToggleOn}
                      />
                    </span>
                  )}
                </div>

                <div className="d-lg-none">
                  <LeftSideNav></LeftSideNav>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
