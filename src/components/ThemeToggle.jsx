import React, {useState, useEffect} from "react";
import "../theme.css";
import Tooltip from "./Tooltip";
import LightIcon from "../assets/ui_icons/lightmode.svg";
import DarkIcon from "../assets/ui_icons/darkmode.svg";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");
    const [showThemeChanged, setShowThemeChanged] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme);
        setShowThemeChanged(true);
        setTimeout(() => {setShowThemeChanged(false)}, 2000);
      };

      useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.className = initialTheme;
      }, []);

      return(
        <div className="theme-toggle" onClick={toggleTheme}>
            <img src={theme === "light" ? DarkIcon : LightIcon} alt="Theme Toggle Icon" className="theme-icon" title={`Switch to ${theme === "light" ? "Dark Theme" : "Light Theme"}`} />
            <Tooltip text={`Welcome to the ${theme === "light" ? "Bright" : "Dark"} Side!`} show={showThemeChanged} />
        </div>
        
      )
}

export default ThemeToggle;