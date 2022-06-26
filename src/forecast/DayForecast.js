import "./DayForecast.css";
import FormattedMonth from "../formatDate/FormattedMonth";
import FormattedDay from "../formatDate/FormattedDay";
import WeatherIcon from "../current/WeatherIcon";

export default function DayForecast(props) {
    function maxTemperature() {
        let temperature = Math.round(props.forecast.temp.max);
        return `${temperature}°C`;
    }
    function minTemperature() {
        let temperature = Math.round(props.forecast.temp.min);
        return `${temperature}°C`;
    }
    const date = new Date(props.forecast.dt + props.timezone_offset * 60*1000);
    
    // let offset = props.timezone_offset / 60;
    // let hours = date.getHours();

    // newDate.setHours(hours - offset);
   
    return (
        <div className="day-forecast">
            <div className="row">
                <div className="col-4 text-start mb-3">
                    <FormattedDay  form="long" dayIndex={date.getDay()} />
                    <br/>
                    <FormattedMonth form="long" monthIndex={date.getMonth()} />{", "} {date.getDate()}
                </div>
                <div className="col-5 p-2">
                    <span className="forecast-temp-max">{maxTemperature() }/</span>
                    <span className="forecast-temp-min">{minTemperature()}</span>
                </div>
                <div className="col-3 weather-icon-forecast">
                <WeatherIcon iconCode={props.forecast.weather[0].icon} />
                </div>
            </div>
        </div>
    );
}