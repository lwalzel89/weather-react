import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <App />
    <div className="p">
      This project was coded by{" "}
      <a href="https://github.com/lwalzel89" target="_blank">
        👩🏻‍💻 Lisa Walzel
      </a>
      , is{" "}
      <a href="https://github.com/lwalzel89/weather-react" target="_blank">
        open-sourced on GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="https://mellow-beijinho-039913.netlify.app/" target="_blank">
        Netlify
      </a>
      .
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
