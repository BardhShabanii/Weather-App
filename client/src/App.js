import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import "./App.css";
import Searchbar from "./Components/Searchbar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function App() {
  const [city, setCity] = useState("Amsterdam");
  const [weatherData, setWeatherData] = useState({});

  const handleCityChange = async (city) => {
    try {
      setCity(city);
      const response = await fetch(`/weather/${city}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/weather/${city}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [city]);

  return (
    <div className="container">
      <Searchbar className="searchbar" onCityChange={handleCityChange} />
      {weatherData.main ? (
        <>
          <h1>
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <div className="weather-container">
            <div className="temperature-container">
              <h2 className="temperature">
                {weatherData.main.temp.toFixed(1)}
                <span className="celsius">°C</span>
              </h2>
            </div>
            <div className="weather-info">
              <h2 className="current-weather">
                {weatherData.weather[0].description}
              </h2>
              <img
                id="wicon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather icon"
              ></img>
              <div className="min-max-container">
                <h2 className="min-max">
                  {weatherData.main.temp_max.toFixed(1)}°C
                  <ArrowUpwardIcon style={{ color: "crimson" }} />
                </h2>

                <h2 className="min-max">
                  {weatherData.main.temp_min.toFixed(1)}°C
                  <ArrowDownwardIcon style={{ color: "lightblue" }} />
                </h2>
              </div>
              <h2>Feels Like: {weatherData.main.feels_like.toFixed(1)}°C</h2>
            </div>
          </div>
          <div className="wind-humidity-container">
            <h2>Wind Speed: {weatherData.wind.speed.toFixed(1)}m/s</h2>
            <h2>Humidity: {weatherData.main.humidity}%</h2>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
