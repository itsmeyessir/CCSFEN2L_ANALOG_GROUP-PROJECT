import React from "react";
import "./Logistics.css";
import Header from "./components/Header";
import LogisticsOverview from "./components/LogisticsOverview";
import LogisticsRequest from "./components/LogisticsRequest";
import ViewRequest from "./components/ViewRequest";

const LogisticsPage: React.FC = () => {
  return (
    <div className="workspace-wrapper">
      <Header />
      <LogisticsOverview />
      <LogisticsRequest />
      <ViewRequest />
    </div>
  );
};

export default LogisticsPage;
