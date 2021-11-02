import React from "react";

import styles from "./styles.module.scss";
import {
  dayConversion,
  dateConversion,
  currentWeatherIcon,
} from "./weatherFxns";

function CurrentWeather({ currentWeather, units }) {
  return (
    <div className={styles.currentWeather}>
      <h1>SAN FRANCISCO</h1>
      <div className="currentWeatherCard">
        <h2>{dayConversion(currentWeather.dt)}</h2>
        <p>{dateConversion(currentWeather.dt)}</p>
        <p>CURRENT WEATHER</p>
        {currentWeather.weather &&
          currentWeatherIcon(currentWeather.weather[0].main)}
        <p>{currentWeather.weather && currentWeather.weather[0].main}</p>
        <p>
          {currentWeather.temp && currentWeather.temp} &#176;{units}
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
