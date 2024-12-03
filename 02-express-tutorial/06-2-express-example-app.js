// const app = require('express')(); // langsung memanggil methodnya
const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static("./1-5-http/navbar-app"));
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "1-5-http", "navbar-app", "index.html"));
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
