import React from "react";
import "./SideBar.css";
import {Route, Routes, useNavigate} from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="side-bar">
      <ul className="side-bar-menu">
        <li onClick={() => navigate("/formm")}>Form</li>
        <li onClick={() => navigate("/details")}>ViewDetails</li>
        <li onClick={() => navigate("/api")}>Users</li>
        <li onClick={() => navigate("/comments")}>Comments</li>
        <li onClick={() => navigate("/photos")}>Photos</li>
        <li onClick={() => navigate("/newform")}>NewForm</li>
        {/* <li onClick={() => navigate("/table")}>Table</li>
            <li onClick={() => navigate("/form")}>Form</li>
            <li onClick={() => navigate("/newform")}>NewForm</li>
            <li onClick={() => navigate("/input")}>Todo</li>
            <li onClick={() => navigate("/input")}>Todo-1</li>
            <li onClick={() => navigate("/products")}>Product Details</li>
            <li onClick={() => navigate("/employee")}>Employee Details</li>
            <li onClick={() => navigate("/viewdetails")}>View Emp Details</li> */}
      </ul>
    </div>
  );
};

export default SideBar;
