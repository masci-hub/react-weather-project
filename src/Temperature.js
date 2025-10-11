import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [degrees, setDegrees] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setDegrees("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setDegrees("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (degrees === "celsius") {
    return (
      <span className="Temperature">
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
      <span className="Temperature">
        <strong className="temperatureValue ms-2">
          {Math.round(fahrenheit())}
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
