import React from "react";
import "./CurrentForm.css";
import "./Weather.css";

export default function CurrentForm() {
  let weatherData = {
    city: "Boston",
    day: "Tuesday",
    time: "10:00 AM",
    description: "Partly cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: 25,
    humidity: 50,
    wind: 5,
    feelsLike: 25
  };
  return (
    <div className="col-lg col-left">
      <div className="cur-city-title">
        {weatherData.city}
      </div>
      <div className="row">
        <div className="col cur-date">
          Last upd: <span id="cur-date">{weatherData.time}</span>
        </div>
      </div>
      <div className="row">
        <div className="col" id="cur-weather">
          <div className="cur-temperature">
            <span className="temp-value" id="cur-temp-value">
              {weatherData.temperature}
            </span>
            <span className="unit" id="cur-unit">
              °C
            </span>
          </div>
          <div className="cur-feels-like-title">
            Feels like  
            <span id="cur-feels-like-temp">{ " "}{weatherData.feelsLike}</span>
            <span  > °C </span>
          </div>
          <div className="weather-emoji" id="cur-weather-emoji">
            <div className="weatherIcon">
              <img src={weatherData.imgUrl} alt="" className="icon" />
            </div>
          </div>
          <div className="row">
            <div className="col" id="weather-description">
              {" "}
              {weatherData.description}
            </div>
            <div className="col">
              <span className="wind-title">
                Wind:
                <span id="wind"> {weatherData.wind}</span>
                m/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
