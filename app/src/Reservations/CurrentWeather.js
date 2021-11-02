import React from "react";

import { dateConversion, currentWeatherIcon } from "./weatherFxns";

function CurrentWeather({ currentWeather }) {
  return (
    <div>
      <h1>SAN FRANCISCO</h1>
      <h2>CURRENT WEATHER</h2>
      <p>{dateConversion(currentWeather.dt)}</p>
      {currentWeatherIcon(currentWeather["weather"][0]["main"])}
    </div>
  );
}

export default CurrentWeather;
