const app = require("express")();
const logger = require("./09-0-logger");

// dalam penggunaan app.use urutan eksekusi kode sangat penting
// app.use(logger) // akan menambahkan middleware pada seluruh route tanpa terkecuali
app.use("/api", logger); // akan menambahkan middleware pada route yang awalannya '/api'

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
  res.send("<h1>products</h1>");
});

app.get("*", logger, (req, res) => {
  res.send("<p> URL Not found </p>");
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
