import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          <Image
            className="border rounded"
            src="https://elearningindustry.com/wp-content/uploads/2015/05/Online-Learning-Teaching-Techniques.jpg"
            width="30"
            height="30"
          />
        </Navbar.Brand>
        <Navbar.Brand to="/">BGC Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="#link">Link</Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
