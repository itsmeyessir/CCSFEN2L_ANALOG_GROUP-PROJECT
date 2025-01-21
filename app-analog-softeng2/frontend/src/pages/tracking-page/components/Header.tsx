import React from "react";
import "./styles/Header.css";
import profileImage from "./assets/profile.jpg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Tracking</h1>
      <input type="text" placeholder="Search product, supplier, order" />
      <div className="profile">
        <span>Sumting W.</span>
        <img src={profileImage} />
      </div>
    </header>
  );
};

export default Header;
