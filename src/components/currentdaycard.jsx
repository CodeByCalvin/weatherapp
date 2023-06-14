import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "../css/currentdaycard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

export default function CurrentDayCard(props) {
  return (
    <Card className="weather-day-card text-center mx-auto">
      <div className="weather-header">
        <button className="temp-btn" onClick={props.toggleTemperature}>
          {props.isCelsius ? (
            <>
              <FontAwesomeIcon
                icon={faToggleOn}
                rotation={180}
                style={{ color: "#000000" }}
              />
              <span> °C</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faToggleOn} style={{ color: "#000000" }} />
              <span> °F</span>
            </>
          )}
        </button>
      </div>

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
            {props.isCelsius
              ? `${props.temperature}°C`
              : `${props.toFarenheit(props.temperature)}°F`}
          </div>
          <div className="weather-description">{props.description}</div>
        </div>
        <div className="col-md-4 d-flex ">
          <div className="d-flex flex-column weather-extra-info">
            <div className="weather-feelslike">
              <div className="bold">Feels like:</div>{" "}
              {props.isCelsius
                ? `${props.feelslike}°C`
                : `${props.toFarenheit(props.feelslike)}°F`}
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
