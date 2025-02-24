const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Products</h1> <a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map(product => {
    const { id, name, image } = product;

    return { id, name, image };
  });
  res.json(newProducts);
});
app.listen(5000, () => {
  console.log("App running on port 5000");
});
