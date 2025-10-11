import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import { ClipLoader } from "react-spinners";

import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState("");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      date: "Wednesday 7:00",
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      temperature: response.data.temperature.current,
    });
  }

  function searchCity() {
    const apiKey = "733615547b11515efo464ab9111t0c1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      searchCity();
    } else {
      alert(`Please enter a city`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function resetCity() {
    setCity("");
  }

  let form = (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            onClick={resetCity}
            onChange={updateCity}
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
      <div className="Search">
        {form}
        <Weather data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return (
      <ClipLoader
        color="#029CFD"
        loading={true}
        size={150}
        speedMultiplier={1}
      />
    );
  }
}
