import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

function Header() {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  //log out
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.warning("log out successfuly");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow mb-2">
      <Container className="nav">
        <Link to="/">
          <Image
            className="border rounded me-2 ms-4"
            src="https://elearningindustry.com/wp-content/uploads/2015/05/Online-Learning-Teaching-Techniques.jpg"
            width="30"
            height="30"
          />
        </Link>
        <Navbar.Brand to="/">BGC Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ms-4">
            <Link className="me-4" to="/courses">
              Courses
            </Link>
            <Link className="me-4" to="/faq">
              FAQ
            </Link>
            <Link className="me-4" to="/blog">
              Blog
            </Link>
          </Nav>
          {user?.photoURL ? (
            <div className="ms-4 d-flex">
              <Link title={user.displayName}>
                <Image
                  className="mt-2 mb-2 me-2"
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              </Link>
              <br />
              <Button variant="warning" onClick={handleLogOut}>
                Log out
              </Button>
            </div>
          ) : (
            <>
              <Button className="ms-4 mt-2 mb-2" variant="primary">
                <Link className="text-white" to="/login">
                  Login
                </Link>
              </Button>
            </>
          )}

          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
