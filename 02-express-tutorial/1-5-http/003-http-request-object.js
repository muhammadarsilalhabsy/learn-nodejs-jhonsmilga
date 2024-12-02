const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  const url = req.url;
  console.log(url);

  if (url === "/") {
    res.writeHead(200, "Aman jih bang", {
      "content-type": "text/html",
      "simple-header": "my header",
    });
    res.write("<h1>Home page</h1>");
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
