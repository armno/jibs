var express = require('express');
var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 5000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

app.use(app.router);

// render `post new job` form
app.get('/jobs/new', function(request, response) {
	response.render('add');
});

// save new job into the db
app.post('/jobs/new', function(req, res){
  res.end('This is happening');
});

app.listen(app.get('port'));
