//Task Name: Lab 3
//Author: Jazper Garcia
//Section: WD-201

//Use require() to import local module

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write(
      '<html><head><h1>Welcome to my Node.js Application</h1></head><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write(
      '<html><head><h1>This is the About Page</h1></head><body><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write(
      '<html><head><h1>This is the Contact Page</h1></head><body><p>John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodes.js-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write(
      '<html><head><h1>This is Gallery Page</h1></head><body><p></p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running');
