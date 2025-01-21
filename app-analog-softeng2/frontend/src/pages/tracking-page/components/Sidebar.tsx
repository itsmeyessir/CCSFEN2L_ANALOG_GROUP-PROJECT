import React from "react";
import "./styles/Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">Sumting</div>
      <nav>
        <ul>
          <li className="active">Tracking</li>
          <li>Production Data</li>
          <li>Logistics</li>
          <li>Reports</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
