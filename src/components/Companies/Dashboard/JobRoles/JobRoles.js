import React from "react";
import "./JobRoles.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
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
            <h3>Select Field(s)</h3>
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
          <div className="jobRoles__searchBar">
            <input type="text" placeholder="Search by Job name or Job no." />
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <SortIcon />
            </IconButton>
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
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
