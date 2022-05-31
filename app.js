const { FORMERR } = require("dns");
const http = require("http");

const server = http.createServer((reg, res) => {
  if (reg.url === "/") {
    res.end("home page");
  }
  if (req.url === "/about") {
    //BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${j} ${i}`);
      }
    }
    res.end("about page");
  }
  res.end("error");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000.....");
});
