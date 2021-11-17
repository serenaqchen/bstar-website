import React from "react";

import styles from "./styles.module.scss";
import { currentWeatherIcon } from "./weatherFxns";

function CurrentWeather({
  currentWeather,
  units,
  forecastWeather,
  handleTempConversion,
}) {
  return (
    <div className={styles.currentWeather}>
      <h3 className="currentWeather__title">CURRENT WEATHER</h3>
      <p className="currentWeather__text">Inner Richmond</p>
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
        <p className="currentWeather__text">
          High: {forecastWeather[0].temp.max} &#176;{units} || Low:{" "}
          {forecastWeather[0].temp.min} &#176;{units}
        </p>
      )}
    </div>
  );
}

export default CurrentWeather;
