import React from "react";

import styles from "./styles.module.scss";
import {
  dayConversion,
  dateConversion,
  currentWeatherIcon,
} from "./weatherFxns";

function CurrentWeather({ currentWeather, units, forecastWeather }) {
  return (
    <div className={styles.currentWeather}>
      <h2>{dayConversion(currentWeather.dt)}</h2>

      <div className="currentWeatherCard">
        <h3>SAN FRANCISCO</h3>
        <p className="date">{dateConversion(currentWeather.dt)}</p>
        {currentWeather.weather &&
          currentWeatherIcon(currentWeather.weather[0].main)}
        <p>{currentWeather.weather && currentWeather.weather[0].main}</p>
        <p className="currentTemp">
          {currentWeather.temp && currentWeather.temp} &#176;{units}
        </p>
        {forecastWeather[0] && (
          <p>
            High: {forecastWeather[0].temp.max} &#176;{units} || Low:{" "}
            {forecastWeather[0].temp.min} &#176;{units}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
