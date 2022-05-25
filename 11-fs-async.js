const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    return "we broke";
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return "we broke";
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          return "errrro";
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next ");
