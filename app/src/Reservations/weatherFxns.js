import Clear from "../images/icons/Clear.svg";
import Clouds from "../images/icons/Clouds.svg";
import Drizzle from "../images/icons/Drizzle.svg";
import Rain from "../images/icons/Rain.svg";
import Snow from "../images/icons/Snow.svg";
import Thunder from "../images/icons/Thunder.svg";
import atmosphere from "../images/icons/atmosphere.svg";

export const dateConversion = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dt = new Date(date * 1000);
  return dt.toLocaleDateString("en-US", options);
};

export const currentWeatherIcon = (weatherCondition) => {
  let atmosphereConditions = [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ];

  let allCoditions = ["Clear", "Clouds", "Drizzle", "Rain", "Snow", "Thunder"];

  if (atmosphereConditions.includes(weatherCondition)) {
    return (
      <img
        className="conditionIcon"
        src={atmosphere}
        alt={weatherCondition}
      ></img>
    );
  } else if (weatherCondition === "Clear") {
    return (
      <img className="conditionIcon" src={Clear} alt={weatherCondition}></img>
    );
  } else if (weatherCondition === "Clouds") {
    return (
      <img className="conditionIcon" src={Clouds} alt={weatherCondition}></img>
    );
  } else if (weatherCondition === "Drizzle") {
    return (
      <img className="conditionIcon" src={Drizzle} alt={weatherCondition}></img>
    );
  } else if (weatherCondition === "Rain") {
    return (
      <img className="conditionIcon" src={Rain} alt={weatherCondition}></img>
    );
  } else if (weatherCondition === "Snow") {
    return (
      <img className="conditionIcon" src={Snow} alt={weatherCondition}></img>
    );
  } else if (weatherCondition === "Thunderstorm") {
    return (
      <img className="conditionIcon" src={Thunder} alt={weatherCondition}></img>
    );
  }
};
