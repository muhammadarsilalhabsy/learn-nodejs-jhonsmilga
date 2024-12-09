const app = require("express")();

const logger = (req, res, next) => {
  const { method, url } = req;
  const currentYear = new Date().getFullYear();

  console.log(method, url, currentYear);
  next(); // lanjutkan ke req, res selanjutnya
};

app.get("/", logger, (req, res) => {
  res.send("<h1>Setup middleware</h1>");
});

app.get("/about", logger, (req, res) => {
  res.send("<h1>Setup middleware</h1>");
});

app.get("*", logger, (req, res) => {
  res.send("<p> URL Not found </p>");
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
