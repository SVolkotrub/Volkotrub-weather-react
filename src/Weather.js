import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import { BallTriangle } from 'react-loader-spinner';
import CurrentWeather from "./current/CurrentWeather";
import Header from "./header/Header";
import WeatherForecast from "./forecast/WeatherForecast";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const code = "a687e5ea475e61b3eb2a5486106b4e28";
  const [inputCity, setInputCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [timezone, setTimezone] = useState(null);
  

  useEffect(() => {
    
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${code}`;
      axios.get(`${apiUrl}`).then(handleResponse).catch(function (error) {
        alert('Unfortunately, we cannot find such a city in our database, please check the correct city name or try another city');
      });
   
    function handleResponse(response) {
       console.log(response.data);
      setWeatherData({
          ready: true,
          temperature: Math.round(response.data.main.temp),
          wind: Math.round(response.data.wind.speed),
          city: response.data.name,
          // timezone: response.data.timezone,
          dt: response.data.dt,
          weatherIcon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          feelsLike: Math.round(response.data.main.feels_like),
          longitude: response.data.coord.lon,
          latitude: response.data.coord.lat
      });
      setTimezone(response.data.timezone);
      let lat = response.data.coord.lat;
      let lon = response.data.coord.lon;
      updateForecast(lat, lon);
    }
    function updateForecast(lat,lon) {
      
      const codeF = "95dcef51903362e4f6088d6cf4a151b1";
      console.log(lat);
      let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${codeF}`;
      axios.get(apiUrlForecast).then(setForecastWeather).catch(function (error) {
            alert('Unfortunately, something is wrong with connection to database...');
        });
    }
    function setForecastWeather(response) {
      console.log(`setForecastweather response`);
      console.log(response.data);
      setForecast(response.data.daily);
      
      
    }
  
    
  },[city, setWeatherData]  );

  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getLocation);
  }
  function getLocation(position) {
    
    let apiUrlCurrentLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${code}`;
    axios.get(apiUrlCurrentLocation).then(handleResponseCurrentLocation).catch(function (error) { alert("Unfortunately, something was going wrong...")});
    
  }
  
  function handleResponseCurrentLocation(response) {
    setCity(response.data.name);
    console.log("Response from current location");
    console.log(response);
    
  } 

  function handleSubmit(event) {
    event.preventDefault();
    if (inputCity) { setCity(inputCity);
    
    } else {  alert("Unfortunately, you didn't enter a city. Empty cityname is not valid for searching");}
    
  }
  function handleCityChange(event) {
    setInputCity(event.target.value);
  }
  
  if (weatherData !== null ) {
    
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
              <button id="cur-loc-btn" className="ms-3" onClick={handleCurrentLocation}>
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md col-left">
                <CurrentWeather weatherData={weatherData } timezone={timezone} />
            </div>
            <div className="col-md col-right">
                <WeatherForecast forecast={forecast} timezone={timezone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } else {
    
    return <BallTriangle color="#00BFFF" height={80} width={80} />;
}
  
}
