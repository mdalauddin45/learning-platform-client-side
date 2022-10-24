import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LeftSideNav from "../components/Pages/Shared/LeftSideNav/LeftSideNav";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
