import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

const NewForm = (props) => {
  const location = useLocation();
  const [nfirstName, setNfirstName] = useState(
    location.state && location.state.name ? location.state.name : ""
  );
  const [nemailAddress, setNemailAddress] = useState(
    location.state && location.state.email ? location.state.email : ""
  );

  const navigate = useNavigate();

  console.log(location, "loc");
  const onClickSumbit = () => {
    let obj = {
      name: nfirstName,
      email: nemailAddress,
    };
    axios
      // Axios Post method
      .put(`https://jsonplaceholder.typicode.com/users/${location.state.id}`, {
        body: obj,
      })
      .then((res) => {
        console.log(res);
        navigate("/api");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickDelete = (props, id) => {
    let obj = {
      id: id,
      name: nfirstName,
      email: nemailAddress,
    };
    // Axios Delete method
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`, {body: obj})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Person Details</h1>
          <div className="loginsignup-fields">
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                value={nfirstName}
                onChange={(e) => {
                  setNfirstName(e.target.value);
                }}
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                value={nemailAddress}
                onChange={(e) => {
                  setNemailAddress(e.target.value);
                }}
                placeholder=" Email Address"
              />
            </div>
          </div>
          <button onClick={onClickSumbit}> Sumbit</button>
          <button onClick={onClickDelete}> Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
