import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";  // Importing useAuth to check user status
import { useNavigate } from "react-router-dom";  // Importing useNavigate to redirect
import "./dashboard.css";
import DashboardHeader from "./components/DashboardHeader";
import GaugeChart from "react-gauge-chart";
import GraphRate from "./components/GraphRate";
import ProductionSchedule from "./components/ProductionSchedule";
import ProgressTable from "./components/ProgressTable";
import SummaryCard from "./components/SummaryCard";

import { FaBox, FaMapMarkerAlt, FaUser, FaClipboardList } from "react-icons/fa";
import GaugeRate from "./components/GaugeChart";

function Dashboard() {
  const { user } = useAuth(); // Get user from AuthContext
  const navigate = useNavigate(); // Hook for redirecting

  useEffect(() => {
    if (!user) {
      // Redirect to login page if no user is logged in
      navigate("/"); 
    }
  }, [user, navigate]);

  const inventoryItems = [
    {
      icon: FaBox,
      value: 868,
      label: "Quantity in Hand",
      iconBgColor: "#FFF4E5",
      iconColor: "#FFA500",
    },
    {
      icon: FaMapMarkerAlt,
      value: 200,
      label: "To be received",
      iconBgColor: "#EEF3FF",
      iconColor: "#5A78F0",
    },
  ];

  const logisticsItems = [
    {
      icon: FaUser,
      value: 31,
      label: "Number of Suppliers",
      iconBgColor: "#E6F7FF",
      iconColor: "#00A3FF",
    },
    {
      icon: FaClipboardList,
      value: 21,
      label: "Number of Categories",
      iconBgColor: "#F6F2FF",
      iconColor: "#A461D8",
    },
  ];

  return (
    <div className="main-div">
      <header>
        <DashboardHeader />
      </header>
      <div className="dashboard-contents">
        <div className="bigger-charts">
          <GraphRate />
          <ProgressTable />
        </div>
        <div className="smaller-charts">
          <div>
            <SummaryCard title="Inventory Summary" items={inventoryItems} />
          </div>

          <div>
            <SummaryCard title="Logistics Summary" items={logisticsItems} />
          </div>

          <GaugeRate />
          <ProductionSchedule />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
