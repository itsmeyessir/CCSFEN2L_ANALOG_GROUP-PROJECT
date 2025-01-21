import React from "react";
import "./styles/Map.css";
import mapImage from "./assets/map.png";

const Map: React.FC = () => {
  return (
    <div className="map">
      <img src={mapImage} />
    </div>
  );
};

export default Map;
