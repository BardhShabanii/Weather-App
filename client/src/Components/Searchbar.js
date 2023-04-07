import React from "react";
import { useState } from "react";
import "../Components/searchbar.css";

function Searchbar(props) {
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      props.onCityChange(city);
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };    

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button className="submit-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
