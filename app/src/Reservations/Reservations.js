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
    fiveDayForecast ? setFiveDayForecast(false) : setFiveDayForecast(true);
    console.log("fxn", fiveDayForecast);
  };

  const handleTempConversion = (e) => {
    units === "F" ? setUnits("C") : setUnits("F");
  };

  const loadCurrentWeather = async () =>
    setCurrentWeather(await apiClient.getCurrentWeather(units));

  const loadForecastWeather = async () =>
    setForecastWeather(await apiClient.getForecastWeather(units));

  React.useEffect(() => {
    loadCurrentWeather();
    loadForecastWeather();
  }, [units]);

  console.log(process.env.MAPS_API_KEY);

  return (
    <div className={styles.reservations}>
      <div className="title">
        <h1>RESERVATIONS & WAITLIST</h1>
        <img className="blueBorder" src={Border} alt="Blue Border"></img>
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
          handleTempConversion={handleTempConversion}
        />
      </section>
      <div className="buttonFunctions">
        <button className="forecastButton" onClick={handleForecastButton}>
          {fiveDayForecast ? "Close" : "Show 5-Day Forecast"}
        </button>
      </div>
      <section
        className={`forecastWeather ${
          !fiveDayForecast && "forecastWeather--displayNone"
        }`}
      >
        <ForecastWeather forecastWeather={forecastWeather} units={units} />
      </section>
      <section className="description">
        <p className="description__margin">
          We accept reservations online or by phone. If you are unable to find
          your desired reservation time, please try adding your name to our
          waitlist. You can do this in person at the restaurant or you can check
          wait times and add your name before you even step out your front door!
        </p>
        <a href="https://www.bstarbar.com/" target="_blank">
          <button className="reservations">MAKE A RESERVATION</button>
        </a>

        <p>Need Directions?</p>
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB8-o6DF9Bp9qm3Na5IAttS0hWM5_t-Odg&q=place_id:ChIJe477gDmHhYARrtTtY3v18ZQ`}
        ></iframe>
      </section>
    </div>
  );
}

export default Reservations;
