// modules - encapsulatee code (only share minium)
// commonJS, every file is module (by def)

const names = require("./4-nameModule");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");

require("./7-mind-grenade");

sayHi(names.john);
sayHi(names.peter);
