import React from "react";
import "./Header.css";
import Logo from "../../assets/SPI logo.svg";
import { useState } from "react";
import { Button } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BusinessIcon from "@mui/icons-material/Business";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const mobile = useMediaQuery("(min-width:600px)");
  const [page, setPage] = useState("Home");
  const handlePage = (curr) => {
    setPage(curr);
  };
  return (
    <div className="Header">
      <div className="header__links">
        <div id="logoBox">
          <img
            id="logo"
            src={Logo}
            alt="SPI"
            onClick={() => handlePage("Home")}
          />
        </div>
        <div className="header__right">
          <Button
            variant={page === "Resources" ? "contained" : "outlined"}
            onClick={() => {
              handlePage("Resources");
            }}
            startIcon={mobile ? <StorageIcon /> : null}
          >
            {mobile ? "Resources" : <StorageIcon />}
          </Button>
          <Button
            variant={page === "Assessment" ? "contained" : "outlined"}
            onClick={() => {
              handlePage("Assessment");
            }}
            startIcon={mobile ? <AssessmentIcon /> : null}
          >
            {mobile ? "Assessment" : <AssessmentIcon />}
          </Button>
          <Button
            variant={page === "Companies" ? "contained" : "outlined"}
            onClick={() => {
              handlePage("Companies");
            }}
            startIcon={mobile ? <BusinessIcon /> : null}
          >
            {mobile ? "Companies" : <BusinessIcon />}
          </Button>
          <Button
            variant={page === "Contact" ? "contained" : "outlined"}
            onClick={() => {
              handlePage("Contact");
            }}
            startIcon={mobile ? <ContactSupportIcon /> : null}
          >
            {mobile ? "Contact Us" : <ContactSupportIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
