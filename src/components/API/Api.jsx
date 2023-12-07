import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Api.css";
import {useNavigate} from "react-router-dom";
import NewForm from "../NewForm/NewForm";
const Api = () => {
  const [api, setApi] = useState([]);
  const navigate = useNavigate();
  const [editObj, setEditObj] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setApi(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEditNavigate = (item) => {
    navigate("/newform", {state: item});
  };

  return (
    <div className="api-main ">
      <table className="users-table">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {api.map((item) => {
          return (
            <tr>
              <td>{item.name} </td>
              <td>{item.phone}</td>
              <td>{item.address.city}</td>
              <td>
                <button onClick={() => handleEditNavigate(item)}>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Api;
