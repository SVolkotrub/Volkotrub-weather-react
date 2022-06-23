import React, { useState } from "react";
import "./CurrentForm.css";

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }
    if (unit === "celsius") {
        return (
            <div className="cur-temperature">
                <span className="temp-value" id="cur-temp-value">
                    {props.celsius}
                </span>
                <span className="unit">°C | <a className="unit-link" href="/" onClick={showFahrenheit}>°F</a></span>
            </div>
        );
    } else {
         
        return (
            <div className="cur-temperature">
                <span className="temp-value" id="cur-temp-value">
                    {Math.round(fahrenheit())}
                </span>
                <span className="unit"><a className="unit-link" href="/" onClick={showCelsius}>°C</a> | °F</span>
            </div>
        );
    }
}