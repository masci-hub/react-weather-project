import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function formatDay(day) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let formattedDay = days[day.getDay()];

    return formattedDay;
  }

  return (
    <div className="ForecastDay">
      <div className="row text-center mt-4 mb-4">
        <div className="col">
          <div className="opacity-75">{formatDay(props.data.day)}</div>
          <div className="m-3">
            <Icon code={props.data.iconCode} size={36} />
          </div>
          <div>
            <strong className="opacity-75 m-2">
              {Math.round(props.data.maxTemperature)}°C
            </strong>
            <span className="opacity-75">
              {Math.round(props.data.minTemperature)}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
