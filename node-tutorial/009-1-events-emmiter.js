const EventEmitter = require("events");

const costumeEmitter = new EventEmitter();

costumeEmitter.on("res", (name, id) => {
  console.log(`data received from user name: ${name} and id: ${id}`);
});

costumeEmitter.on("res", () => {
  console.log("hallo guys");
});

costumeEmitter.emit("res", "utong", 12);
