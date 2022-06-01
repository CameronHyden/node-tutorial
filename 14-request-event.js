const http = require("http");

//what we have usally been doing
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

//differnt way to set serve up
// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
