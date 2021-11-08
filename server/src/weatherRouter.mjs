import express from "express";

import fetch from "node-fetch";

const weatherRouter = express.Router();

weatherRouter.get("/current/:units", async (request, response) => {
  let units = request.params.units;

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=37.782870&lon=-122.460660&units=${
      units === "F" ? "imperial" : "metric"
    }&appid=` + process.env.API_KEY,
  ).then((res) => res.json());
  response.json(weather.current);
});

weatherRouter.get("/forecast/:units", async (request, response) => {
  let units = request.params.units;

  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=37.782870&lon=-122.460660&units=${
      units === "F" ? "imperial" : "metric"
    }&appid=` + process.env.API_KEY,
  ).then((res) => res.json());

  response.json(weather.daily);
});

export default weatherRouter;
