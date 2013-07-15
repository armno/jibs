var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Jibs is a job board');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log('listening on ' + port);
});
