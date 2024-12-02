const http = require("http");

const server = http.createServer((req, res) => {
  // untuk membuat header response bisa menggunakan write head
  res.writeHead(200, "ok jih bang", {
    "content-type": "text/plain",
    "simple-header": "my header",
  });
  res.write("<h1>Home page</h1>");
  res.end();
});

server.listen(5000);
