import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const JobCard = (props) => {
  const date = Date(props.date);
  const updated = date.slice(4, 15);
  return (
    <div className="jobCard">
      <div className="jobCard__left">
        <h4>{props.name}</h4>
      </div>
      <div className="jobCard__right">
        <p>{`Updated: ${updated}`}</p>
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
