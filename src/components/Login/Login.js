import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import { Container } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState(" ");
  const [modalShow, setModalShow] = useState(false);
  const { signin, signInWithGoogle, facebookSignIn, gitHunSignIn } =
    useContext(AuthContext);
  // console.log(setError);

  //navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Log in email password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
        toast.success("log in succesfully");
      })
      .catch((error) => {
        toast.error(error);
        toast.error("wrong-password");
        setError("wrong-password");
      });
  };

  // Google Sign in with pop up
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

  // Facebook Sign in with popup
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

  // Github sign in with pop up

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
    <Container>
      <div className="d-flex ms-4">
        <div className="d-none d-lg-block me-5">
          <img
            className="m-5 "
            src="https://phitron.io/static/media/login.60b00691.png"
            alt=""
            width="500"
          />
        </div>
        <div className="row d-flex justify-content-center w-100">
          <div className="border rounded p-3 mt-5 shadow ">
            <h1 className="fs-1 text-center">SIGN IN</h1>
            <Form onSubmit={handleSubmit}>
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
              <p className="text-danger">{error}</p>
              <div className="d-flex justify-content-between">
                <div></div>
                <div></div>
                <div>
                  <button
                    className="premium-btn border-0 rounded"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setModalShow(true)}
                    className="btn btn-link"
                  >
                    Forgot password?
                  </button>
                </div>
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
                to="/register"
                className="underline text-gray-100 "
              >
                Sign up
              </Link>
            </p>
          </div>
          <ForgetPassword
            show={modalShow}
            onHide={() => setModalShow(false)}
          ></ForgetPassword>
        </div>
      </div>
    </Container>
  );
};

export default Login;
