import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      Coded by{" "}
      <a
        href="https://portfolio-volkotrub.netlify.app"
        target="_blank"
        rel="noreferrer noopener"
        title="Svitlana Volkotrub"
      >
        Svitlana Volkotrub
      </a>{" "}
      and project is{" "}
      <a
        href="https://github.com/SVolkotrub/Volkotrub-weather-react"
        target="_blank"
        rel="noreferrer noopener"
        title="Project on GitHub"
      >
        open-sourced
      </a>
    </footer>
  );
}
