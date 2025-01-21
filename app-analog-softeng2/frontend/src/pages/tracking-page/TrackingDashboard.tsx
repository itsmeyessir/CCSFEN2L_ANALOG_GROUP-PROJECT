import React from "react";
import "./TrackingDashboard.css"; // Import the CSS for styling
import Header from "./components/Header.js";
import Map from "./components/Map.js";
import DeliveryList from "./components/DeliveryList.js";

const TrackingDashboard: React.FC = () => {
  return (
    <div className="tracking-dashboard">
      <div className="main-content">
        <Header />
        <div className="content">
          <DeliveryList />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default TrackingDashboard;
