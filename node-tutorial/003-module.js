// CommandJs, every file is module (by default)
// Module -> Encapsulate code (only share minimum)
const names = require("./003-1-names");
const sayHi = require("./003-2-utils");
console.log(names);

sayHi("otong");
sayHi(names.abilal);
sayHi(names.ajib);

const sum = require("./003-4-mind-granade");
