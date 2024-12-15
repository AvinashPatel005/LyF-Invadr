import React, { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import Weather from "../components/Weather";
import ToDo from "../components/Todo";
import Calculator from "../components/Calculator";
import Timer from "../components/Timer";
import Settings from "../components/Setting";
import News from "../components/News";
import Facts from "../components/Facts";
import Quote from "../components/Quote";
import { useTheme } from "../ThemeContext";
import { useNavigate } from "react-router";
function Home() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const name = localStorage.getItem("name");
  const city = localStorage.getItem("city");
  useEffect(() => {
    const name = localStorage.getItem("name");
    const city = localStorage.getItem("city");

    if (!name || !city) {
      navigate("/register");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);
  return (
    <div>
      {!isLoading && (
        <div className={`container ${theme}`}>
          <Greeting name={name} />
          <Weather city={city} />
          <ToDo />
          <Calculator />
          <News />
          <Timer />
          <Settings />
          <Facts />
          <Quote />
        </div>
      )}
    </div>
  );
}

export default Home;
