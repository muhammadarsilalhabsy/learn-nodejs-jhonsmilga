const { readFileSync, writeFileSync } = require("fs");

// read file
const firstFileBuffer = readFileSync("../content/first.txt"); // will return buffer
const firstFile = readFileSync("../content/first.txt", "utf-8");
const secondFile = readFileSync("../content/second.txt", "utf-8");

console.log("start task");
console.log(firstFileBuffer);
console.log(firstFile);
console.log(secondFile);

// write file (by default will override the content in the file)
writeFileSync(
  "../content/result-sync.txt",
  `Here the result : ${firstFile} and ${secondFile} `
);
console.log("done write into a file");

function write(text) {
  writeFileSync("../content/file-with-append.txt", `${text}`, { flag: "a" });
}

write("first line ");
write("it will beside the first line ");
write("\nthis is a new line ");
console.log("go to the next task");
