import React, {useContext} from "react";
import {FormContext} from "../Context/FormContext";
import "./CSS/FromStyle.css";

const Formm = () => {
  const detail = useContext(FormContext);
  console.log(detail, "checkkk");
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Person Details</h1>
        <div className="loginsignup-fields">
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              value={detail.firstName}
              onChange={(e) => {
                detail.setFirstName(e.target.value);
              }}
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              value={detail.lastName}
              onChange={(e) => {
                detail.setLastName(e.target.value);
              }}
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              value={detail.emailAddress}
              onChange={(e) => {
                detail.setEmailAddress(e.target.value);
              }}
              placeholder=" Email Address"
            />
          </div>
          <div>
            <label htmlFor="">Phone No</label>
            <input
              type="number"
              value={detail.phoneNumber}
              onChange={(e) => {
                detail.setPhoneNumber(e.target.value);
              }}
              placeholder="Phone No"
            />
          </div>
        </div>
        <button
          onClick={
            detail.formUnique ? detail.updateEdit : detail.clickPersonValue
          }
        >
          {detail.formUnique ? "update" : "sumbit"}
        </button>
      </div>
    </div>
  );
};

export default Formm;
