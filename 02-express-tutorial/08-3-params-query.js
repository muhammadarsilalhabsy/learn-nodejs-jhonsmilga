const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Products</h1> <a href='/api/products'>products</a>");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // return res.status(200).send("No product matched your search");
    return res.status(200).json({
      data: [],
      success: true
    });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
