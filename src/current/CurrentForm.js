import React, { useState } from "react";
import axios from "axios";
import "./CurrentForm.css";
import "../Weather.css";
import FormattedDate from "../formatDate/FormattedDate";

export default function CurrentForm(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt *1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      feelsLike: Math.round(response.data.main.feels_like)
    })
   
  }
  if (weatherData.ready) {
  return (
    <div className="col-lg col-left">
      <div className="cur-city-title">
        {weatherData.city}
      </div>
      <div className="row">
        <div className="col cur-date">
          Last upd: <span id="cur-date"> <FormattedDate date={weatherData.date} /></span>
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
              <img src={weatherData.imgUrl} alt={weatherData.description} className="icon" />
            </div>
          </div>
          <div className="row">
            <div className="col text-capitalize" id="weather-description">
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
  } else {
    const code = "a687e5ea475e61b3eb2a5486106b4e28";
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${props.defaultCity}&appid=${code}`;
  axios.get(`${apiUrl}`).then(handleResponse).catch(function (error) {
       alert('Unfortunately, we cannot find such a city in our database, please check the correct city name or try another city');});
    return "Loading...";
}

  
  
}
