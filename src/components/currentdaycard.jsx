import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "../css/currentdaycard.css";

export default function CurrentDayCard(props) {
  return (
    <Card className="weather-day-card text-center mx-auto">
      <div className="weather-location">{props.location}</div>
      <div className="weather-date">{props.date}</div>
      <Card.Body className="d-flex align-items-center justify-content-center weather-row">
        <div className="col-md-4">
          <img
            src={props.img}
            alt={props.alt}
            className="img-fluid weather-icon"
          />
        </div>
        <div className="col-md-4">
          <div className="display-4 weather-temperature text-nowrap">
            {props.temperature}°C
          </div>
          <div className="weather-description">{props.description}</div>
        </div>
        <div className="col-md-4 d-flex justify-content-between">
          <div className="d-flex flex-column weather-extra-info">
            <div className="weather-feelslike">
              <div className="bold">Feels like:</div> {props.feelslike}°C
            </div>
            <div className="weather-wind">
              <div className="bold">Wind:</div>
              {props.wind} mph
            </div>
            <div className="weather-humidity">
              <div className="bold">Humidity:</div>
              {props.humidity}%
            </div>
          </div>
          <div className="d-flex flex-column weather-extra-info">
            <div className="weather-sunrise">
              <div className="bold">Sunrise:</div>
              {props.sunrise}
            </div>
            <div className="weather-sunset">
              <div className="bold">Sunset:</div>
              {props.sunset}
            </div>
            <div className="weather-third-info">
              <div className="bold">UVI:</div>
              {props.uvi}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
