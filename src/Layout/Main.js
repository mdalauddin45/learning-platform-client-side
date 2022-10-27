import React from "react";
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
      <div className="app" data-theme={theme}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
