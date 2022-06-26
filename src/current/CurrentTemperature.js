import React, {  useContext } from "react";
import "./CurrentForm.css";
import { UnitsContext } from "../provider/UnitsProvider";
import { temperatureConversion } from "../convertor/temperatureConversion";


export default function CurrentTemperature(props) {
    const { unit, setUnit } = useContext(UnitsContext);
    
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
   
    if (unit === "celsius") {
        return (
            <div className="cur-temperature">
                <span className="temp-value" id="cur-temp-value">
                    {temperatureConversion(unit, props.celsius)}
                    
                </span>
                <span className="unit">°C | <a className="unit-link" href="/" onClick={showFahrenheit}>°F</a></span>
            </div>
        );
    } else {
         
        return (
            <div className="cur-temperature">
                <span className="temp-value" id="cur-temp-value">
                    {temperatureConversion(unit, props.celsius)}
                    
                </span>
                <span className="unit"><a className="unit-link" href="/" onClick={showCelsius}>°C</a> | °F</span>
            </div>
        );
    }
}