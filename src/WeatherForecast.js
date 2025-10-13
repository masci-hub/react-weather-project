import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState("");

  function getForecastData(cityName) {
    let apiKey = "733615547b11515efo464ab9111t0c1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecastData({
      day: new Date(response.data.daily[0].time),
      iconCode: response.data.daily[0].condition.icon,
      maxTemperature: response.data.daily[0].temperature.maximum,
      minTemperature: response.data.daily[0].temperature.minimum,
    });
  }

  if (forecastData) {
    return (
      <div className="WeatherForecast">
        <ForecastDay data={forecastData} />
      </div>
    );
  } else {
    getForecastData(props.data.city);
    return (
      <div className="WeatherForecast">
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
