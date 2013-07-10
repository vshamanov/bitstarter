var express = require('express');

var app = express.createServer(express.logger());


var hello_world = fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buff.toString(data);
}); 

app.get('/', function(request, response) {
    var fs = require('fs');
    var index_html = fs.readFileSync("index.html");
    var buf = new Buffer(index_html);
    for (var i = 0; i < fileName.length; i++){
	buf[i] = str.charCodeA(i);
	}
    response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
