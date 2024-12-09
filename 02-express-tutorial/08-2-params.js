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

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    product => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).json("Product Dose Not Exist");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.json("<h1>Complex query params</h1>");
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
