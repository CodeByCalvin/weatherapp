import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import WeekCard from "./components/weekcard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="weather-day"></div>
      <div className="weather-week-container">
        <WeekCard
          day="Monday"
          temperature="20"
          img={<FontAwesomeIcon icon="fa-light fa-sun" />}
          alt="Image representing the current weather"
        />
      </div>
    </div>
  );
}

export default App;
