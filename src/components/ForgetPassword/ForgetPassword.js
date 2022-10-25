import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const ForgetPassword = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const { resetPassword } = useContext(AuthContext);

  const handleForgetPass = () => {
    resetPassword(userEmail)
      .then(() => {
        props.onHide();
        toast.success("Reset your password !! , checked your mail");
      })
      .catch((error) => {
        toast.warning(error);
      });
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger m-3">Forget password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onBlur={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="form-control p-2 mt-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleForgetPass}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgetPassword;
