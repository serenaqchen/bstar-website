import React from "react";

import styles from "./styles.module.scss";
import {
  dayConversion,
  dateConversion,
  currentWeatherIcon,
} from "./weatherFxns";

function CurrentWeather({
  currentWeather,
  units,
  forecastWeather,
  handleTempConversion,
}) {
  return (
    <div className={styles.currentWeather}>
      {/* <h2>{dayConversion(currentWeather.dt)}</h2> */}

      <div className="currentWeatherCard">
        <h3>CURRENT WEATHER</h3>
        <p>Inner Richmond</p>
        {currentWeather.weather &&
          currentWeatherIcon(currentWeather.weather[0].main)}
        <button
          data-testid="currentWeatherButton"
          className="currentTemp"
          onClick={handleTempConversion}
        >
          {currentWeather.temp ? currentWeather.temp : "Loading"} &#176;{units}
        </button>
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
