import express from "express";

import fetch from "node-fetch";

const weatherRouter = express.Router();

weatherRouter.get("/current", async (request, response) => {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=37.782870&lon=-122.460660&units=imperial&appid=" +
      process.env.API_KEY,
  ).then((res) => res.json());
  response.json(weather.current);
});

weatherRouter.get("/forecast", async (request, response) => {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=37.782870&lon=-122.460660&units=imperial&appid=" +
      process.env.API_KEY,
  ).then((res) => res.json());

  response.json(weather.daily);
});

export default weatherRouter;
