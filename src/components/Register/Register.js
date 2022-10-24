import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState(" ");
  const { signInWithGoogle, facebookSignIn, gitHunSignIn, createUser } =
    useContext(AuthContext);
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

    // user name and profile update
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUpdateProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleUpdateProfile = () => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
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
    <div className="border rounded p-3 mt-5 shadow">
      <h1 className="fs-1 text-center">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Text className="text-danger">{error}</Form.Text>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <div className="text-center">
        <p>Login with social accounts</p>
      </div>
      <div className="text-center">
        <button onClick={handleFacebookSignIn} className="me-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
            alt=""
            width="30"
            height="30"
          />
        </button>
        <button onClick={handleGoogleSignin} className="me-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            alt=""
            width="30"
            height="30"
          />
        </button>
        <button onClick={handleGithubSignIn} className="me-2">
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
  );
};

export default Register;
