const express = require("express");
const authorize = require("./09-0-authorize");
const logger = require("./09-0-logger");
const morgan = require("morgan");

// pada middleware kita bisa menambahkan (our own, express, third party) middleware

const app = express();

// express middleware
// app.use(express.static("./public"));
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("<h1>Setup middleware</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/api/carts", (req, res) => {
  res.send("<h1>carts</h1>");
});

// our own middleware
app.get("/api/products", authorize, (req, res) => {
  console.log(req.user);
  res.send("<h1>products</h1>");
});

app.get("*", logger, (req, res) => {
  res.send("<p> URL Not found </p>");
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
