import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="row text-left">
      <div className="col-md search">
        <form id="searchByCity">
          <input
            type="search"
            name="q"
            id="city-input"
            placeholder="Enter city"
            autoComplete="off"
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
  );
}
