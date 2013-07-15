var express = require('express');
var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.bodyParser());
  app.use(app.router);
});

// render `post new job` form
app.get('/jobs/new', function(request, response) {
  response.render('add', { title: 'Post a job' });
});

// save new job into the db
app.post('/jobs/new', function(req, res){
  var name = req.body.name || 'default name';
  var description = req.body.description || 'default one';

  res.send('You submitted name: ' + name + ', and description: ' + description);
});

app.listen(app.get('port'));
