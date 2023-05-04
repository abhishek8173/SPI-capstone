import React from "react";
import "./JobSearch.css";
import { Theme } from "../../../App";
import TextFieldCustom from "../../TextFieldCustom/TextFieldCustom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const JobSearch = () => {
  const minMainInputWidth = "20rem";
  const { theme } = Theme();
  return (
    <div className="JobSearch">
      <div className="Csearch">
        <TextFieldCustom
          id="companySearch"
          width="75%"
          minWidth={minMainInputWidth}
          type="text"
          label="Search Company"
          bgColor={theme === "dark" ? "#041c32" : "#808080"}
        />
        <IconButton id="companySearchBtn">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="Casearch">
        <TextFieldCustom
          id="CategorySearch"
          width="75%"
          minWidth={minMainInputWidth}
          type="text"
          label="Select Category"
          bgColor={theme === "dark" ? "#041c32" : "#808080"}
        />
        <IconButton id="companySearchBtn">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default JobSearch;
