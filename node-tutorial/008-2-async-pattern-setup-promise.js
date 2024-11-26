const { readFile } = require("fs");
// cara 1
getText("./content/first.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function getText(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// cara 2
getText2("./contentt/third.txt");
async function getText2(path) {
  try {
    const response = await new Promise((resolve, reject) => {
      readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
