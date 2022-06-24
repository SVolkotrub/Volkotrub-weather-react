import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./current/CurrentWeather";
import Header from "./header/Header";
import WeatherForecast from "./forecast/WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const code = "a687e5ea475e61b3eb2a5486106b4e28";

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${code}`;
    axios.get(`${apiUrl}`).then(handleResponse).catch(function (error) {
       alert('Unfortunately, we cannot find such a city in our database, please check the correct city name or try another city');});
  }
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      weatherIcon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat
    })
   
  }
  if (weatherData.ready) {
    return (
   < div className="Weather">
      <div className="card">
        <Header />
        <div className="card-body">
           <div className="row text-left">
            <div className="col-md search">
               <form id="searchByCity" onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="q"
                  id="city-input"
                  placeholder="Enter a city..."
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button className="submit ms-3" id="search-btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
               </form>
              <button id="cur-loc-btn" className="ms-3">
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg col-left">
                <CurrentWeather weatherData={weatherData } />
            </div>
            <div className="col-lg col-right">
              <WeatherForecast longitude={weatherData.longitude}
              latitude={weatherData.latitude}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } else {
    search();
    return "Loading...";
}
  
}
