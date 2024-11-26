const path = require("path");

console.log(path.sep);

const simpleTxtFilePath = path.join(
  "/node-tutorial",
  "content",
  "sub-content",
  "simple.txt"
);
console.log(simpleTxtFilePath);

const base = path.basename(simpleTxtFilePath);
console.log(base);

const absolute = path.resolve(
  __dirname,
  "content",
  "sub-content",
  "simple.txt"
);
console.log(absolute);
