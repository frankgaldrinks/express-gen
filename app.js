
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var server = http.createServer(app);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('blues clues'));
app.use(express.session());
app.use(function (req, res, next) {
  res.set('X-Powered-By', 'Call Generator');
  res.set('X-Made-By', 'odeton');
  next();
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res) {
  res.status(404);
  res.redirect('/');
  // res.render("404");
});

app.locals.pretty = true;
app.locals.title = "Call Generator";

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('/routes')(app);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
