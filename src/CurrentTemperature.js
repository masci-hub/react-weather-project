import React, { useState } from "react";

import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  const [units, setUnits] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    let roundedFahrenheit = Math.round(fahrenheit);
    return roundedFahrenheit;
  }

  if (units === "metric") {
    return (
      <span className="CurrentTemperature">
        <strong className="temperatureValue ms-2">{props.celsius}</strong>
        <span className="temperatureUnit ms-2">
          °C |{" "}
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="CurrentTemperature">
        <strong className="temperatureValue ms-2">
          {convertToFahrenheit(props.celsius)}
        </strong>
        <span className="temperatureUnit ms-2">
          °F |{" "}
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  }
}
