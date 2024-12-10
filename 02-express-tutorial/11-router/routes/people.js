const express = require("express");
const {
  getPeople,
  createPeople,
  updatePeople,
  deletePeople
} = require("../controllers/people");
const router = express.Router();

/* 
router.get("/", getPeople);

router.post("/", createPeople);

router.put("/:personID", updatePeople);

router.delete("/:personID", deletePeople);
*/

// different flavours
router.route("/").get(getPeople).post(createPeople);
router.route("/:personID").put(updatePeople).delete(deletePeople);
module.exports = router;
