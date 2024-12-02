const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./1-5-http/navbar-app/index.html");
const homeStyle = readFileSync("./1-5-http/navbar-app/styles.css");
const homeImage = readFileSync("./1-5-http/navbar-app/logo.svg");
const homeLogic = readFileSync("./1-5-http/navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    console.log(homePage);
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200);
    res.write(homeStyle);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200);
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200);
    res.write(homeLogic);
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
