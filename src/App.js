import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
        <Footer />
      </div>
    </div>
  );
}
