import React from "react";
import { useState } from "react";
import "../css/search.css";

function Search({ setLocation }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(search);
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
