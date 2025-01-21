import React from "react";
import "./styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="page-title">
        <span className="title">Reports</span>
        <span className="description">Generate and view reports</span>
      </div>
      <div className="search-bar">
        <i className="bx bx-search"></i>
        <input type="search" placeholder="Search product, supplier, order" />
      </div>
      <div className="header-action">
        <i className="bx bxs-bell"></i>
      </div>
      <div className="profile">
        <div className="user-image" />
        <div className="userName">
          <span className="name">Sumting W.</span>
          <span className="role">Manager</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
