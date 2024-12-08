const express = require("express");
const { people, products } = require("./data");
const app = express();
app.get("/", (req, res) => {
  res.json(products);
});
app.listen(5000, () => {
  console.log("App running in port 5000");
});
