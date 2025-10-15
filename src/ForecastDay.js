import React from "react";
import Icon from "./Icon";

export default function ForecastDay({ data, units }) {
  function day() {
    let date = new Date(data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let formattedDay = days[date.getDay()];

    return formattedDay;
  }

  function maxTemp() {
    let maxTemp = data.temperature.maximum;
    let roundedMaxTemp = Math.round(maxTemp);

    if (units === "imperial") {
      let fahren = Math.round((maxTemp * 9) / 5 + 32);
      return fahren;
    } else {
      return roundedMaxTemp;
    }
  }

  function minTemp() {
    let minTemp = data.temperature.minimum;
    let roundedMinTemp = Math.round(minTemp);

    if (units === "imperial") {
      let fahren = Math.round((minTemp * 9) / 5 + 32);
      return fahren;
    } else {
      return roundedMinTemp;
    }
  }

  return (
    <div className="ForecastDay">
      <div className="row text-center mt-4 mb-4">
        <div className="col">
          <div className="opacity-75">{day()}</div>
          <div className="m-3">
            <Icon code={data.condition.icon} size={36} />
          </div>
          <div>
            <span className="opacity-75 m-2">{maxTemp()}°</span>
            <span className="opacity-75">{minTemp()}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
