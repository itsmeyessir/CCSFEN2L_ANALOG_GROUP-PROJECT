import React, { useState } from "react";
import { IconButton } from "@mui/material";
import "./styles/DashboardHeader.css";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";

function DashboardHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="maindiv">
      <div className="welcome-message">
        <p className="user-greeting">Welcome, Userdsadadadadaad!</p>
        <p className="current-date">Today is January 2025</p>
      </div>

      <div className="search-bar">
        <input
          className="input-field"
          type="text"
          placeholder="Search product, supplier, order"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="searchbar-button">
          <FaMagnifyingGlass />
        </button>
      </div>

      <div className="notif-btn-holder">
        {" "}
        <button className="notification-btn">
          <FaBell />
        </button>
      </div>

      <div className="profile-section">
        <div className="profile-picture" />
        <div className="profile-texts">
          <p className="username-display">Sumting w.</p>
          <p className="user-position">Manager</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
