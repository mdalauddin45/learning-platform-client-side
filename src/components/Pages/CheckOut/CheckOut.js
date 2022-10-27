import React from "react";
import "./CheckOut.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const checkData = useLoaderData();
  // console.log(checkData);
  const { image, Lecturer, title } = checkData;
  const handleCheckOut = () => {
    toast.success("Check Out Successfully");
  };
  return (
    <section className="h-100 h-custom ">
      <MDBContainer className="py-5 h-100">
        <p className="text-center fs-1 fw-bold">
          <span className="text-success">Welcome!</span> <span>Checkout</span>
        </p>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Course Checkout
                  </th>
                  <th scope="col">Format</th>
                  <th scope="col">Lecturer</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={image}
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">{title} </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      Digital
                    </p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        {Lecturer}
                      </p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      ${Lecturer}0
                    </p>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCard
            className="shadow-2-strong mb-5 mb-lg-0"
            style={{ borderRadius: "16px" }}
          >
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon
                            fab
                            icon="cc-mastercard fa-2x text-dark pe-2"
                          />
                          Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                          Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="6" lg="4" xl="6">
                  <MDBRow>
                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Name on card"
                        placeholder={user.displayName}
                        size="lg"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Expiration"
                        placeholder="MM/YY"
                        size="lg"
                        maxLength={7}
                        minLength={7}
                      />
                    </MDBCol>

                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Card Number"
                        placeholder="1111 2222 3333 4444"
                        size="lg"
                        minLength="19"
                        maxLength="19"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="lg"
                        minLength="3"
                        maxLength="3"
                        type="password"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4" xl="3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">${Lecturer}0</p>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-0">tax</p>
                    <p className="mb-0">$0.00</p>
                  </div>

                  <hr className="my-4" />

                  <div
                    className="d-flex justify-content-between mb-4"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">${Lecturer}0</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <Link onClick={handleCheckOut} to="/">
                      <span className="buttons-box">Checkout </span>
                    </Link>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CheckOut;
