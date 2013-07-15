var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	response.send('<h1>Jibs is a job board</h1>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log('listening on ' + port);
});
