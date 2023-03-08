import React from "react";
import { Button, Divider } from "@mui/material";
import "./Sidebar.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="company__logInOut">
        <div id="company__info">
          <h2>{true ? "Company Name" : ""}</h2>
          <h3>User Name</h3>
          <p>Position</p>
        </div>
        <div id="company__loginButton">
          <Button variant="contained">Sign In</Button>
        </div>
      </div>
      <Divider />
      <div className="company__navigation">
        <p>Tools</p>
        <Button variant="text" startIcon={<AddCircleIcon />}>
          Add New Job Role
        </Button>
        <Button variant="text" startIcon={<DashboardIcon />}>
          Dashboard
        </Button>
      </div>
      <Divider />
      <div className="company__navigation">
        <p>Account</p>
        <Button variant="text" startIcon={<AccountBoxIcon />}>
          Profile
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
