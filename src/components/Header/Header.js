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

function Header() {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

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
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Image
            className="border rounded"
            src="https://elearningindustry.com/wp-content/uploads/2015/05/Online-Learning-Teaching-Techniques.jpg"
            width="30"
            height="30"
          />
        </Link>
        <Navbar.Brand to="/">BGC Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
          </Nav>
          <button onClick={handleLogOut}>Log out</button>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
