import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weatherData mt-3 mb-3">
        <div className="row">
          <div className="col-6">
            <h1 className="mb-3 fw-bold">New York</h1>
            <ul className="p-0 m-0">
              <li>Last updated: Wednesday 07:00</li>
              <li>Description: Sunny</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="temperatureIcon"
            ></img>
            <strong className="temperatureValue ms-2">6</strong>
            <span className="temperatureUnit ms-2">°C | °F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
