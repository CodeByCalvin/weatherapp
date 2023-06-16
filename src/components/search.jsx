import React from "react";
import { useState } from "react";
import WeatherAPI from "../weatherAPI";
import "../css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Search({ setLocation, setCurrentCoords, setIsLocationValid }) {
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
      setIsLocationValid(true);
    } else {
      setIsLocationValid(false);
      toastr.error("Invalid Location. Please try again.");
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
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
