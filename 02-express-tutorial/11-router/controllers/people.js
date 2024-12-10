let { people } = require("../../data");
const getPeople = (_, res) => {
  res.status(200).json(people);
};

const createPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
  const { personID } = req.params;

  // check if person exist
  const person = people.find(aPerson => Number(personID) === aPerson.id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${personID}` });
  }

  const newPeople = people.filter(aPerson => aPerson.id !== Number(personID));

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPeople,
  updatePeople,
  deletePeople
};
