import React from "react";
import { useState } from "react";

function Search({ setLocation }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    setLocation(search);
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleSubmit}> Location </button>
    </div>
  );
}

export default Search;
