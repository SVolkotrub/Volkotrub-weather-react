import React, {  useContext } from "react";
import FormattedDate from "../formatDate/FormattedDate";
import "./CurrentForm.css";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";
import { UnitsContext } from "../provider/UnitsProvider";
import { temperatureConversion } from "../convertor/temperatureConversion";


export default function CurrentWeather(props) {
  const { unit } = useContext(UnitsContext);

    return (
        <>
            <div className="cur-city-title">
        {props.weatherData.city}
      </div>
      <div className="row">
        <div className="col cur-date">
         <span id="cur-date"> <FormattedDate timezone_off={props.timezone} dt={props.weatherData.dt} /></span>
        </div>
      </div>
      <div className="row">
          <div className="col" id="cur-weather">
            <CurrentTemperature celsius={props.weatherData.temperature}  />
          
            <div className="cur-feels-like-title">
            Feels like  
            <span id="cur-feels-like-temp">{ " "}{temperatureConversion(unit, props.weatherData.feelsLike)}</span>
            <span  > ° </span>
          </div>
          <div className="weather-emoji" id="cur-weather-emoji">
              <WeatherIcon iconCode={props.weatherData.weatherIcon} />
              
          </div>
          <div className="row">
            <div className="col text-capitalize" id="weather-description">
              {" "}
              {props.weatherData.description}
            </div>
            <div className="col">
              <span className="wind-title">
                Wind:
                <span id="wind"> {props.weatherData.wind}</span>
                m/h
              </span>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}