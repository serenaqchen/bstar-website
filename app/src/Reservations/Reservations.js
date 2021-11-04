import React from "react";

import * as apiClient from "../apiClient";
import Border from "../images/Border.png";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import styles from "./styles.module.scss";

function Reservations() {
  const [currentWeather, setCurrentWeather] = React.useState({});
  const [forecastWeather, setForecastWeather] = React.useState({});
  const [units, setUnits] = React.useState("F");
  const [fiveDayForecast, setFiveDayForecast] = React.useState(false);

  const handleForecastButton = (e) => {
    return fiveDayForecast
      ? setFiveDayForecast(true)
      : setFiveDayForecast(false);
  };

  const loadCurrentWeather = async () =>
    setCurrentWeather(await apiClient.getCurrentWeather());

  const loadForecastWeather = async () =>
    setForecastWeather(await apiClient.getForecastWeather());

  React.useEffect(() => {
    loadCurrentWeather();
    loadForecastWeather();
  }, []);

  console.log("current", currentWeather);
  console.log("forecast", forecastWeather);
  console.log(fiveDayForecast);

  return (
    <div className={styles.reservations}>
      <div className="title">
        <h1>RESERVATIONS & WAITLIST</h1>
        <img src={Border} alt="Blue Border"></img>
        <p>
          Due to the pandemic, we have expanded our restaurant and now have
          outdoor seating. Check the current weather and come enjoy some
          delicious food in our new outdoor dinning setup!{" "}
        </p>
      </div>
      <section className="currentWeather">
        <CurrentWeather
          currentWeather={currentWeather}
          units={units}
          forecastWeather={forecastWeather}
        />
      </section>
      <div className="buttonFunctions">
        {/* <button>Convert to {units === "F" ? "C" : "F"}</button> */}
        {!fiveDayForecast && (
          <button onClick={handleForecastButton}>Show 5-Day Forecast</button>
        )}
      </div>
      <section className="forecastWeather display">
        <ForecastWeather forecastWeather={forecastWeather} units={units} />
      </section>
    </div>
  );
}

export default Reservations;
