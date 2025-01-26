import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logos/image 1.png"; // Importing your custom logo.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className={`layout-nav ${expanded ? "expanded" : "collapsed"}`}>
      {/* Top Section */}
      <div className="top-section-container">
        <div className="logo-container" onClick={() => setExpanded(!expanded)}>
          <img
            src={String(logo)}
            alt="Logo"
            style={{ width: expanded ? 120 : 40 }} // Dynamically change logo size
          />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <NavbarItem
          text="Dashboard"
          link="/dashboard"
          expanded={expanded}
          icon={<span>📊</span>}
        />
        <NavbarItem
          text="Logistics"
          link="/logistics"
          expanded={expanded}
          icon={<span>🚛</span>}
        />
        <NavbarItem
          text="Reports"
          link="/reports"
          expanded={expanded}
          icon={<span>📑</span>}
        />
        <NavbarItem
          text="Tracking"
          link="/tracking"
          expanded={expanded}
          icon={<span>📍</span>}
        />
      </ul>

      {/* Bottom Section: User Info */}
      <div className="user-info-container">
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
          alt="User Avatar"
          className="w-10 h-10 rounded-md"
        />
        {expanded && (
          <div className="user-details">
            <h4 className="font-semibold">John Doe</h4>
            <span className="text-sm text-gray-500">johndoe@gmail.com</span>
          </div>
        )}
      </div>
      
      {/* Logout Button */}
      <div className={`logout-button-container ${expanded ? '' : 'retracted'}`}>
        <button onClick={handleLogout}>
          {expanded ? (
            <span>Logout</span>
          ) : (
            <FontAwesomeIcon icon={faSignOutAlt} />
          )}
        </button>
      </div>
    </nav>
  );
};

interface NavbarItemProps {
  text: string;
  link: string;
  expanded: boolean;
  icon: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ text, link, expanded, icon }) => {
  return (
    <li className="nav-item">
      <Link
        to={link}
        className="flex items-center w-full p-2 text-gray-600 hover:bg-indigo-50 rounded-md"
      >
        {icon}
        {expanded && <span className="ml-3">{text}</span>}
      </Link>
    </li>
  );
};


export default Navbar;
