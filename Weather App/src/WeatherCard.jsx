import React from 'react'
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
    const { name, main, weather, wind } = data;

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p className="desc">{weather[0].description}</p>
      <h3>{Math.round(main.temp)}°C</h3>

      <div className="details">
        <div>
          <p>Humidity</p>
          <span>{main.humidity}%</span>
        </div>
        <div>
          <p>Wind</p>
          <span>{wind.speed} m/s</span>
        </div>
        <div>
          <p>Feels Like</p>
          <span>{main.feels_like}°C</span>
        </div>
        <div>
          <p>Pressure</p>
          <span>{main.pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard