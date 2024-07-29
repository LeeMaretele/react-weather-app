import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize">{props.weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
