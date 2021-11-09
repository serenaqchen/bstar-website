import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.get("/:type", async (request, response) => {
  const type = request.params.type;
  const foodItems = await db.getFoodItems(type.toLowerCase());
  response.json(foodItems);
});

router.get("/modifications/:type", async (request, response) => {
  const type = request.params.type;
  const foodItems = await db.getModifications(type.toLowerCase());
  response.json(foodItems);
});

router.use(express.json());
router.post("/", async (request, response) => {
  const task = await db.addTask(request.user.sub, request.body.name);
  response.status(201).json(task);
});

export default router;
