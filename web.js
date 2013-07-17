var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());

var indexBuffer = fs.readFileSync("index.html");
var indexString = indexBuffer.toString();

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
