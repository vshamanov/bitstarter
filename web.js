var express = require('express');

var app = express.createServer(express.logger());


var hello_world = fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buff.toString(data);
}); 

app.get('/', function(request, response) {
    response.send(
	fs.readFile('index.html', function (err, data) {
	    if (err) throw err;
	    buff.toString(data);
	);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
