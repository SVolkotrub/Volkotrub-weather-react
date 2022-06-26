import React, { useState, useEffect } from "react";
import DayForecast from "./DayForecast";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [timezone, setTimezone] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
        setTimezone(response.data.timezone_offset);
        

    }
    function load() {
        const code = "a687e5ea475e61b3eb2a5486106b4e28";
        let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${code}`;
    
        axios.get(apiUrlForecast).then(handleResponse).catch(function (error) {
            alert('Unfortunately, something is wrong with connection to database...');
        });
    }
    if (loaded) {
        console.log(forecast);
        return (
        <div className="Forecast">
                <div className="forecast-title">Forecast</div>
                {forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (<div key={index}>
                            <DayForecast forecast={dailyForecast} timezone_offset={timezone} />
                        </div>);
                    } else { return null; }
                    
                })}
                
        </div>
        );
    } else {
        
        load();
        return "Loading...";
    
    
 }
}