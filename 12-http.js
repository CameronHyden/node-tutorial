const http = require("http");

//reg = incoming request
//res = what we are sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("about us");
  }
  res.end(`<h1>opps</h1>
  <p> nothing here bruv </p>
  <a href="/">home</a>`);
});

server.listen(5000);
