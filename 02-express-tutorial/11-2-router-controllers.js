const express = require("express");
const people = require("./11-router/routes/people");
const auth = require("./11-router/routes/auth");

const app = express();

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// pares json
app.use(express.json());

app.use("/api/people", people);
app.use(auth);

app.listen(5000, () => {
  console.log("app running on port 5000");
});
