const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // normal read file
  // res.end(fs.readFileSync("./content/big-file-stream.txt", "utf-8"));

  // stream
  const stream = fs.createReadStream("./content/big-file-stream.txt", "utf-8");
  stream.on("open", () => {
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);
