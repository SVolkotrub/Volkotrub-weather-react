import "./DayForecast.css";
import React, {  useContext } from "react";
import FormattedMonth from "../formatDate/FormattedMonth";
import FormattedDay from "../formatDate/FormattedDay";
import WeatherIcon from "../current/WeatherIcon";
import { UnitsContext } from "../provider/UnitsProvider";
import { temperatureConversion } from "../convertor/temperatureConversion";

export default function DayForecast(props) {
    const { unit } = useContext(UnitsContext);
    
    const date = new Date(props.forecast.dt*1000 + props.timezone_offset * 60);
    
    return (
        <div className="day-forecast">
            <div className="row">
                <div className="col-4 text-start mb-3">
                    <FormattedDay  form="long" dayIndex={date.getDay()} />
                    <br/>
                    <FormattedMonth form="long" monthIndex={date.getMonth()} />{", "} {date.getDate()}
                </div>
                <div className="col-5 p-2">
                    <span className="forecast-temp-max">{temperatureConversion(unit, Math.round(props.forecast.temp.max))}°/</span>
                    <span className="forecast-temp-min">{temperatureConversion(unit, Math.round(props.forecast.temp.min))}°</span>
                </div>
                <div className="col-3 weather-icon-forecast">
                <WeatherIcon iconCode={props.forecast.weather[0].icon} />
                </div>
            </div>
        </div>
    );
}