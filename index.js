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

app.get("/github", async (req, res) => {
  await fetch("https://api.github.com/users/FaiyazUllah786")
    .then((response) =>
      response.json().then((data) => {
        res.json(data);
      })
    )
    .catch((err) => {
      console.log("Error Occured", err.status);
      res.json(err);
    })
    .finally(() => res.json({ message: "No Data Found" }));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server is running on PORT " + PORT));
