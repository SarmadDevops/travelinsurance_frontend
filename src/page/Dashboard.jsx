import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
//import HomeComponent from "../components/HomeComponent";
import RefreshComponent from "../components/refreshbal/RefreshBalance";


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderContent = () => {
    switch (activeComponent) {
      // case "home":
      //   return <HomeComponent />;
      case "refresh":
        return <RefreshComponent />;
      // case "users":
      //   return <UsersComponent />;
      // default:
      //   return <HomeComponent />;
    }
  };

  return (
    <div className="dashboard-wrapper" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Navbar */}
      <Navbar
        variant="side"
        onMenuClick={(key) => setActiveComponent(key)}
      />

      {/* Main content area */}
      <div
        className="dashboard-content"
        style={{ flex: 1, padding: "24px", background: "#f0f2f5" }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
