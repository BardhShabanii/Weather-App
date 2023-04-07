import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import "./App.css";
import Searchbar from "./Components/Searchbar";

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
            City: {weatherData.name}, {weatherData.sys.country}
          </h1>
          <h2>Current temperature: {weatherData.main.temp}°C</h2>
          <h2>Current Weather: {weatherData.weather[0].main}</h2>
          <h4>{weatherData.weather[0].description}</h4>
          <div className="min-max-container">
            <h2>Min: {weatherData.main.temp_min}°C</h2>
            <h2>Max: {weatherData.main.temp_max}°C</h2>
          </div>
          <h2>Feels Like: {weatherData.main.feels_like}°C</h2>
          <div className="wind-humidity-container">
            <h2>Wind Speed: {weatherData.wind.speed}m/s</h2>
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
