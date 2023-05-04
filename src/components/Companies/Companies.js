import React, { useEffect } from "react";
import "./Companies.css";
import Sidebar from "./Sidebar/Sidebar";
import Login from "../LogIn/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import AddNew from "./AddNew/AddNew";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);
  return (
    <div className="Companies">
      <Sidebar />
      <Routes>
        <Route path="home" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="addnew" element={<AddNew />} />
      </Routes>
    </div>
  );
};

export default Companies;
