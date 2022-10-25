import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/UserContext";
import { Image } from "react-bootstrap";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="col-md-6 text-center me-auto mt-5 shadow rounded">
      <h1>User profile</h1>
      <div className="card-body text-center  mt-4 mb-4 rounded p-4 ">
        <div>
          <Image
            src={user?.photoURL ? user.photoURL : <FaUserCircle></FaUserCircle>}
            referrerPolicy="no-referrer"
            alt=""
            className="rounded-circle shadow-1 mb-3"
          />
        </div>
        <div>
          <h2 className="mb-1">{user.displayName}</h2>
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
          <p> ID: {user?.uid}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
