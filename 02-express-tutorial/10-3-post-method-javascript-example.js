const express = require("express");
let { people } = require("./data");

const app = express();

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false })); // digunakan untuk urlencoded

// parse json
app.use(express.json()); // digunakan untuk application/json

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
