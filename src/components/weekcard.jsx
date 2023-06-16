import React from "react";
import "../css/weekcard.css";

export default function WeekCard(props) {
  return (
    <div className="week-weather-card">
      <div className="week-card-body">
        <div className="week-day-container">
          <div className="week-day">{props.day}</div>
        </div>
        <div className="week-temperature-container">
          <div className="week-temperature">
            {props.isLoading
              ? "Loading..."
              : props.isCelsius
              ? props.temperature
                ? `${props.temperature}°C`
                : "Loading..."
              : props.temperature
              ? `${props.toFarenheit(props.temperature)}°F`
              : "Loading..."}
          </div>
        </div>
        <div className="week-description-container">
          <div className="week-description">
            {" "}
            {props.isLoading ? "Loading..." : props.description || "Loading..."}
          </div>
        </div>
        <div className="week-icon-container">
          <img src={props.img} alt={props.alt} className="week-icon" />
        </div>
      </div>
    </div>
  );
}
