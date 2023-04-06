import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Amsterdam");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/weather/${city}`);
      const data = await response.json();
      // console.log(data)
      setWeatherData(data);
    }
    fetchData();
  }, [city]);
  return (
    <div>
      <h1>{weatherData.name}</h1>
    </div>
  );
}

export default App;