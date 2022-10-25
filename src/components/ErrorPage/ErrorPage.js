import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="fs-1">404</h1>
      <h1>Page not found</h1>
      <p>
        The Page you are looking for doesn't exist or an other error eccured.Go{" "}
        <br />
        back, or ahead over to example.com to choose a new direction.
      </p>

      <Link to="/">
        <Button>Go back to the homepage</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
