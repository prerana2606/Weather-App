import React, { useState , useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./Weather.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");


  const fetchWeather = async () => {
    if (!city.trim()) {
        setError("Please enter a city name");
        setWeather(null);
        return;
    }
    const apiKey = "7b3056080d74dea628c424190c3dc801";
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
      setError("");
    } catch(error) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <div className="theme-toggle">
        <label>
          <input type="checkbox" onChange={toggleTheme} />
          <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
        </label>
      </div>

      <h1 className="title">Weather App</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button onClick={fetchWeather} className="btn">Search</button>
      </div>

      {weather && <WeatherCard data={weather} />}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
