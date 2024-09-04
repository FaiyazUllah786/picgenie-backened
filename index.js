import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Server is running<h1/>");
});

app.get("/login", (req, res) => {
  res.send("<h2>Please log in the app<h2/>");
});

app.listen(process.env.PORT, () =>
  console.log("Server is running on PORT " + process.env.PORT)
);
