import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Day from "./Day";

import "./Forecast.css";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState("");

  function getForecast() {
    let apiKey = "733615547b11515efo464ab9111t0c1b";
    let latitude = props.latitude;
    let longitude = props.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);

    setForecastData({
      day: response.data.daily[1].time,
      iconCode: response.data.daily[1].condition.icon,
      maxTemperature: response.data.daily[1].temperature.maximum,
      minTemperature: response.data.daily[1].temperature.minimum,
    });
  }

  if (forecastData) {
    return (
      <div className="Forecast">
        <Day data={forecastData} />
      </div>
    );
  } else {
    getForecast();
    return (
      <div className="Forecast">
        <ClipLoader
          color="#029CFD"
          loading={true}
          size={70}
          speedMultiplier={1}
          cssOverride={override}
        />
      </div>
    );
  }
}

const override = {
  display: "block",
  margin: "0 auto",
};
