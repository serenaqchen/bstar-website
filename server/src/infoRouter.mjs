import express from "express";

import { moreInfo } from "./moreInfo.mjs";

const router = express.Router();

router.get("/", async (request, response) => {
  response.json(moreInfo);
});

// router.use(express.json());
// router.post("/", async (request, response) => {
//   const task = await db.addTask(request.user.sub, request.body.name);
//   response.status(201).json(task);
// });

export default router;
