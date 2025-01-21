// components/Navbar.tsx
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/logistics">Logistics</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/tracking">Tracking</Link>
        </li>
        <li>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
