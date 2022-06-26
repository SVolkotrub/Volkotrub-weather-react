import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Weather from "../Weather";
import Footer from "../footer/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity ="Kyiv" />
        <Footer />
      </div>
    </div>
  );
}
