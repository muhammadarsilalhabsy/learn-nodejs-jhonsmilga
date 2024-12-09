const app = require("express")();
const authorize = require("./09-0-authorize");
const logger = require("./09-0-logger");

// urutan array eksekusi middleware ini penting
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("<h1>Setup middleware</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/api/carts", (req, res) => {
  res.send("<h1>carts</h1>");
});

app.get("/api/products", (req, res) => {
  console.log(req.user);
  res.send("<h1>products</h1>");
});

app.get("*", logger, (req, res) => {
  res.send("<p> URL Not found </p>");
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
