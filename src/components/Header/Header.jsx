import React from "react";
import "./Header.css";
import { Route, Routes, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="nav-bar">
        <div className="logo">
          <h3>Ram & Co</h3>
        </div>
        <div>
          <input className="search-box" placeholder="Search" type="text" />
        </div>
        <div className="avator">R</div>
      </div>
    </div>
  );
};

export default Header;
