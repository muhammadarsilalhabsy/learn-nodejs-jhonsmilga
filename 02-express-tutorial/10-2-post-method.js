const express = require("express");
let { people } = require("./data");

const app = express();

// static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials!");
});

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
