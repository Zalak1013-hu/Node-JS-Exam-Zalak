import express from "express";
import "dotenv/config";
import database from "./configs/database.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = 8081;

app.use(bodyParser.json());

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("server Started");
  console.log(`http://localhost:${port}`);
});
