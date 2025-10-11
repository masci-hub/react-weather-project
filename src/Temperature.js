import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [degrees, setDegrees] = useState(props.celsius);

  function showFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let roundedFahrenheit = Math.round(fahrenheit);
    setDegrees(roundedFahrenheit);
  }

  function showCelsius(event) {
    event.preventDefault();
    setDegrees(props.celsius);
  }

  if (degrees === props.celsius) {
    return (
      <span className="Temperature">
        <strong className="temperatureValue ms-2">{degrees}</strong>
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
      <span className="Temperature">
        <strong className="temperatureValue ms-2">{degrees}</strong>
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
