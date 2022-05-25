const path = require("path");

console.log(path.sep);

//get path
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

//get last file in path
const baseName = path.basename(filePath);
console.log(baseName);

//gets absolute path, usefull has things run on different systems
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
