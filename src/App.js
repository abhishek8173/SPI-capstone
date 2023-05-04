import "./App.css";
import { useEffect, createContext, useState, useContext } from "react";
import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Assessment from "./components/Assessment/Assessment";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--primary-color", "#041c32");
      document.documentElement.style.setProperty("--secondry-color", "#04293a");
      document.documentElement.style.setProperty("--text-color", "#eeeeee");
      document.documentElement.style.setProperty("--text-faded", "#8bb4d0");
      document.getElementById("themeButton").style.boxShadow =
        "0 0 10px 0 #ecb365";
    } else {
      document.documentElement.style.setProperty("--primary-color", "#808080");
      document.documentElement.style.setProperty("--secondry-color", "#CCCCCC");
      document.documentElement.style.setProperty("--text-color", "#363636");
      document.documentElement.style.setProperty("--text-faded", "#415562");
      document.getElementById("themeButton").style.boxShadow =
        "0 0 10px 0 #363636";
    }
  }, [theme]);
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, handleTheme }}>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route path="/*" element={<Companies />} />
            <Route path="assessment/*" element={<Assessment />} />
          </Routes>
          <div id="themeButton">
            <IconButton onClick={handleTheme}>
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </div>
        </AuthContextProvider>
      </ThemeContext.Provider>
    </div>
  );
}
export const Theme = () => {
  return useContext(ThemeContext);
};
export default App;
