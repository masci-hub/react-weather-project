import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import CurrentTemperature from "./CurrentTemperature";
import Icon from "./Icon";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [units, setUnits] = useState("metric");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconCode: response.data.condition.icon,
      temperature: response.data.temperature.current,
    });
  }

  function searchWeatherData(cityName) {
    const apiKey = "733615547b11515efo464ab9111t0c1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    if (city.length > 0) {
      searchWeatherData(city);
    } else {
      alert(`Please enter a city`);
    }

    event.preventDefault();

    setCity("");
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            value={city}
            autoFocus="on"
            onChange={getCity}
          ></input>
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          ></input>
        </div>
      </div>
    </form>
  );

  if (weatherData) {
    return (
      <div className="WeatherSearch">
        {searchForm}
        <div className="currentWeather mt-3 mb-3">
          <div className="row">
            <div className="col-6">
              <h1 className="mb-3 fw-bold">{weatherData.city}</h1>
              <ul className="p-0 m-0">
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">
                  Description: {weatherData.description}
                </li>
                <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
            <div className="col-6 text-end">
              <Icon code={weatherData.iconCode} size={52} />
              <CurrentTemperature
                celsius={Math.round(weatherData.temperature)}
                units={units}
                setUnits={setUnits}
              />
            </div>
          </div>
        </div>
        <WeatherForecast city={weatherData.city} units={units} />
      </div>
    );
  } else {
    searchWeatherData("New York");
    return (
      <div className="WeatherSearch">
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
