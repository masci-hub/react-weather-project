import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let formattedDay = days[date.getDay()];

    return formattedDay;
  }

  function maxTemp() {
    let maxTemp = props.data.temperature.maximum;
    let roundedMaxTemp = Math.round(maxTemp);

    return roundedMaxTemp;
  }

  function minTemp() {
    let minTemp = props.data.temperature.minimum;
    let roundedMinTemp = Math.round(minTemp);

    return roundedMinTemp;
  }

  return (
    <div className="ForecastDay">
      <div className="row text-center mt-4 mb-4">
        <div className="col">
          <div className="opacity-75">{day()}</div>
          <div className="m-3">
            <Icon code={props.data.condition.icon} size={36} />
          </div>
          <div>
            <strong className="opacity-75 m-2">{maxTemp()}°C</strong>
            <span className="opacity-75">{minTemp()}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
