const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file-stream.txt", {
  highWaterMark: 10,
  encoding: "utf-8",
});
stream.on("data", (result) => {
  console.log(result);
});
