import React, { useState, useEffect } from "react";
import "./Login.css";
import Logo from "../../assets/SPI logo.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, Divider, IconButton } from "@mui/material";
import { unstable_batchedUpdates } from "react-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import { authInstance } from "../../axios/axios.js";
import { UserAuth } from "../../contexts/AuthContext";

//api calls
const generateOTP = async (email) => {
  try {
    await authInstance.post("/otp/generate", { iemail: email });
  } catch (e) {
    alert("Something went wrong or email already exists!!!");
  }
};

const validateOTP = async (data) => {
  let valid = false;
  try {
    await authInstance.post("/otp/check", data).then((res) => {
      console.log(res);
      valid = res.data.valid;
    });
  } catch (e) {
    console.log(e);
    alert("Internal server error! Try again later!");
    return valid;
  }
  return valid;
};

const Login = (props) => {
  const [passtype, setPasstype] = useState("password");
  const [signUpPassType, setSignUpPassType] = useState("password");
  const [otpfieldvisibility, setOtpfieldvisibility] = useState(false);
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  const [userenteredotp, setUserenteredotp] = useState("");
  const [otpvalidity, setOtpValidity] = useState();
  const [signupform, setSignUpForm] = useState(false);
  const [emailvalidity, setEmailValidity] = useState();

  const { LogIn, SignUp } = UserAuth();

  useEffect(() => {
    if (otpvalidity === false) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setOtpValidity();
            return;
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    //eslint-disable-next-line
  }, [seconds, otpvalidity]);

  useEffect(() => {
    if (userenteredotp.length === 6 && !otpvalidity) {
      const email = document.getElementById("signUpEmail").value;
      const data = { email: email, iotp: userenteredotp.toString() };
      const validation = async (data) => {
        console.log(data);
        await validateOTP(data).then((res) => {
          console.log(res);
          if (res) {
            document.getElementById("otpField").disabled = true;
            document.getElementById("signUpEmail").disabled = true;
            setOtpValidity(true);
          } else {
            setOtpValidity(false);
          }
        });
      };
      validation(data);
    }
    //eslint-disable-next-line
  }, [userenteredotp]);

  //validate email
  useEffect(() => {
    if (emailvalidity === false) alert("Invalid Organisation Email!!!");
  }, [emailvalidity]);

  const emailValidate = (email) => {
    setEmailValidity(isOrgEmail(email));
  };

  const isOrgEmail = (email) => {
    const rightPart = email.split("@")[1];
    if (rightPart === undefined) return true;
    else {
      const domain = rightPart.split(".")[0];
      const publicDomains = [
        "gmail",
        "yahoo",
        "hotmail",
        "aol",
        "msn",
        "wanadoo",
        "orange",
        "comcast",
        "live",
        "yandex",
        "rediffmail",
        "free",
        "gmx",
        "web",
      ];
      for (let x in publicDomains) {
        console.log(x);
        if (publicDomains[x] === domain) return false;
      }
      return true;
    }
  };

  const handleGetOTP = () => {
    const email = document.getElementById("signUpEmail").value;
    generateOTP(email);
    if (!otpfieldvisibility) setOtpfieldvisibility(true);
    unstable_batchedUpdates(() => {
      setMinutes(4);
      setSeconds(59);
      setOtpValidity(false);
    });
  };

  const passVisibilityHandler = () => {
    if (passtype === "password") setPasstype("text");
    else setPasstype("password");
  };

  const signUpPassVisibilityHandler = () => {
    if (signUpPassType === "password") setSignUpPassType("text");
    else setSignUpPassType("password");
  };

  const handleSignIn = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const data = { iemail: email, ipass: pass };
    LogIn(data);
  };

  const passCheck = () => {
    const pass1 = document.getElementById("signUpPass").value;
    const pass2 = document.getElementById("signUpPassConfirm").value;
    if (pass1 === undefined || pass2 === undefined) {
      alert("Fields marked with '*' are mandatory!!!");
      return "";
    } else {
      if (pass1 === pass2) {
        return pass1;
      } else {
        alert("Passwords mismatch!!!");
        return "";
      }
    }
  };

  const handleSignUp = () => {
    const fname = document.getElementById("signUp__fName").value;
    const mname = document.getElementById("signUp__mName").value;
    const lname = document.getElementById("signUp__lName").value;
    if (fname === undefined || lname === undefined)
      alert("Fields marked with '*' are mandatory!!!");
    const uname =
      fname.toLowerCase() +
      " " +
      (mname.length !== 0 ? mname.toLowerCase() + " " : "") +
      (lname.length !== 0)
        ? lname.toLowerCase()
        : "";
    const orgName = document.getElementById("signUpCompanyName").value;
    const position = document.getElementById("signUpPosition").value;
    const email = document.getElementById("signUpEmail").value;
    const company = document.getElementById("signUpComapnyName").value;
    if (
      orgName === undefined ||
      position === undefined ||
      email === undefined ||
      company === undefined
    )
      alert("Fields marked with '*' are mandatory!!!");
    const pass = passCheck();
    const data = {
      user: uname.toLowerCase(),
      orgName: orgName.toLowerCase(),
      position: position.toLowerCase(),
      email: email.toLowerCase(),
      password: pass.toLowerCase(),
    };
    SignUp(data);
  };

  return (
    <div className="login">
      <div id="login__left">
        <div id="login__head">
          <img id="login_Logo" src={Logo} alt="SPI" />
        </div>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="email"
          required
          autoComplete="off"
        />
        <div id="passField">
          <input
            id="pass"
            type={passtype}
            name="password"
            placeholder="password"
            autoComplete="off"
            required
          />
          <IconButton onClick={passVisibilityHandler}>
            {passtype !== "password" ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon />
            )}
          </IconButton>
        </div>
        <p id="passresetbtn">Forgot password?</p>
        <Button variant="contained" onClick={handleSignIn}>
          Sign In
        </Button>
        <Divider />
        <p>Don't have an account?</p>
        <Button onClick={() => setSignUpForm(true)} variant="outlined">
          Sign UP
        </Button>
      </div>
      <div id="login__right">
        {signupform ? (
          <div id="signUp">
            <IconButton id="signUpClose" onClick={() => setSignUpForm(false)}>
              <CloseIcon />
            </IconButton>
            <h1 id="registerHeader">Register</h1>
            <form id="signUp__form">
              <div id="signUp__fullName">
                <input
                  id="signUp__fName"
                  type="text"
                  placeholder="First Name *"
                  required
                />
                <input
                  id="signUp__mName"
                  type="text"
                  placeholder="Middle Name"
                />
                <input
                  id="signUp__lName"
                  type="text"
                  placeholder="Last Name *"
                  required
                />
              </div>
              {props.type !== "company" ? (
                <>
                  <input
                    id="signUpComapnyName"
                    type="text"
                    name="signUpCompanyName"
                    placeholder="Name of organisation *"
                    required
                  />
                  <input
                    id="signUpPosition"
                    type="text"
                    name="signUpPosition"
                    placeholder="Role *"
                    required
                  />
                </>
              ) : (
                <input
                  id="linkedIn"
                  type="text"
                  name="linkedIn"
                  placeholder="LinkedIn"
                  required
                />
              )}
              <div id="emailForm">
                <input
                  id="signUpEmail"
                  type="signUpEmail"
                  onBlur={(e) => emailValidate(e.target.value)}
                  placeholder="Orgaisation email *"
                  required
                />
                {!otpfieldvisibility || (seconds === 0 && minutes === 0) ? (
                  <Button onClick={handleGetOTP} variant="outlined" id="getOTP">
                    Get OTP
                  </Button>
                ) : (
                  <Button variant="outlined" id="getOTP" disabled>
                    Get OTP
                  </Button>
                )}
              </div>
              {otpfieldvisibility ? (
                <>
                  {otpvalidity === false ? (
                    <div className="countdown-text">
                      {seconds > 0 || minutes > 0 ? (
                        <p>
                          OTP sent to email. Time Remaining:{" "}
                          {minutes < 10 ? `0${minutes}` : minutes}:
                          {seconds < 10 ? `0${seconds}` : seconds}
                        </p>
                      ) : (
                        <p>Didn't recieve code? Request OTP again.</p>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}

                  <div id="otpContainer">
                    <input
                      id="otpField"
                      type="text"
                      placeholder="------"
                      maxLength="6"
                      onChange={(e) => {
                        setUserenteredotp(e.target.value);
                      }}
                      required
                    />
                    {userenteredotp.length === 6 ? (
                      otpvalidity ? (
                        <VerifiedIcon className="verifiedIcon" />
                      ) : (
                        <ErrorIcon className="errorIcon" />
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              <div id="signUpPassField">
                <input
                  id="signUpPass"
                  type={signUpPassType}
                  name="signUpPass"
                  placeholder="Enter password *"
                  required
                />
                <IconButton onClick={signUpPassVisibilityHandler}>
                  {signUpPassType !== "password" ? (
                    <VisibilityIcon className="signUpVisibilityIcon" />
                  ) : (
                    <VisibilityOffIcon className="signUpVisibilityIcon" />
                  )}
                </IconButton>
              </div>
              <input
                id="signUpPassConfirm"
                type="password"
                name="signUpPassConfirm"
                placeholder="Confirm password *"
                required
              />
              <Button
                id="registerButton"
                onClick={handleSignUp}
                variant="contained"
              >
                signUp
              </Button>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Login;
