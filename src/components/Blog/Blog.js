import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <div className="m-5">
        <div className=" rounded p-4 shadow mb-2 mt-3">
          <h3>What is cors?</h3>
          <p>
            CORS is shorthand for Cross-Origin Resource Sharing. It is a
            mechanism to allow or restrict requested resources on a web server
            depend on where the HTTP request was initiated. This policy is used
            to secure a certain web server from access by other website or
            domain.
          </p>
        </div>
        <div className=" rounded p-4 shadow mb-2 mt-3">
          <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.
          </p>
          <p>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>
        <div className=" rounded p-4 shadow mb-2 mt-3">
          <h3>How does the private route work?</h3>
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
        <div className="rounded p-4 shadow mb-2 mt-3 ">
          <h3>What is Node? How does Node work?</h3>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
