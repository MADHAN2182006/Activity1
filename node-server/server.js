const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to my Node.js Web Server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});