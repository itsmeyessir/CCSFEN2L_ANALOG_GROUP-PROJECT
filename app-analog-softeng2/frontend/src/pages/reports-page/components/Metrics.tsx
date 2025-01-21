import React from "react";
import "./styles/Metrics.css";

const Metrics: React.FC = () => {
  return (
    <div className="metrics">
      <div className="module">
        <div className="module-title">Production Rate (Module)</div>
        <div className="module-value">2500</div>
        <div className="module-description">
          <span className="inc-icon">↑</span>
          <span>50 more than last year</span>
        </div>
      </div>
      <div className="units">
        <div className="units-title">Production Rate (Units)</div>
        <div className="units-value">420</div>
      </div>
      <div className="produced">
        <div className="produced-title">Most Produced</div>
        <div className="produced-value">25</div>
      </div>
      <div className="workInProgress">
        <div className="workInProgress-title">Work in Progress</div>
        <div className="workInProgress-value">25</div>
        <div className="workInProgress-description">
          <span className="dec-icon">↓</span>
          <span>2% less than last year</span>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
