// synchronous or Blocking - execution is line by line.
// asynchronous or non - blocking execution is not guaranteed line by line but based on callbacks and functions. 


// Asynchronous
const fs = require('fs');
fs.readFile("./textfiles/tute65.txt", "utf-8", (err, data) => {
    // this is callback function, it executes when the readFile operation is complete
    console.log(err, data);
});

console.log("This is a message which executed first before the readFile because nodejs follows non-blocking architecture ");