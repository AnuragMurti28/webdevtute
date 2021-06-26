const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const homepage = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');


const home =

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(homepage);
    });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});