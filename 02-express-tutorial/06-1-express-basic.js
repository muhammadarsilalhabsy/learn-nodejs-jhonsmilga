// const app = require('express')(); // langsung memanggil methodnya
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>home page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>about page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>not found page</h1>");
});

app.listen(5000, () => {
  console.log("app running on port 5000...");
});
