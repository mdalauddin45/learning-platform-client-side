import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState(" ");
  const {
    signInWithGoogle,
    facebookSignIn,
    gitHunSignIn,
    createUser,
    updateName,
    verifyEmail,
  } = useContext(AuthContext);
  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // sign up email password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");

        // Update Name
        updateName(name, photoURL)
          .then(() => {
            toast.success("your name updated");

            //Email Verification

            verifyEmail()
              .then(() => {
                toast.success("Please check your email for verification link");
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // icon click to login part
  // 1. Google Sign in with pop up
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign up Succesfuly");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.error(error);
        toast.error("Sign up not Succesfuly!! Pleace try again");
      });
  };

  //2. Facebook Sign in with popup
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign up Succesfuly");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.error(error);
        toast.error("Sign up not Succesfuly!! Pleace try again");
      });
  };

  // 3.Github sign in with pop up

  const handleGithubSignIn = () => {
    gitHunSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign up Succesfuly");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.error(error);
        toast.error("Sign up not Succesfuly!! Pleace try again");
      });
  };
  return (
    <div className="d-flex m-5">
      <div className="d-none d-lg-block m-5">
        <img
          className="m-5"
          src="https://phitron.io/static/media/register.e58071de.png"
          alt=""
          width="600"
        />
      </div>
      <div className="border rounded p-5 mt-5 shadow col-md-6">
        <div>
          <h1 className="fs-1 text-center">SIGN UP</h1>
          <p className="text-center fs-5">
            <span className="text-success">Welcome!</span> Please confirm that
            you are visiting
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Text className="text-danger">{error}</Form.Text> <br />
            <div className="text-center">
              <button type="submit" className="premium-btn border-0 rounded">
                Sign up
              </button>
            </div>
          </Form>
          <div className="text-center">
            <p>Login with social accounts</p>
          </div>
          <div className="text-center">
            <button
              onClick={handleFacebookSignIn}
              className="me-2 border rounded"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
                alt=""
                width="30"
                height="30"
              />
            </button>
            <button
              onClick={handleGoogleSignin}
              className="me-2 border rounded"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                alt=""
                width="30"
                height="30"
              />
            </button>
            <button
              onClick={handleGithubSignIn}
              className="me-2 border rounded"
            >
              <Image
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
                width="30"
                height="30"
              />
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline text-gray-100"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
