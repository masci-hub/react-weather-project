import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Icon from "./Icon";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="weatherData mt-3 mb-3">
        <div className="row">
          <div className="col-6">
            <h1 className="mb-3 fw-bold">{props.data.city}</h1>
            <ul className="p-0 m-0">
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">
                Description: {props.data.description}
              </li>
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <Icon code={props.data.iconCode} />
            <Temperature celsius={Math.round(props.data.temperature)} />
          </div>
        </div>
      </div>
    </div>
  );
}
