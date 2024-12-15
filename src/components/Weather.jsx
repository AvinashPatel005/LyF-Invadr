import React, { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext'; // Assuming you have a ThemeContext for managing themes
import cloudyImg from "../assets/cloudy.png";
import drizzleImg from "../assets/drizzle.png";
import foggyImg from "../assets/foggy.png";
import hazeImg from "../assets/haze.png";
import heavyRainImg from "../assets/heavy-rain.png";
import sunImg from "../assets/sun.png";
import sunnyImg from "../assets/sunny.png";
import thunderImg from "../assets/thunder.png";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const { theme } = useTheme();
  useEffect(() => {
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`+process.env.REACT_APP_WEATHER_API_KEY 
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));
    } catch (error) {
      console.log(error)
    }
  }, [city]);

  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return sunnyImg;
      case "Clouds":
        return cloudyImg;
      case "Rain":
        return heavyRainImg;
      case "Drizzle":
        return drizzleImg;
      case "Thunderstorm":
        return thunderImg;
      case "Mist":
      case "Fog":
        return foggyImg;
      case "Haze":
        return hazeImg;
      default:
        return sunImg;
    }
  };

  return (
    <div className={`widget weather ${theme === 'dark' ? 'dark' : ''}`}>
      {weather ? (
        <>
          <h3>{weather.name}</h3>
          <img
            src={getWeatherImage(weather.weather[0].main)}
            alt={weather.weather[0].main}
            style={{ width: "60px", height: "60px" }}
          />
          <p>
            <strong>{Math.floor(weather.main.temp - 273.15)}°C</strong> - {weather.weather[0].main}
          </p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
