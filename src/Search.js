import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import { ClipLoader } from "react-spinners";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
    });
  }

  function searchCity(cityName) {
    const apiKey = "2bd326a60dc89a53287e446e819664df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    if (city.length > 0) {
      searchCity(city);
    } else {
      alert(`Please enter a city`);
    }

    event.preventDefault();

    setCity("");
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            value={city}
            autoFocus="on"
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
    searchCity("New York");
    return (
      <div className="Search">
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
