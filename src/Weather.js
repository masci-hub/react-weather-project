import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          ></img>
          6° C | F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
