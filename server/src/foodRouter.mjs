import e, { query } from "express";
import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.get("/:type", async (request, response) => {
  const type = request.params.type;
  const foodItems = await db.getFoodItems(type);
  response.json(foodItems);
});

router.get("/:filters", async (request, response) => {
  const filters = request.params.filters.split("+");
  if (filters[0] === "Peanut-Free" || filters[0] === "Dairy-Free") {
    const query = `NOT allergen LIKE '%${filters[0]}%' `;
    for (let i = 1; i < filters.length; i++) {
      if (filters[i] === "Peanut-Free" || filters[i] === "Dairy-Free") {
        query += `NOT allergen LIKE '%${filters[i]}%' `;
      } else {
        query += `AND allergen LIKE '%${filters[i]}%' `;
      }
    }
  } else {
    const query = `allergen LIKE '%${filters[0]}%' `;
    for (let i = 1; i < filters.length; i++) {
      if (filters[i] === "Peanut-Free" || filters[i] === "Dairy-Free") {
        query += `NOT allergen LIKE '%${filters[i]}%' `;
      } else {
        query += `AND allergen LIKE '%${filters[i]}%' `;
      }
    }
  }
  console.log(query);
  const filteredFoodItems = await db.getFilteredFood(filters);
  response.json(filteredFoodItems);
});

// router.use(express.json());
// router.post("/", async (request, response) => {
//   const task = await db.addTask(request.user.sub, request.body.name);
//   response.status(201).json(task);
// });

export default router;
