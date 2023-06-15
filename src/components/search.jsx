import React from "react";
import { useState } from "react";
import WeatherAPI from "../weatherAPI";
import "../css/search.css";

function Search({ setLocation, setCurrentCoords }) {
  const [search, setSearch] = useState("");
  const weatherAPI = new WeatherAPI();

  async function handleSubmit(e) {
    e.preventDefault();
    setLocation(search);
    setSearch("");
    const coords = await weatherAPI.getCoords(search);
    if (coords && coords.length > 0) {
      setCurrentCoords({
        lat: coords[0].lat,
        lon: coords[0].lon,
      });
    }
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter your location..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          required
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
