import React from "react";
import "./JobRoles.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import CategoryBox from "./CategoryBox/CategoryBox";
import JobCard from "./JobCard/JobCard";

const JobRoles = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="JobRoles">
      <h2>Job Roles</h2>
      <div className="jobRoles__searchContainer">
        <div className="jobRoles__categoriesContainer">
          <div className="categoryHeader">
            <h3>Select Categories</h3>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
          <div className="jobRoles__categories">
            {arr.map((i) => (
              <CategoryBox />
            ))}
          </div>
        </div>
        <div className="jobRoles__search">
          <input type="text" placeholder="Search by Job name or Job no." />
          <div className="jobRoles__list">
            {arr.map((i) => (
              <JobCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRoles;
