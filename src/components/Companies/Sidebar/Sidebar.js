import React from "react";
import { Button, Divider } from "@mui/material";
import "./Sidebar.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { UserAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user, Logout } = UserAuth();
  const navigate = useNavigate();
  const handleAuth = () => {
    if (Object.keys(user).length !== 0) Logout();
    else navigate("login");
  };
  return (
    <div className="Sidebar">
      <div className="company__logInOut">
        <div id="company__info">
          <h1>
            {Object.keys(user).length !== 0
              ? `${user.orgName}`
              : "Company Name"}
          </h1>
          <h2>
            {Object.keys(user).length !== 0 ? `${user.user}` : "User Name"}
          </h2>
          <p>
            {Object.keys(user).length !== 0 ? `${user.position}` : "Position"}
          </p>
        </div>
        <div id="company__authButton">
          <Button onClick={handleAuth} variant="contained">
            {Object.keys(user).length !== 0 ? "Sign Out" : "Sign In"}
          </Button>
        </div>
      </div>
      <Divider />
      <div className="company__navigation">
        <p>Tools</p>
        <Button
          variant="text"
          onClick={() => navigate("addnew")}
          startIcon={<AddCircleIcon />}
        >
          New Job Role
        </Button>
        <Button
          variant="text"
          onClick={() => navigate("home")}
          startIcon={<DashboardIcon />}
        >
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
