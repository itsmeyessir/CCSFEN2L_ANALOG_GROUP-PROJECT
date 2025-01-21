import React from "react";
import { IconType } from "react-icons";
import "./styles/SummaryCard.css";

interface SummaryItem {
  icon: IconType;
  value: number;
  label: string;
  iconBgColor: string; // Background color for the icon
  iconColor: string; // Icon color
}

interface SummaryCardProps {
  title: string;
  items: SummaryItem[];
  linkText?: string;
  onLinkClick?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  items,
  linkText = "See All",
  onLinkClick,
}) => {
  return (
    <div className="summary-card">
      <div className="summary-header">
        <h2>{title}</h2>
        {onLinkClick && (
          <a href="#" onClick={onLinkClick} className="see-all-link">
            {linkText}
          </a>
        )}
      </div>

      <div className="summary-content">
        {items.map((item, index) => (
          <div className="summary-item" key={index}>
            <div
              className="icon-container"
              style={{ backgroundColor: item.iconBgColor }}
            >
              <item.icon className="icon" style={{ color: item.iconColor }} />
            </div>
            <p className="value">{item.value}</p>
            <p className="label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
