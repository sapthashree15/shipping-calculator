// Agent/AgentDashboard.js
import React from "react";
import Navbar from "../Common/Navbar";
import AddPackageSize from "./AddPackageSize";

const AgentDashboard = () => {
  return (
    <div>
      <Navbar />
      <h2>Agent Dashboard</h2>
      <AddPackageSize />
    </div>
  );
};

export default AgentDashboard;
