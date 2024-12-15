import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "../ThemeContext";
import Logo from "../assets/layout.png";
function Register() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const nameRef = useRef();
  const cityRef = useRef();

  const handleRegister = () => {
    const name = nameRef.current.value;
    const city = cityRef.current.value;

    if (name && city) {
      localStorage.setItem("name", name);
      localStorage.setItem("city", city);

      console.log("Data saved to localStorage");
      navigate("/");
    } else {
      console.log("Please fill in both fields");
    }
  };

  return (
    <div className={`register-page ${theme}`}>
      <div>
        <div className="register-card">
          <img className="logo" src={Logo} alt="" />
          <div className="register-right">
            <h2>LyF Invadr</h2>
            <p>A smart platform for everyday needs</p>
            <input type="text" placeholder="Name" ref={nameRef} required />
            <input type="text" placeholder="City" ref={cityRef} required />
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
