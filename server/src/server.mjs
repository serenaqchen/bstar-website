import express from "express";
import mime from "mime-types";

import jwtCheck from "./jwtCheck.mjs";
import userRouter from "./userRouter.mjs";
import weatherRouter from "./weatherRouter.mjs";
import foodRouter from "./foodRouter.mjs";
import infoRouter from "./infoRouter.mjs";

const app = express();

app.use("/api/tasks", jwtCheck, taskRouter);
app.use("/api/users", jwtCheck, userRouter);
app.use("/api/weather", weatherRouter);
app.use("/api/foodItems", foodRouter);
app.use("/api/info", infoRouter);

// Do not comment out or delete this end point. The React development server
// won't start until it pings this end point successfully.
app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
