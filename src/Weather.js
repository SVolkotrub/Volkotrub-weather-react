import React from "react";

import "./Weather.css";
import SearchForm from "./SearchForm";
import Header from "./header/Header";
import CurrentForm from "./CurrentForm";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <Header />
        <div className="card-body">
          <SearchForm />
          <div className="row">
            <CurrentForm  defaultCity ="Kiev"/>
            <div className="col-lg col-right">
              <h2>Forecast</h2>
              {/* <Forecast
            longitude={weatherData.longitude}
            latitude={weatherData.latitude}
          /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
