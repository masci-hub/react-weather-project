import React from "react";
import Icon from "./Icon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row text-center mt-4 mb-4">
        <div className="col">
          <div className="day  opacity-75">Mon</div>
          <div className="icon m-3">
            <Icon code="01d" size={36} />
          </div>
          <div className="temperatures">
            <strong className="minTemperature opacity-75 m-2">19°</strong>
            <span className="maxTemperature opacity-75">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
