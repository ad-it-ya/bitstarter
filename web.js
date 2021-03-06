var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var infile = "./index.html"

app.get('/', function(request, response) {
  var outponse = fs.readFileSync(infile, 'utf8');
  response.send(outponse);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
