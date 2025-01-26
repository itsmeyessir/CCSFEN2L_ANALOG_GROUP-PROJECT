import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ["/", "/register"];

  return (
    <div className="layout">
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
