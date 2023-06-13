import React from "react";
import "../css/weekcard.css";
import Card from "react-bootstrap/Card";
import "../css/currentdaycard.css";

export default function CurrentDayCard(props) {
  return (
    <Card className="weather-day-card text-center mx-auto">
      <div className="display-3 weather-location">{props.location}</div>
      <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-center no-gutters weather-row">
        <div className="col-12 col-md-6">
          <img
            src={props.img}
            alt={props.alt}
            className="img-fluid weather-icon"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="display-4 weather-temperature">
            {props.temperature}°C
          </div>
          <div className="weather-description">{props.description}</div>
        </div>
      </Card.Body>
    </Card>
  );
}
