const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    console.log(homePage);
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200);
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    res.writeHead(404);
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
