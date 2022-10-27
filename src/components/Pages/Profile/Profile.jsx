import React, { useContext } from "react";
import { FaGithubSquare, FaTwitterSquare, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/UserContext";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <div className="col-md-6 text-center  m-5 shadow rounded card-hover">
        <h1>User profile</h1>
        <div className="card-body text-center  mt-4 mb-4 rounded p-4 ">
          <div>
            <Image
              src={
                user?.photoURL ? user.photoURL : <FaUserCircle></FaUserCircle>
              }
              referrerPolicy="no-referrer"
              alt=""
              width="150"
              className="rounded-circle shadow-1 mb-3"
            />
          </div>
          <div>
            <h2 className="mb-1">{user?.displayName}</h2>
            <p>
              Email Status:
              {user?.emailVerified ? (
                <span
                  className="text-success

"
                >
                  Verified
                </span>
              ) : (
                <span
                  className="text-danger

"
                >
                  Not Verified
                </span>
              )}
            </p>
            <div className="fs-1">
              <Link className="text-decoration-none text-black ">
                <FaFacebookSquare />
              </Link>
              <Link className="text-black">
                <FaTwitterSquare />
              </Link>
              <Link className="text-black">
                <FaGithubSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
