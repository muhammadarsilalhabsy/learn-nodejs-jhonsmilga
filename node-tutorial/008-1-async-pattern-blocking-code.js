const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>This is a HOME page</h1>");
    return;
  }

  if (req.url === "/about") {
    // BLOCKING CODE
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        console.log(`${i} - ${j}`);
      }
    }
    res.end("<h1>This is a ABOUT page</h1>");
    return;
  }

  res.end("<h1>NOT FOUND page</h1>");
});

server.listen(5000, () => {
  console.log("server running on port 5000");
});
