import React from "react";
import { Link } from "react-router-dom";
import "./Errorpage.css";

const ErrorPage = () => {
  return (
    <div className="text-center mt-5">
      <img
        className="w-100"
        src="https://demo.auburnforest.com/html/bootcamp/bootcamp/images/resource/error.png"
        alt=""
      />{" "}
      <br />
      <div className="e-btn">
        <Link to="/">
          <span> Go back to the homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
