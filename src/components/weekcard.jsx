import React from "react";

export default function WeekCard(props) {
  return (
    <div className="week-card">
      <h3>{props.day}</h3>
      <p>{props.temperature}</p>
      <p>
        <img src={props.img} alt={props.alt}></img>
      </p>
    </div>
  );
}
