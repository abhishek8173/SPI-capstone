import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const JobCard = () => {
  return (
    <div className="jobCard">
      <div className="jobCard__left">
        <h4>Job Role</h4>
        <p>Categories</p>
      </div>
      <div className="jobCard__right">
        <p>Updated: DD/MM/YYYY</p>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default JobCard;
