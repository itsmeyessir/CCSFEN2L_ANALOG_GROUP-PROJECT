import React, { useState } from "react";
import GaugeChart from "react-gauge-chart";
import "./styles/GaugeRate.css";

const GaugeRate: React.FC = () => {
  const [value, setValue] = useState(0.5); // Default value (50%)

  // Randomize the gauge value
  const randomizeValue = () => {
    const randomValue = Math.random(); // Generate a random value between 0 and 1
    setValue(randomValue);
  };

  return (
    <div className="gauge-chart-container">
      <h2>Production Rate (Units)</h2>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        arcWidth={0.3}
        percent={value}
        textColor="#000"
        formatTextValue={(value) => `${Math.round(value * 1000)} units`}
      />
      <button className="randomize-button" onClick={randomizeValue}>
        Randomize Value
      </button>
    </div>
  );
};

export default GaugeRate;
