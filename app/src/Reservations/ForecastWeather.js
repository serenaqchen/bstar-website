import React from "react";

import styles from "./styles.module.scss";
import {
  dayConversion,
  dateConversion,
  currentWeatherIcon,
} from "./weatherFxns";

function ForecastWeather({ forecastWeather, units }) {
  let days = [1, 2, 3, 4, 5];
  return (
    <div className={styles.forecastWeather}>
      {forecastWeather[1] &&
        days.map((index) => (
          <div className="forecastWeatherCard">
            <h1>{dayConversion(forecastWeather[index].dt)}</h1>
            <p>{dateConversion(forecastWeather[index].dt)}</p>
            {currentWeatherIcon(forecastWeather[index].weather[0].main)}
            <p>
              High: {forecastWeather[index].temp.max} &#176;{units} || Low:{" "}
              {forecastWeather[index].temp.min} &#176;{units}
            </p>
          </div>
        ))}
    </div>
  );
}

export default ForecastWeather;
