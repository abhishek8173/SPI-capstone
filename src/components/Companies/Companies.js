import React from "react";
import "./Companies.css";
import Sidebar from "./Sidebar/Sidebar";
// import Dashboard from "./Dashboard/Dashboard";
import AddNew from "./AddNew/AddNew";
import Login from "../LogIn/Login";

const Companies = () => {
  return (
    <div className="Companies">
      <Login />
      <Sidebar />
      {/* <Dashboard /> */}
      <AddNew />
    </div>
  );
};

export default Companies;
