import React from "react";
import DayForecast from "./DayForecast";
import "./WeatherForecast.css";

import { BallTriangle } from 'react-loader-spinner';

export default function WeatherForecast(props) {
   

    if (props.forecast !== null) {
        console.log(props.forecast);
        return (
        <div className="Forecast">
                <div className="forecast-title">Forecast</div>
                {props.forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (<div key={index}>
                            
                         <DayForecast forecast={dailyForecast} timezone_offset={props.timezone} /> 
                        </div>);
                    } else { return null; }
                    
                })}
                
        </div>
        );
    } else {
        
        return <BallTriangle color="#00BFFF" height={80} width={80} />;
    
    
 }
}