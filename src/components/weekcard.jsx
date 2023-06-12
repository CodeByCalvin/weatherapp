import React from "react";
import "../css/weekcard.css";
import Card from "react-bootstrap/Card";
import "../css/weekcard.css";

export default function WeekCard(props) {
  return (
    <Card className="weather-week-card">
      <Card.Body>
        <Card.Title>{props.day}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.temperature}°C
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <p>
          <img src={props.img} alt={props.alt}></img>
        </p>
      </Card.Body>
    </Card>
  );
}
