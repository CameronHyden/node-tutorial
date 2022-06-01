const EventEmitter = require("events");

//create and instance from the above class
const customEmitter = new EventEmitter();
// listen to event
//can listen to as many as we want and produce different results
//we have to listen then emmit - the order matters
customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`diff result `);
});
// emmit, emmits on event
customEmitter.emit("response", "cam,", 11);
