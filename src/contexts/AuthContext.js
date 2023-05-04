import { authInstance } from "../axios/axios.js";
import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = localStorage.getItem("user");
    if (getSession && getSession._id) {
      setUser(getSession);
    }
  }, []);

  const LogIn = async (data) => {
    let url = "/company/login";
    try {
      await authInstance.post(url, data).then((res) => {
        if (res.data.valid) {
          localStorage.setItem("user", res.data);
          setUser(res.data);
          navigate("home");
        } else {
          alert("Wrong Password!!!");
        }
      });
    } catch (e) {
      console.log(e);
      alert("Account not found!!!");
    }
  };

  const SignUp = async (data) => {
    let url = "/company/new";
    try {
      await authInstance.post(url, data).then((res) => {
        alert("Account created successfully! Proceed to LogIn.");
      });
    } catch (e) {
      alert("Email already axists!!!");
    }
  };

  const Logout = () => {
    localStorage.removeItem("user");
    setUser({});
  };
  return (
    <AuthContext.Provider value={{ user, LogIn, Logout, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
