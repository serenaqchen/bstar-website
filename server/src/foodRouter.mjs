import express from "express";

import * as db from "./db.mjs";

const router = express.Router();

router.get("/:type", async (request, response) => {
  const type = request.params.type;
  const foodItems = await db.getFoodItems(type);
  response.json(foodItems);
});

// router.get("/filters/:type/:filters", async (request, response) => {
//   let filters = request.params.filters.split("+");
//   let query = `SELECT * FROM food WHERE brunch = true`;
//   if (filters[0] === "Peanut-Free" || filters[0] === "Dairy-Free") {
//     query = query.concat(
//       ` AND NOT allergens LIKE '%${filters[0]}%' OR allergens is null `,
//     );
//     for (let i = 1; i < filters.length; i++) {
//       if (filters[i] === "Peanut-Free" || filters[i] === "Dairy-Free") {
//         query = query.concat(
//           `AND NOT allergens LIKE '%${filters[i]}%' OR allergens is null `,
//         );
//       } else {
//         query = query.concat(`AND allergens LIKE '%${filters[i]}%' `);
//       }
//     }
//   } else {
//     query = query.concat(` AND allergens LIKE '%${filters[0]}%' `);
//     for (let i = 1; i < filters.length; i++) {
//       if (filters[i] === "Peanut-Free" || filters[i] === "Dairy-Free") {
//         query = query.concat(`AND NOT allergens 'LIKE %${filters[i]}%' `);
//       } else {
//         query = query.concat(
//           `AND allergens LIKE '%${filters[i]}%' OR allergens is null `,
//         );
//       }
//     }
//   }
//   console.log(query);
//   const filteredFoodItems = await db.getFilteredFood(query);
//   response.json(filteredFoodItems);
// });

// router.get("/filters/:type/:course/:filters", async (request, response) => {
//   const type = request.params.type;
//   const course = request.params.course;
//   let filters = request.params.filters.split("+");
//   let query = `SELECT * FROM food WHERE ${type.toLowerCase()}_course = '${course}'`;
//   if (filters[0] === "Peanut-Free" || filters[0] === "Dairy-Free") {
//     query = query.concat(
//       ` AND NOT allergens LIKE '%${filters[0]}%' OR allergens is null `,
//     );
//     for (let i = 1; i < filters.length; i++) {
//       if (filters[i] === "Peanut-Free" || filters[i] === "Dairy-Free") {
//         query = query.concat(
//           `AND NOT allergens LIKE '%${filters[i]}%' OR allergens is null `,
//         );
//       } else {
//         query = query.concat(`AND allergens LIKE '%${filters[i]}%' `);
//       }
//     }
//   } else {
//     query = query.concat(` AND allergens LIKE '%${filters[0]}%' `);
//     for (let i = 1; i < filters.length; i++) {
//       if (filters[i] === "Peanut-Free" || filters[i] === "Dairy-Free") {
//         query = query.concat(
//           `AND NOT allergens 'LIKE %${filters[i]}%' OR allergens is null `,
//         );
//       } else {
//         query = query.concat(`AND allergens LIKE '%${filters[i]}%' `);
//       }
//     }
//   }
//   console.log(query);
//   const filteredFoodItems = await db.getFilteredFood(query);
//   response.json(filteredFoodItems);
// });

router.use(express.json());
router.post("/", async (request, response) => {
  const task = await db.addTask(request.user.sub, request.body.name);
  response.status(201).json(task);
});

export default router;
