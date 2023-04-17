import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/SPI logo.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, Divider, IconButton } from "@mui/material";

const Login = () => {
  const [passtype, setPasstype] = useState("password");
  const passVisibilityHandler = () => {
    if (passtype === "password") setPasstype("text");
    else setPasstype("password");
  };
  return (
    <div className="login">
      <div id="login__left">
        <div id="login__head">
          <img id="login_Logo" src={Logo} alt="SPI" />
        </div>
        <input id="uname" type="text" name="username" placeholder="username" />
        <div id="passField">
          <input
            id="pass"
            type={passtype}
            name="password"
            placeholder="password"
          />
          <IconButton onClick={passVisibilityHandler}>
            {passtype === "password" ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon />
            )}
          </IconButton>
        </div>
        <a href="">Forgot password?</a>
        <Button variant="contained">Sign In</Button>
        <Divider />
        <p>Don't have an account?</p>
        <Button variant="outlined">Sign UP</Button>
      </div>
      <div id="login__right"></div>
    </div>
  );
};

export default Login;
