var express = require('express');

var app = express.createServer(express.logger()); 

app.get('/', function(request, response) {
    var fs = require('fs');
    var index_html = fs.readFileSync("index.html");
    var buf = new Buffer(index_html);
    for (var i = 0; i < index_html.length; i++){
	buf[i] = str.charCodeA(i);
	}
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
