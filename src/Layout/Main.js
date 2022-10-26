import React from "react";

import LeftSideNav from "../components/Pages/Shared/LeftSideNav/LeftSideNav";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import useLocalStorage from "use-local-storage";

const Main = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div>
      <NavBar switchTheme={switchTheme}></NavBar>
      <Container className="app" data-theme={theme}>
        <Row>
          <Col lg="2" className="d-none d-lg-block ">
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
