import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./style.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
