const express = require("express");
const app = express();
const { validator } = require("./validator.js");
const port = 8080;
app.use(express.json());

let movies = [];

app.get("/", (req, res) => {
  res.send("Express validator");
});

app.get("/movies", (req, res) => {
  res.status(200).send(movies);
});

app.use(validator);
app.post("/movies", (req, res) => {
  movies.push(req.body);
  res.send("Movie added");
});

app.listen(port, () => {
  console.log("SERVER RUNNING AT", port);
});
