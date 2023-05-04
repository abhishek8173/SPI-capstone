import React, { useState } from "react";
import "./JobRoles.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import { IconButton } from "@mui/material";
import CategoryBox from "./CategoryBox/CategoryBox";
import JobCard from "./JobCard/JobCard";
import { useNavigate } from "react-router-dom";

const JobRoles = (props) => {
  const categories = props.jobCategories;
  const [category, setCategory] = useState({});
  const navigate = useNavigate();
  const categoryClickHandler = (indx) => {
    console.log(indx);
    setCategory(categories[indx]);
  };
  return (
    <div className="JobRoles">
      <h2>Job Roles</h2>
      <div className="jobRoles__searchContainer">
        <div className="jobRoles__categoriesContainer">
          <div className="categoryHeader">
            <h3>Select Field(s)</h3>
          </div>
          <div className="jobRoles__categories">
            {categories.map((i, indx) => (
              <CategoryBox
                name={i.category}
                click={() => categoryClickHandler(indx)}
                key={i._id}
              />
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
            <IconButton onClick={() => navigate("addnew")}>
              <AddIcon />
            </IconButton>
          </div>
          <div className="jobRoles__list">
            {category.jobs &&
              category.jobs.map((i) => (
                <JobCard name={i.name} updated={i.date} key={i._id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRoles;
