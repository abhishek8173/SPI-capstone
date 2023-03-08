import React from "react";
import "./Companies.css";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

const Companies = () => {
  return (
    <div className="Companies">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Companies;
