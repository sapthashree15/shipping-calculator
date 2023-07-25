// Admin/AdminDashboard.js
import React from "react";
import Navbar from "../Common/Navbar";
import AddFreightRate from "./AddFreightRate";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <h2>Admin Dashboard</h2>
      <AddFreightRate />
    </div>
  );
};

export default AdminDashboard;
