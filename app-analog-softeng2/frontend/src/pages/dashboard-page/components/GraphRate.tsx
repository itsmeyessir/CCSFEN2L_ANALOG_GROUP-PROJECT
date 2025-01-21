import React, { useState } from "react";
import "./styles/GraphRate.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  month: string;
  camera: number;
  sdCard: number;
  speaker: number;
}

const initialData: DataPoint[] = [
  { month: "Jan", camera: 900, sdCard: 850, speaker: 800 },
  { month: "Feb", camera: 1250, sdCard: 800, speaker: 950 },
  { month: "Mar", camera: 750, sdCard: 900, speaker: 850 },
  { month: "Apr", camera: 500, sdCard: 650, speaker: 400 },
  { month: "May", camera: 850, sdCard: 900, speaker: 750 },
  { month: "Jun", camera: 1200, sdCard: 950, speaker: 900 },
  { month: "Jul", camera: 1100, sdCard: 850, speaker: 950 },
  { month: "Aug", camera: 950, sdCard: 850, speaker: 850 },
  { month: "Sep", camera: 1000, sdCard: 850, speaker: 850 },
  { month: "Oct", camera: 800, sdCard: 900, speaker: 750 },
  { month: "Nov", camera: 750, sdCard: 700, speaker: 600 },
  { month: "Dec", camera: 1000, sdCard: 950, speaker: 800 },
];

const GraphRate: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>(initialData);
  const [timeframe, setTimeframe] = useState("Monthly");
  const [order, setOrder] = useState("Largest");

  const handleTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeframe(e.target.value);
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
    const sortedData = [...data].sort((a, b) => {
      const totalA = a.camera + a.sdCard + a.speaker;
      const totalB = b.camera + b.sdCard + b.speaker;
      return newOrder === "Largest" ? totalB - totalA : totalA - totalB;
    });
    setData(sortedData);
  };

  return (
    <div className="production-chart">
      <div className="filter-controls">
        <p className="table-label">Production Rate (Modules)</p>
        <div>
          <select
            value={order}
            onChange={handleOrderChange}
            className="filter-dropdown"
          >
            <option value="Largest">Largest</option>
            <option value="Smallest">Smallest</option>
          </select>
        </div>
        <div>
          <select
            value={timeframe}
            onChange={handleTimeframeChange}
            className="filter-dropdown"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="camera" fill="#8884d8" name="Camera" />
          <Bar dataKey="sdCard" fill="#82ca9d" name="SD Card" />
          <Bar dataKey="speaker" fill="#ffc658" name="Speaker" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphRate;
