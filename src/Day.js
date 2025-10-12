import React from "react";
import Icon from "./Icon";

import "./Day.css";

export default function Day(props) {
  return (
    <div className="Day">
      <div className="row text-center mt-4 mb-4">
        <div className="col">
          <div className="day  opacity-75">{props.data.day}</div>
          <div className="icon m-3">
            <Icon code={props.data.iconCode} size={36} />
          </div>
          <div className="temperatures">
            <strong className="maxTemperature opacity-75 m-2">
              {Math.round(props.data.maxTemperature)}°C
            </strong>
            <span className="minTemperature opacity-75">
              {Math.round(props.data.minTemperature)}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
