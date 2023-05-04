import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import JobRoles from "./JobRoles/JobRoles";
import { opsInstance } from "../../../axios/axios";
import { UserAuth } from "../../../contexts/AuthContext";

const Dashboard = () => {
  const { user } = UserAuth();
  const [details, setDetails] = useState({});

  const fetchCompanyData = async (id) => {
    try {
      await opsInstance.get("/company/get", id).then((res) => {
        if (Object.keys(res).length !== 0) {
          setDetails(res.data);
        } else setDetails({});
      });
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
      setDetails({});
    }
  };
  //eslint-disable-next-line
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      const { _id } = user;
      fetchCompanyData({ _id: _id });
    } else setDetails({});
  }, [user]);
  return (
    <div className="Dashboard">
      <JobRoles
        jobCategories={
          Object.keys(details).length !== 0 ? details.jobcategories : []
        }
      />
    </div>
  );
};

export default Dashboard;
