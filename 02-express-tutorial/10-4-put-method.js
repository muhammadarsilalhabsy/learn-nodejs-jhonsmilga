const express = require("express");
let { people } = require("./data");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hola");
});

app.get("/api/people", (_, res) => {
  res.status(200).json(people);
});

app.put("/api/people/:personID", (req, res) => {
  const { name } = req.body;
  const { personID } = req.params;

  // check if person exist
  const person = people.find(aPerson => Number(personID) === aPerson.id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${personID}` });
  }

  const newPeople = people.map(aPerson => {
    if (aPerson.id === Number(personID)) {
      aPerson.name = name;
    }
    return aPerson;
  });

  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("app running on port 5000");
});
