import React from 'react';
import { useTheme } from "../ThemeContext"; 
import { useNavigate } from 'react-router';
const Settings = () => {
  const { theme,toggleTheme } = useTheme();
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    localStorage.setItem("theme",theme)
    navigate("/register")
  }
  return (
    <div  className={`info ${theme === 'dark' ? 'dark' : ''}`}>
      <div onClick={logout} className={`widget setting ${theme === 'dark' ? 'dark' : ''}`}>
      <i  className="theme-icon bi bi-box-arrow-right"></i>
      </div>
      <div onClick={toggleTheme} className={`widget about ${theme === 'dark' ? 'dark' : ''}`}>
      {theme === "dark" ? <i  className="bi bi-sun-fill theme-icon"></i> : <i className="bi bi-moon-fill theme-icon"></i>}
      </div>
    </div>
  );
};

export default Settings;
