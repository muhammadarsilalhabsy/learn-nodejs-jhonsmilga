const { readFile, writeFile } = require("fs").promises;

// We can use util to return a promise to
/*
const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
*/

start();
async function start() {
  try {
    // read from a file

    // when using .promises at the end of require => require('fs').promises (works)
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");

    // when using util (works)
    // const first = await readFilePromise("./content/first.txt", "utf-8");
    // const second = await readFilePromise("./content/second.txt", "utf-8");

    console.log(first);
    console.log(second);

    // write into a file

    await writeFile(
      "./content/result-async-native-option.txt",
      `THIS IS AWESOME: ${first} - ${second}`,
      { flag: "a" }
    );

    // await writeFilePromise(
    //   "./content/result-async-native-option.txt",
    //   `THIS IS AWESOME: ${first} - ${second}`
    // );
  } catch (error) {
    console.log(error);
  }
}
