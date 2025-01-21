import React from "react";
import "./styles/ContentWrapper.css";
import Metrics from "./Metrics";

const ContentWrapper: React.FC = () => {
  return (
    <div className="content-wrapper">
      <div className="container">
        <h1>Reports Overview</h1>
        <Metrics />
      </div>
      <div className="req-container">
        <h1>Reports Request</h1>
        <button className="btn">Generate Report</button>
      </div>
    </div>
  );
};

export default ContentWrapper;
