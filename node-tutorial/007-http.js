const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("this is a home page");
    res.end();
    return;
  }

  if (req.url === "/about") {
    res.write("this is a about page");
    res.end();
    return;
  }

  res.write(`
    <h1>Opps!</h1>
    <p>This is default page if there's no matching url</p>
    <a href="/">Back home</a>
    `);
  res.end();
});

server.listen(5000);
