const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('./tute8.html');

// creating server
const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent);
});

server.listen(5000, '127.0.0.1', () => {

    console.log("listening on port 5000");

})