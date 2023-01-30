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
    res.write('<html></html>');
    res.end();
  } else if (req.url == '/contact') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write('<html></html>');
    res.end();
  } else if (req.url == '/gallery') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write('<html></html>');
    res.end();
  } else if (req.url == '/new') {
    //set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //set responce content
    res.write('<html></html>');
    res.end();
  }
});
