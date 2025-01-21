import React from "react";
import "./styles/DeliveryList.css";

const deliveries = [
  {
    shipmentNumber: "EV-2017002346",
    product: "Camera Modules",
    locations: ["2972 Westheimer", "8502 Preston"],
    client: "Robs Gelo Siaton",
  },
  {
    shipmentNumber: "EV-2017003323",
    product: "SD Card Modules",
    locations: ["2972 Westheimer", "8502 Preston"],
    client: "Robs Gelo Siaton",
  },
];

const DeliveryList: React.FC = () => {
  return (
    <div className="delivery-list">
      <h2>Ongoing Delivery</h2>
      {deliveries.map((delivery, index) => (
        <div className="delivery-card" key={index}>
          <div className="shipment">
            Shipment number: {delivery.shipmentNumber}
          </div>
          <div className="product">{delivery.product}</div>
          <div className="locations">
            {delivery.locations.map((location, i) => (
              <div className="location" key={i}>
                {location}
              </div>
            ))}
          </div>
          <div className="client">Client: {delivery.client}</div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryList;
