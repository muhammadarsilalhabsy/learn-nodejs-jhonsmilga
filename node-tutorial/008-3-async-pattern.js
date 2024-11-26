const { readFile } = require("fs");

// use then and catch
/*
getText("./content/first.txt")
  .then((data) => [console.log(data)])
  .catch((error) => {
    console.log(error);
  });
*/

// use async await
start();
async function start() {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
}

function getText(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}
