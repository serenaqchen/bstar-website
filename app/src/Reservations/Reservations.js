import React from "react";

import Border from "../images/Border.png";

import CurrentWeather from "./CurrentWeather";

function Reservations() {
  //This will go into apiClient file when brunch menu is merged to main---------------
  const getCurrentWeather = () => _get("/api/weather/current");
  const getForecastWeather = () => _get("/api/weather/forecast");

  const _get = async (url) => (await fetch(url)).json();
  //------------------------------------------------------------------------------------

  const [currentWeather, setCurrentWeather] = React.useState({});
  const [forecastWeather, setForecastWeather] = React.useState({});
  const [units, setUnits] = React.useState("F");

  const loadCurrentWeather = async () =>
    setCurrentWeather(await getCurrentWeather());

  const loadForecastWeather = async () =>
    setForecastWeather(await getForecastWeather());

  React.useEffect(() => {
    loadCurrentWeather();
    loadForecastWeather();
  }, []);

  console.log("current", currentWeather);
  console.log("forecast", forecastWeather);

  return (
    <div className="reservations">
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
          dt={forecastWeather[0].dt}
          high={forecastWeather[0].temp.max}
          low={forecastWeather[0].temp.min}
        />
      </section>
      <section className="forecastWeather"></section>
    </div>
  );
}

export default Reservations;
