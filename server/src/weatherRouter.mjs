import express from "express";

import fetch from "node-fetch";

const weatherRouter = express.Router();

weatherRouter.get("/current", async (request, response) => {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=San Francisco&units=imperial&appid=" +
      process.env.API_KEY,
  ).then((res) => res.json());
  response.json(weather);
});

weatherRouter.get("/forecast", async (request, response) => {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=San Francisco&units=imperial&appid=" +
      process.env.API_KEY,
  ).then((res) => res.json());

  response.json(weather);
});

export default weatherRouter;
